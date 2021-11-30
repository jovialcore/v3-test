<template>
  <div
    class="base-multiple-select"
    :class="classes"
  >
    <label v-if="label">{{ label }}</label>

    <div
      class="input-container"
      :class="{
        focus: data.isFocused,
      }"
    >
      <div
        class="tags"
        :focus="data.isFocused"
      >
        <div
          v-for="tag in data.elements"
          :key="`tag_${tag}`"
          class="tag"
        >
          {{ getTagText(tag)[valueName] }}
          <font-awesome-icon
            icon="times"
            @click="removeSelection(tag)"
          />
        </div>
      </div>
      <input
        type="text"
        :v-model="data.search"
        :placeholder="placeholder"
        @input="filterOptions"
        @click="data.isFocused = !data.isFocused"
      >
    </div>
    <ul
      v-if="data.isFocused"
      class="options"
    >
      <li
        v-for="option in data.options"
        :key="`option_${option[keyName]}`"
        :class="{
          isSelected: hasSelected(option[keyName])
        }"
        @click="selectedNewItem(option[keyName])"
      >
        <slot
          :item="option"
          name="option"
        >
          {{ option[valueName] }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, onBeforeMount, PropType, reactive, ref,
} from 'vue';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  name: 'BaseMultipleSelect',
  props: {
    label: { type: String, required: false, default: '' },
    options: { type: Array as PropType<OptionType[]>, default: () => [], required: true },
    modelValue: { type: Array as PropType<string[]>, default: () => [], required: true },
    placeholder: { type: String, default: '' },
    keyName: { type: String, default: 'key' },
    valueName: { type: String, default: 'value' },
    block: { type: Boolean },
  },
  emits: ['change:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
    }));
    const data = reactive({
      isFocused: false,
      search: '',
      elements: [] as string[],
      options: [] as OptionType[],
    });

    function getTagText(tag: string) {
      return props.options.filter((item) => item[props.keyName] === tag)[0];
    }

    function removeSelection(tag: string) {
      data.elements = data.elements.filter((item) => item !== tag);
      emit('change:modelValue', data.elements);
    }

    function hasSelected(search: string | number) {
      const selected = props.modelValue.filter((item) => item === search);

      return selected.length === 1;
    }

    function selectedNewItem(search: string | number) {
      if (!hasSelected(search)) {
        data.elements.push(String(search));

        data.isFocused = !data.isFocused;
        data.search = '';

        emit('change:modelValue', data.elements);
      }
    }

    function filterOptions(event: Event) {
      const target = event.target as HTMLInputElement;
      const value = (target.value || '').toLowerCase();

      if (value === '') {
        data.options = props.options;
      } else {
        data.options = props.options.filter((item) => {
          for (const keyName in item) {
            const currentValue = String(item[keyName]).toLowerCase();
            if (currentValue.includes(value)) return true;
          }
          return false;
        });
      }
    }

    onBeforeMount(() => {
      if (props.modelValue.length > 0) {
        data.elements = props.modelValue as string[];
        data.options = props.options;
      }
    });

    return {
      classes,
      data,
      getTagText,
      removeSelection,
      hasSelected,
      selectedNewItem,
      filterOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-multiple-select{
  position: relative;
  display: flex;
  flex-direction: column;

  &.block {
    width: 100%;
  }

  label {
    color: $input-labels;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .input-container{
    display: flex;
    align-items: center;
    border: 1px solid $border-neutral;
    padding: 1rem;
    height: 3rem;
    color: $text-dark-grey-2;

    border-radius: 5px;
    font-size: 14px;

    &.focus {
      border-color: $primary-button;
      background-color: $transparent-focus-bg-elements;
    }
    &.focus {
      border-color: $primary-button;
      background-color: $transparent-focus-bg-elements;
    }
    .tags {
      display: flex;
      gap: 8px;

      .tag{
        display: flex;
        align-items: center;
        gap: 8px;

        padding: 4px 8px;

        border-radius: 16px;

        border: 1px solid $primary-bg-elements;
        background: $transparent-focus-bg-elements;

        svg {
          color: $primary-bg-elements;

          cursor: pointer;
        }
      }
    }

    input {
      width: 100%;
      border: 0;
      padding: 1rem;
      height: 3rem;
      outline: none;
      background: transparent;

      &.error {
        border-color: $error;
      }

      &::placeholder {
        color: $text-soft-grey;
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: $text-soft-grey;
      }

      &::-ms-input-placeholder {
        color: $text-soft-grey;
      }

    }

    svg {
      &.hidden {
        opacity: 0;
      }
    }
  }

  .options{
    position: absolute;
    background-color: $white-bg-elements;
    top: 52px;
    width: 100%;
    list-style: none;
    z-index: $second-layer;

    -webkit-box-shadow: 0px 8px 16px 0px #00000034;
    box-shadow: 0px 8px 16px 0px #00000034;

    li {
      padding: 1rem;
      color: $text-dark-grey-3;
      cursor: pointer;

      &:hover{
        background: $transparent-focus-bg-elements;
      }
      &.isSelected{
        background: $transparent-focus-bg-elements;
        cursor: not-allowed;
      }
    }
  }
}

</style>
