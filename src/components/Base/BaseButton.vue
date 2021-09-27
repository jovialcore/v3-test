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
    isLoading: { type: Boolean },
    disabled: { type: Boolean, default: false },
    primary: { type: Boolean },
    neutral: { type: Boolean },
    secondary: { type: Boolean },
    block: { type: Boolean },
    danger: { type: Boolean },
    success: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    circle: { type: Boolean },
    transparent: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      btn: true,
      neutral: props.neutral,
      primary: props.primary,
      secondary: props.secondary,
      block: props.block,
      danger: props.danger,
      success: props.success,
      dark: props.dark,
      light: props.light,
      circle: props.circle,
      transparent: props.transparent,
    }));

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
button, .btn {
  font-family: 'Montserrat', 'Roboto', sans-serif;
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
  // color: $button-gray-color;
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

  &:disabled{
    cursor: not-allowed;
  }
}
</style>
