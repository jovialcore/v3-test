<template>
  <div class="description">
    <h1>{{ t(`CheckEmail.description.main`) }}</h1>
    <p>{{ t(`CheckEmail.description.sub`) }}: {{email}}</p>
    <img
      class="descriptive"
      v-lazy="{src: './images/login/forgot-password.png'}"
      alt="gold fish figure"
    />
    <div class="description-footer">
      <p>
        {{ t('CheckEmail.description.has_account') }}
        <base-link :to="{ name: 'Login' }">
          {{ t('CheckEmail.description.has_account_link') }}
        </base-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const langStorage = localStorage.getItem('lang');
    const currentLang = ref(langStorage || 'br');
    const i18n = useI18n();

    watch(currentLang, (newValue) => {
      window.localStorage.setItem('lang', newValue);
      i18n.locale.value = newValue;
    });

    return { currentLang, t: i18n.t };
  },
});
</script>

<style lang="scss" scoped>
.description {
  h1 {
    color: #404446;
    font-weight: bold;
    font-size: 32px;
  }
  a {
    color: #1f78de;
  }
  .description-footer p {
    margin-bottom: 0;
  }
}
</style>
