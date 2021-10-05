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
            @click="handleSubmit"
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
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate, ValidationArgs } from '@vuelidate/core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
  required, email, maxLength, minLength,
} from '@/utils/I18nValidators';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: '',
      password: '',
    });

    type RulesType = {
      [key: string]: ValidationArgs
    }

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6), maxLength: maxLength(16) },
    } as RulesType;

    const v$ = useVuelidate(rules, form);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        store.dispatch('auth/setLoginData', form);
        const response = await store.dispatch('auth/submitLogin', form);

        if (response.data) {
          store.dispatch('user/setUser', response.data);
          router.push({ name: 'Home' });
        }
      }
    }

    return { v$, t, handleSubmit };
  },
});
</script>
