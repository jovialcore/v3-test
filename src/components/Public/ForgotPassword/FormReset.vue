<template>
  <form
    class="form"
    @submit.prevent
  >
    <div class="form-content">
      <div class="inputs">
        <base-input
          v-model="v$.newPassword.$model"
          type="password"
          :error="v$.newPassword.$errors[0]?.$message"
          :label="t(`ForgotPassword.formReset.newPassword`)"
          :placeholder="t(`ForgotPassword.formReset.newPasswordPlaceholder`)"
        />
        <base-input
          v-model="v$.passwordConfirm.$model"
          type="password"
          :error="v$.passwordConfirm.$errors[0]?.$message"
          :label="t(`ForgotPassword.formReset.passwordConfirm`)"
          :placeholder="t(`ForgotPassword.formReset.passwordConfirmPlaceholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            :disabled="v$.$invalid"
            block
            primary
            @click="handleResetPassword"
          >
            {{ t(`ForgotPassword.formReset.submitButton`) }}
          </base-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from '@vuelidate/core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
  required, minLength, upperCase, sameAs,
} from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';
import { ResetPasswordType } from '@/store/modules/auth';
import useToast from '@/hooks/useToast';

export default defineComponent({
  props: {
    token: { type: String, default: '' },
  },
  setup(props) {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    const form = computed<ResetPasswordType>(() => store.getters['auth/getResetPasswordData']);

    const rules = computed(() => ({
      newPassword: {
        required,
        minLength: minLength(6),
        upperCase,
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs(form.value.newPassword),
      },
    } as RulesType));

    const v$ = useVuelidate(rules, form.value);

    async function handleResetPassword() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        try {
          const response = await store.dispatch('auth/submitResetPassword');

          if (response.data) {
            router.push({ name: 'Login' });
            store.dispatch('auth/resetPasswordData');
          }
        } catch (err: any) {
          toast.open({ mesage: err?.response?.data?.message });
        }

        router.push({ name: 'Login' });
      }
    }

    onMounted(() => {
      form.value.token = props.token;
    });

    return {
      v$, t, handleResetPassword, form,
    };
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
