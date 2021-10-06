<template>
  <button
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    block: { type: Boolean },
    circle: { type: Boolean },
    danger: { type: Boolean },
    dark: { type: Boolean },
    disabled: { type: Boolean, default: false },
    isLoading: { type: Boolean },
    light: { type: Boolean },
    neutral: { type: Boolean },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    undo: { type: Boolean },
    transparent: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      block: props.block,
      btn: true,
      circle: props.circle,
      danger: props.danger,
      dark: props.dark,
      light: props.light,
      neutral: props.neutral,
      primary: props.primary,
      secondary: props.secondary,
      success: props.success,
      transparent: props.transparent,
      undo: props.undo,
    }));

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
button, .btn {
  font-size: 20px;
  width: fit-content;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  cursor: pointer;
  background: transparent;
  outline: none !important;
  border-radius: 5px;
  padding: 10px;
  &.block {
    width: 100%;
  }
  &.neutral {
    border: 1px solid $border-neutral;
  }
  &.primary {
    background-color: $primary-button;
    color: $neutral-1;
  }
  &.undo {
    border: 1px solid $border-neutral;
    background-color: $text-soft-grey-2;
    color: $text-dark-contrast;
  }

  &:disabled{
    cursor: not-allowed;
    background-color: $button-gray-color;
  }
}
</style>
