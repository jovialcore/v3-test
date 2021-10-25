<template>
  <form
    class="form"
    @submit.prevent
  >
    <div class="form-content">
      <div class="form-title">
        <span>{{ t(`Register.form.prelude`) }}</span>
        <h1>{{ t(`Register.form.title`) }}</h1>
        <p>
          {{ t(`Register.form.subtitle`) }}
          <base-link
            primary
            :to="{ name: 'Login' }"
          >
            {{ t(`Register.form.subtitleLink`) }}
          </base-link>
        </p>
      </div>
      <div class="inputs">
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :label="t(`Register.form.email`)"
          :placeholder="t(`Register.form.emailPlaceholder`)"
        />
        <base-input
          v-model="v$.password.$model"
          :error="v$.password.$errors[0]?.$message"
          type="password"
          :label="t(`Register.form.password`)"
          :placeholder="t(`Register.form.passwordPlaceholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            :disabled="!(!v$.$invalid)"
            block
            primary
            @click="handleRegister"
          >
            {{ t(`Register.form.registerButton`) }}
          </base-button>
        </div>
        <base-button
          block
          neutral
          @click="handleGoogleRegister"
        >
          <img
            v-lazy="{ src: '/images/login/g-icon.png' }"
            class="descriptive"
            alt="Google G icon"
          >
          {{ t(`Register.form.registerWithGoogle`) }}
        </base-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core';
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {
  required, email, minLength, upperCase,
} from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';
import GoogleAuth from '@/utils/GoogleAuth';
import { CheckEmailType, RegisterAccessDataType, RegisterType } from '@/store/modules/auth';
import useToast from '@/hooks/useToast';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    const form = computed<RegisterAccessDataType>(() => store.getters['auth/getRegisterAccessData']);
    const register = computed<RegisterType>(() => store.getters['auth/getRegisterData']);
    const checkEmail = computed<CheckEmailType>(() => store.getters['auth/getCheckEmailData']);

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6), upperCase },
    } as RulesType;

    const v$ = useVuelidate(rules, form.value);

    async function handleRegister() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        form.value.language = window.localStorage.getItem('lang') || 'us';
        try {
          const response = await store.dispatch('auth/submitRegister');

          checkEmail.value.email = form.value.email;
          checkEmail.value.language = form.value.language;

          if (response.data) {
            toast.open({ mesage: response.data.msg });
            router.push({ name: 'CheckEmail' });
          }
        } catch (err) {
          toast.open({ mesage: err?.response?.data?.message });
        }
      }
    }

    async function handleGoogleRegister() {
      const auth = await GoogleAuth();
      const user = await auth.signIn();

      register.value.data.firstName = user.getBasicProfile().getGivenName();
      register.value.data.lastName = user.getBasicProfile().getFamilyName();

      router.push({
        name: 'RegisterStep3',
        params: {
          token: user.getAuthResponse().id_token,
          isGoogle: 'true',
        },
      });
    }

    return {
      v$, t, handleRegister, handleGoogleRegister,
    };
  },
});
</script>

<style>
</style>
