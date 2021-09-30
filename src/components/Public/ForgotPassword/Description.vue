<template>
  <div class="description">
    <h1>{{ t(`ForgotPassword.description.main`) }}</h1>
    <p>{{ t(`ForgotPassword.description.sub`) }}</p>
    <img
      class="descriptive"
      v-lazy="{ src: '/images/login/forgot-password.png' }"
      alt="gold fish figure"
    />
    <div class="description-footer">
      <p>
        {{ t('ForgotPassword.description.has_account') }}
        <base-link :to="{ name: 'Login' }">
          {{ t('ForgotPassword.description.has_account_link') }}
        </base-link>
      </p>
      <p>
        {{ t('ForgotPassword.description.register') }}
        <base-link :to="{ name: 'RegisterStep1' }">
          {{ t('ForgotPassword.description.register') }}
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
    color: $link-color;
  }
  .description-footer p {
    margin-bottom: 0;
  }
}
</style>
