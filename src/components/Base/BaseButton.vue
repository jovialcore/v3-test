<template>
  <button :disabled="disabled" :class="classes">
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
    dashboard: { type: Boolean },
    navbar: { type: Boolean },
    logout: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      block: props.block,
      btn: true,
      circle: props.circle,
      danger: props.danger,
      dark: props.dark,
      light: props.light,
      dashboard: props.dashboard,
      navbar: props.navbar,
      logout: props.logout,
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
  font-size: 17px;
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

  &:disabled {
    cursor: not-allowed;
    background-color: $button-gray-color;
  }
}
button.dashboard {
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 13px;
  font-weight: 500;
  height: auto;
  border: 0.0625rem solid hsla(0, 0%, 0%, 0.15);
  background-image: linear-gradient(
    -180deg,
    transparent 0%,
    hsla(0, 0%, 0%, 0.075) 90%
  );
  gap: 5px;
  &.neutral {
    background: $button-neutral-dashboard;
    color: $text-color;
  }
  &:active {
    box-shadow: inset 0 0.25rem 0.375rem rgba($color: #000, $alpha: 0.1);
  }
}
button.navbar {
  padding: 0.5rem;
  font-size: 13px;
  border: none;
  border-radius: 0%;
  height: auto;
  background-image: linear-gradient(
    -180deg,
    transparent 0%,
    hsla(0, 0%, 0%, 0.075) 90%
  );
  background: $neutral-1;
  color: $text-color;
  transition: background 0.15s;
  gap: 5px;
  justify-content: initial;
  &:hover {
    background: $secondary;
  }
  &.logout {
    border-top: 1px dashed $border-neutral;
  }
  &.logout:hover {
    background: red;
    color: $neutral-1;
  }
}
</style>
