<template>
  <button class="button-table" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    selected: { type: Boolean },
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    const classes = computed(() => ({
      selected: props.selected
    }));

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
.button-table {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  outline: none !important;
  padding: 1.5rem;
  line-height: 0;

  color: $text-dark-grey-5;
  background: #F7F7F7;
  border: 1px solid $text-soft-grey;
  border-radius: 8px;

  transition: background 0.2s ease-in-out;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &.selected, &:hover:not(:disabled) {
    background-color: #5ABE73;
    color: #F1F6F2;
  }
}
</style>
