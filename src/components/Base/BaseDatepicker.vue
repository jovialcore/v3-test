<template>
  <div
    class="base-datepicker"
    :class="classes"
  >
    <label v-if="label">{{ label }}</label>
    <div
      class="input-container"
      :class="{focus: data.isFocused, ...classes}"
    >
      <input
        type="date"
        :value="data.value"
        :required="required"
        @input="updateValue"
        @focusin="data.isFocused = !data.isFocused"
        @focusout="data.isFocused = !data.isFocused"
      >
      <font-awesome-icon
        class="icon"
        :icon="['far','calendar']"
      />
      <span
        v-if="required"
        class="required"
      >*</span>
    </div>
    <span class="error-text">
      {{ error }}
    </span>
  </div>
</template>
<script lang="ts">
import {
  computed, defineComponent, onMounted, reactive, watch,
} from 'vue';

export default defineComponent({
  name: 'BaseDatepicker',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    label: { type: String, required: false, default: '' },
    modelValue: { type: [String, Date], default: '' },
    error: { type: String, default: '' },
    block: { type: Boolean },
    required: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
      error: props.error,
      hasData: props.modelValue,
    }));

    const data = reactive({
      isFocused: false,
      value: '',
    });

    function updateValue(event: Event) {
      const { value } = event.target as HTMLInputElement;

      data.value = value;

      if (data.value !== '') {
        emit('update:modelValue', new Date(data.value).toISOString());
      } else {
        emit('update:modelValue', '');
      }
    }

    function replaceModelValue() {
      if (props.modelValue) {
        data.value = new Date(props.modelValue).toISOString().substr(0, 10);
      }
    }

    onMounted(() => {
      replaceModelValue();
    });

    watch(() => props.modelValue, () => {
      replaceModelValue();
    });

    return {
      classes,
      data,
      updateValue,
    };
  },
});
</script>

<style scoped lang="scss">
.base-datepicker {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &.block {
    width: 100%;
  }

  label {
    color: $input-labels;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .input-container {
    position: relative;
    border: 1px solid $border-neutral;
    color: $text-dark-grey-2;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 0 1rem;

    &.error {
      border-color: $error;
      background: $white;
    }

    &.focus, &.hasData {
      border-color: $primary-button;
      background-color: $transparent-focus-bg-elements;
    }

    input {
      height: 3rem;

      border: 0;
      outline: none;

      font-size: 14px;

      background: transparent;

      padding: 1rem 0;

      &::-webkit-inner-spin-button,
      &::-webkit-clear-button { display: none; }

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
    .required {
      position: absolute;
      top: 4px;
      right: 8px;
      color: $error;
    }

    .icon {
      right: 8px;
      color: $text-color;
    }
  }

  .error-text {
    color: $error;
    padding-left: 8px;
  }
}
</style>
