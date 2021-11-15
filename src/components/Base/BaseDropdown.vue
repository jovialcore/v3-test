<template>
  <div class="base-dropdown">
    <div
      class="button"
      @click="isOpen = !isOpen"
      @keyup.esc="isOpen = false"
    >
      <slot />
    </div>
    <div :class="{options: true, active: isOpen}">
      <div
        v-for="option in options"
        :key="`option_${option[keyName]}`"
        class="option"
        @click="selectOption(option[keyName])"
      >
        <font-awesome-icon
          v-if="option.icon"
          :icon="option.icon"
        />
        {{ option[valueName] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  name: 'BaseDropdown',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    options: { type: Array as PropType<OptionType[]>, default: () => [], required: true },
    keyName: { type: String, default: 'key' },
    valueName: { type: String, default: 'value' },
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const isOpen = ref();

    function selectOption(optionKey: string | number) {
      isOpen.value = false;

      emit('update:modelValue', optionKey);
    }

    return {
      isOpen,
      selectOption,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-dropdown {
  position: relative;
  display: flex;
  justify-content: flex-end;

  .button {
    cursor: pointer;
  }

  .options {
    display: none;
    position: absolute;
    top: 32px;
    background: #fff;
    border-radius: 8px;

    -webkit-box-shadow: 0px 8px 16px 0px #00000034;
    box-shadow: 0px 8px 16px 0px #00000034;

    transition: all 0.2s ease-in-out;

    &.active {
      display: flex;
      flex-direction: column;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #000;

      padding: 8px 32px 8px 16px;

      transition: all 0.2s ease-in-out;

      svg {
        color: #000;
      }

      &:hover{
        background: $primary-bg-elements;
      }
    }
  }
}
</style>
