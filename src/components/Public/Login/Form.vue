<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Login.form.title`) }} &#9996;</h1>
        <p>
          {{ t(`Login.form.subtitle`) }}
          <base-link primary :to="{ name: 'RegisterStep1' }">
            {{ t(`Login.form.subtitle_link`) }}
          </base-link>
        </p>
      </div>
      <div class="inputs">
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :label="t(`Login.form.email`)"
          :placeholder="t(`Login.form.email_placeholder`)"
        />
        <base-input
          v-model="v$.password.$model"
          :error="v$.password.$errors[0]?.$message"
          type="password"
          :label="t(`Login.form.password`)"
          :placeholder="t(`Login.form.password_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            @click="handleLogin"
            :disabled="v$.$invalid"
            block
            primary
          >{{
            t(`Login.form.login_button`)
          }}</base-button>
          <div class="forgot_password">
            <base-link :to="{ name: 'ForgotPassword' }">
              {{ t(`Login.form.forgot_password`) }}
            </base-link>
          </div>
        </div>
        <base-button
          @click="handleGoogleLogin"
          block
          neutral
        >
          <img
            class="descriptive"
            alt="Google G icon"
            v-lazy="{ src: '/images/login/g-icon.png' }"
          />
          {{ t(`Login.form.login_with_google`) }}
        </base-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from '@vuelidate/core';
import { useRouter } from 'vue-router';
import GoogleAuth from '@/utils/GoogleAuth';
import {
  required, email, maxLength, minLength,
} from '@/utils/I18nValidators';
import useToast from '@/hooks/useToast';

import { LoginDataType } from '@/store/modules/auth';
import { RulesType } from '@/types/Vuelidate';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    const form = computed<LoginDataType>(() => store.getters['auth/getLoginData']);

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6), maxLength: maxLength(16) },
    } as RulesType;

    const v$ = useVuelidate(rules, form.value);

    async function handleLogin() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        try {
          const response = await store.dispatch('auth/submitLogin', form);

          if (response.data) {
            router.push({ name: 'Home' });
          }
        } catch (err) {
          toast.open({ mesage: err?.response?.data?.message });
        }
      }
    }

    async function handleGoogleLogin() {
      const auth = await GoogleAuth();
      const user = await auth.signIn();
      const tokenId = user.getAuthResponse().id_token;
      try {
        const response = await store.dispatch('auth/submitGoogleLogin', tokenId);

        if (response.data) {
          router.push({ name: 'Home' });
        }
      } catch (err) {
        toast.open({ mesage: err?.response?.data?.message });
      }

      router.push({ name: 'Home' });
    }

    return {
      v$, t, handleLogin, handleGoogleLogin,
    };
  },
});
</script>

<style lang="scss"  scoped>
.forgot_password a {
  font-size: 13px;
}
</style>
