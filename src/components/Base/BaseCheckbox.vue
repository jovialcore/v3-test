<template>
  <div
    class="input-container"
    :class="classes"
  >
    <input
      type="checkbox"
      :id="id"
      @input="updateValue"
    >
    <label :for="id" v-if="label">{{ label }}</label>
    <span>
      {{ error }}
    </span>
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
    id: { type: String, required: true },
    label: { type: String, required: false, default: '' },
    modelValue: { type: Boolean, default: false },
    error: { type: String, default: '' },
    block: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
    }));

    function updateValue(event: Event) {
      const { checked } = event.target as HTMLInputElement;

      emit('update:modelValue', checked);
    }

    return {
      updateValue,
      classes,
    };
  },
});
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 3px;

  input {
    border: 1px solid $border-neutral;
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(1.5);
    outline: none !important;
    border-radius: 5px;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $text-soft-grey;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $text-soft-grey;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: $text-soft-grey;
    }
  }

  span {
    color: $error;
    padding-left: 8px;
  }
}
</style>
