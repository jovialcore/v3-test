<template>
  <div class="description">
    <h1>{{ t(`Login.description.main`) }}</h1>
    <p>{{ t(`Login.description.sub`) }}</p>
    <img
      v-lazy="{ src: '/images/login/login.png' }"
      class="descriptive"
      alt="Four people celebrating"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>

<style lang="scss" scoped>
div.description {
  p {
    flex-grow: 1;
  }
}
</style>
