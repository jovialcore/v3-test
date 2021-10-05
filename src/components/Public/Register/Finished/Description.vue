<template>
  <div class="description">
    <h1>{{ t(`RegisterFinished.description.main`) }}</h1>
    <p>{{ t(`RegisterFinished.description.sub`) }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref,
} from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const langStorage = localStorage.getItem('lang');
    const currentLang = ref(langStorage || 'br');
    const i18n = useI18n();

    return { currentLang, t: i18n.t };
  },
});
</script>

<style lang="scss" scoped>
</style>
