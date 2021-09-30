<template>
  <div class="description">
    <h1>{{ t(`Login.description.main`) }}</h1>
    <p>{{ t(`Login.description.sub`) }}</p>
    <img
      class="descriptive"
      alt="Four people celebrating"
      v-lazy="{ src: '/images/login/login.png' }"
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
