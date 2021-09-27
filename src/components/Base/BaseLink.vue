<template>
  <router-link
    :to="to"
    :class="classes"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
    to: { default: {} },
    primary: { type: Boolean },
    neutral: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      neutral: props.neutral,
      primary: props.primary,
    }));

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>

a{
  color:  $text-soft-grey;
  text-decoration: none;
  &.primary, &.primary:visited {
    color: $primary-button;
  }
}

</style>
