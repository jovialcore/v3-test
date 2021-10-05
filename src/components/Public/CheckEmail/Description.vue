<template>
  <div class="description">
    <h1>{{ t(`CheckEmail.description.main`) }}</h1>
    <p v-if="email">{{ t(`CheckEmail.description.sub`, { email }) }}</p>
    <img
      class="descriptive"
      v-lazy="{ src: '/images/login/check-email.png' }"
      alt="check email figure"
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
import {
  defineComponent,
  computed,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const langStorage = localStorage.getItem('lang');
    const currentLang = ref(langStorage || 'br');
    const i18n = useI18n();
    const email = computed(() => {
      const user = store.getters['user/getCurrentUser'];
      if (user) return user.email;
      return '';
    });
    watch(currentLang, (newValue) => {
      window.localStorage.setItem('lang', newValue);
      i18n.locale.value = newValue;
    });

    return { currentLang, email, t: i18n.t };
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
