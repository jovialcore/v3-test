<template>
  <button
    class="sidebar-button"
    :class="classes"
  >
    <img
      v-if="icon && !fontAwesome"
      v-lazy="{ src: icon }"
      :alt="alt || 'icon'"
      :width="iconSize"
      :height="iconSize"
    >
    <font-awesome-icon
      v-if="icon && fontAwesome"
      :icon="icon"
      :style="{ width: iconSize, height: iconSize }"
    />
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: { type: String, default: undefined },
    fontAwesome: { type: Boolean },
    iconSize: { type: String || Number, default: '24' },
    alt: { type: String, default: 'sidebar item' },
    label: { type: String, default: undefined },
    row: { type: Boolean },
    submenu: { type: Boolean, default: false },
    block: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      row: props.row,
      block: props.block,
      submenu: props.submenu,
    }));
    return { classes };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  background: transparent;
  border: none;
  font-family: 'SF UI Display Light';
  cursor: pointer;
  padding: 0.75rem;
  &:hover {
    background: $secondary;
  }
  &.block {
    width: 100%;
    justify-content: initial;
  }
  &.submenu{
    &:hover {
      background-color: #1f2531;
    }
  }
}
.sidebar-button svg {
  color: inherit;
}
.sidebar-button.row {
  flex-direction: row;
  gap: 8px;
}
</style>
