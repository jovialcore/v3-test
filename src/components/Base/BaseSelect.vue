<template>
  <div class="form-field" :class="classes">
    <label v-if="label">{{ label }}</label>
    <select
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disable"
      @change="$emit('change')"
    >
      <option value="" disabled :selected="!modelValue">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :selected="modelValue === option"
        :value="option"
        :key="`${index}`"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    label: { type: String, required: false },
    placeholder: { type: String },
    options: { type: Array, default: (): Array<Record<string, string>> => [], required: true },
    modelValue: { type: String },
    disable: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
  },
  setup(props) {
    const classes = computed(() => ({
      block: props.block,
    }));
    return { classes };
  },
});
</script>

<style scoped lang="scss">
.form-field {
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
    &:focus,
    &:focus-visible {
      outline: none !important;
      border: 1px solid $secondary;
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
</style>
