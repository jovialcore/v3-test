<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <span>{{ t(`Register.form.prelude`) }}</span>
        <h1>{{ t(`Register.form.title`) }}</h1>
        <p>
          {{ t(`Register.form.subtitle`) }}
          <base-link primary :to="{ name: 'Login' }">
            {{ t(`Register.form.subtitle_link`) }}
          </base-link>
        </p>
      </div>
      <div class="inputs">
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :label="t(`Register.form.email`)"
          :placeholder="t(`Register.form.email_placeholder`)"
        />
        <base-input
          v-model="v$.password.$model"
          :error="v$.password.$errors[0]?.$message"
          type="password"
          :label="t(`Register.form.password`)"
          :placeholder="t(`Register.form.password_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            @click="handleSubmit"
            :disabled="!(!v$.$invalid)"
            block
            primary
          >
            {{ t(`Register.form.register_button`) }}
          </base-button>
        </div>
        <base-button block neutral>
          <img
            class="descriptive"
            alt="Google G icon"
            v-lazy="{ src: '/images/login/g-icon.png' }"
          />
          {{ t(`Register.form.register_with_google`) }}
        </base-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {
  required, email, minLength, upperCase,
} from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: '',
      password: '',
      language: '',
    });

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6), upperCase },
    } as RulesType;

    const v$ = useVuelidate(rules, form);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        form.language = window.localStorage.getItem('lang') || 'us';
        store.dispatch('user/setUser', { email: form.email });
        store.dispatch('auth/setRegisterAccessData', form);

        const response = await store.dispatch('auth/submitRegister', form);

        if (response.data) {
          router.push({ name: 'CheckEmail' });
        }
      }
    }
    return {
      v$, t, handleSubmit,
    };
  },
});
</script>

<style>
</style>
