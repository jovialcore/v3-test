<template>
  <div class="description">
    <h1>{{ t(`Register.description.main`) }}</h1>
    <p>{{ t(`Register.description.sub`) }}</p>
    <img
      class="descriptive"
      v-lazy="{src: './images/login/registration-step1.png'}"
      alt="registration-step1"
    />
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
