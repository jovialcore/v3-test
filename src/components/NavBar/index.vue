<template>
  <nav class="navbar">
    <select-flag v-model="currentLang"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import SelectFlag from './SelectFlag.vue';

export default defineComponent({
  components: {
    SelectFlag,
  },
  setup() {
    const langStorage = localStorage.getItem('lang');
    const currentLang = ref(langStorage || 'br');
    const i18n = useI18n();

    watch(() => currentLang.value, (a) => {
      window.localStorage.setItem('lang', a);
      i18n.locale.value = a;
    });

    return {
      currentLang,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  background: $primary;
  color: $neutral-1;

  display: flex;
  align-items: center;
  justify-content: right;

  padding: 16px 32px;
}
</style>
