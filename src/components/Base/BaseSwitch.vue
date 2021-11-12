<template>
  <label class="switch">
    <input
      class="input"
      type="checkbox"
      :checked="modelValue"
      @change="updateValue"
    >
    <span
      class="label"
      :on-text="onText"
      :off-text="offText"
    />
    <span
      class="handle"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'tInputText',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    modelValue: { type: Boolean, required: true },
    onText: { type: String, default: '' },
    offText: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    function updateValue(event: Event) {
      const value = (event.target as HTMLInputElement).checked;

      emit('update:modelValue', value);
    }
    return {
      updateValue,
    };
  },
});
</script>

<style lang="scss" scoped>

.switch {
  display: block;
  position: relative;

  width: 84px;
  height: 32px;

  border-radius: 18px;
  cursor: pointer;

  .input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    box-sizing: content-box;

    &:checked ~ .label {
      background: #61B271;
    }
    &:checked ~ .label:before {
      opacity: 0;
    }
    &:checked ~ .label:after {
      opacity: 1;
    }
    &:checked ~ .handle {
      left: 56px;
    }
  }
  .label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 14px;
    background: #D17059;
    border-radius: inherit;

    &:before, &:after {
      position: absolute;
      top: 50%;
      margin-top: -.5em;
      line-height: 1;
      -webkit-transition: inherit;
      -moz-transition: inherit;
      -o-transition: inherit;
      transition: inherit;
      box-sizing:content-box;
    }
    &:before {
      content: attr(off-text);
      right: 22px;
      color: #FFF;
    }
    &:after {
      content: attr(on-text);
      left: 22px;
      color: #FFFFFF;
      opacity: 0;
    }
  }
  .handle {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 100%;
  }
}

.switch-label, .handle {
  transition: All 0.3s ease;
  -webkit-transition: All 0.3s ease;
  -moz-transition: All 0.3s ease;
  -o-transition: All 0.3s ease;
}
</style>
