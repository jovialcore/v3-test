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
        {{ t('ForgotPassword.description.hasAccount') }}
        <base-link :to="{ name: 'Login' }">
          {{ t('ForgotPassword.description.hasAccountLink') }}
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
.description {
  h1 {
    color: $text-dark-grey-3;
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
