<template>
  <div class="input-container" :class="classes">
    <label v-if="label">{{ label }}</label>
    <select
      @input="updateValue"
      :disabled="disable"
      :class="classes"
      @change="$emit('change')"
    >
      <option value="" disabled :selected="!modelValue">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :selected="modelValue === option[value]"
        :value="option[value]"
        :key="`${index}`"
      >
        {{ option[text] }}
      </option>
    </select>
    <span>
      {{ error }}
    </span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    label: { type: String, required: false },
    placeholder: { type: String },
    error: { type: String, default: '' },
    options: { type: Array as PropType<OptionType[]>, default: () => [], required: true },
    modelValue: { type: [Number, String] },
    disable: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    value: {
      type: String,
      required: false,
      default: '_id',
    },
    text: {
      type: String,
      default: 'text',
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
      error: props.error,
    }));

    function updateValue(event: Event) {
      const { value } = event.target as HTMLInputElement;

      emit('update:modelValue', value);
    }
    return { classes, updateValue };
  },
});
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  label {
    font-size: 18px;
    font-weight: 700;
  }

  select {
    height: 48px;
    border: 1px solid #dedede;

    font-size: 16px;

    padding-left: 16px;
    padding-right: 16px;

    border-radius: 4px;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    cursor: pointer;
    background: url('../../assets/icons/select_icon.svg') no-repeat 95% !important;

    &:disabled {
      cursor: not-allowed;
    }
    &.error{ /* Microsoft Edge */
      border-color: $error;
    }
    &:focus,
    &:focus-visible {
      outline: none !important;
      border: 1px solid $secondary;
      option {
        background-color: rgba(6,231,205,0.05);
      }
    }
  }
  &.block {
    width: 100%;
  }
}

.options {
  font-size: 16px;
  font-weight: 400;
  background: var(--white);
  color: black;
}

span {
  color: $error;
  padding-left: 8px;
}
</style>
