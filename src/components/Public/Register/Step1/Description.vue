<template>
  <div class="description">
    <h1>{{ t(`Register.description.main`) }}</h1>
    <p>{{ t(`Register.description.sub`) }}</p>
    <img
      class="descriptive"
      v-lazy="{ src: '/images/login/registration-step1.png' }"
      alt="registration-step1"
    />
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
