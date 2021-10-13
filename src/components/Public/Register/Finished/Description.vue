<template>
  <div class="description">
    <h1>{{ t(`RegisterFinished.description.main`) }}</h1>
    <p>{{ t(`RegisterFinished.description.sub`) }}</p>
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
</style>
