<template>
  <fieldset
    class="mult-checkbox"
  >
    <legend v-if="label">
      {{ label }}
    </legend>
    <div
      :class="{
        inputs: true,
        row: orientation === 'row',
        column: orientation === 'column'
      }"
    >
      <label
        v-for="option in options"
        :key="option.value"
        class="input-container"
      >
        <input
          :name="`group_${label}`"
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @input="updateValue"
        >
        <div class="titles">
          <span v-if="option.title">
            {{ option.title }}
          </span>
          <span v-if="option.subtitle">
            {{ option.subtitle }}
          </span>
        </div>
      </label>
    </div>
    <span class="error">
      {{ error }}
    </span>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

type OptionType = {
  value: string;
  title: string;
  subtitle?: string;
}

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    label: { type: String, required: false, default: '' },
    modelValue: { type: [Number, String], default: '' },
    options: { type: Array as PropType<Array<OptionType>>, default: () => [] },
    error: { type: String, default: '' },
    orientation: { type: String, default: 'row' },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    function updateValue(event: Event) {
      const { value } = event.target as HTMLInputElement;

      emit('update:modelValue', value);
    }

    return {
      updateValue,
    };
  },
});
</script>

<style scoped lang="scss">
fieldset {
  border: 0;
  display: flex;

  > legend{
    font-weight: bold;
    color: $text-dark-grey-3;
  }

  .inputs {
    display: flex;
    gap: 8px;

    padding-top: 16px;

    &.row {
      flex-direction: row;
    }
    &.column {
      flex-direction: column;
    }

    label {
      cursor: pointer;
      display: flex;
      gap: 8px;

      & > input {
        position: relative;
        height: 25px;
        width: 25px;
        min-width: 25px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border: 1px solid $border-neutral;
        outline: none;
        transition-duration: 0.3s;
        background-color: $white-bg-elements;
        cursor: pointer;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        &:checked, &:active {
          background-color: $primary-bg-elements;

          &::before {
            content: '';
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: $white-bg-elements;
          }
        }
      }

      & > .titles {
        display: flex;
        flex-direction: column;

        > span:first-child {
          font-weight: bold;
          color: $text-dark-grey-3;
        }
      }
    }
  }

  span.error {
    font-weight: 400;
    color: $error;
    padding-left: 8px;
  }
}
</style>
