<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="inputs">
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :label="t(`ForgotPassword.form.email`)"
          :placeholder="t(`ForgotPassword.form.email_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            @click="handleForgotPassword"
            :disabled="v$.$invalid"
            block
            neutral
          >
          {{ t(`ForgotPassword.form.send_mail_button`) }}
          </base-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from '@vuelidate/core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { required, email } from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: '',
      language: '',
    });

    const rules = {
      email: { required, email },
    } as RulesType;

    const v$ = useVuelidate(rules, form);

    async function handleForgotPassword() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        form.language = window.localStorage.getItem('lang') || 'us';
        store.dispatch('auth/setForgotPasswordData', form);
        const response = await store.dispatch('auth/submitForgotPassword', form);

        if (response.data) {
          router.push({ name: 'Home' });
        }
      }
    }

    return { v$, t, handleForgotPassword };
  },
});
</script>

<style lang="scss" scoped>
form.form {
  padding-top: 130px;
}
@media screen and (max-width: 1060px) {
  form.form {
    padding-top: 0px;
  }
}
</style>
