<template>
  <li>
    <img
      v-lazy="{ src: '/images/login/check.png' }"
      alt="check"
      class="check-icon"
    />{{ label }}
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});

</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: $text-dark-grey-2
}
.check-icon {
  width: 32px;
  height: 32px;
}
</style>
