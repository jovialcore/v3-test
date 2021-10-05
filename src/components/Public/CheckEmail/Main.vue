<template>
  <form class="form" v-if="!completed">
    <div class="form-content">
      <div class="inputs">
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :label="t(`CheckEmail.form.email`)"
          :placeholder="t(`CheckEmail.form.email_placeholder`)"
          type="email"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button
            @click="handleSendEmail"
            :disabled="v$.$invalid"
            block
            neutral
          >
            {{ t(`CheckEmail.form.send_mail_button`) }}
          </base-button>
        </div>
      </div>
    </div>
  </form>
  <completed v-else />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useVuelidate from '@vuelidate/core';
import { RulesType } from '@/types/Vuelidate';
import { required, email } from '@/utils/I18nValidators';

import Completed from './Completed.vue';

export default defineComponent({
  components: { Completed },
  setup() {
    const { t } = useI18n();

    const form = reactive({
      email: '',
      language: '',
    });

    const rules = {
      email: { required, email },
    } as RulesType;

    const v$ = useVuelidate(rules, form);

    const completed = ref(false);

    async function handleSendEmail() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        completed.value = true;
      }
    }

    return {
      completed,
      v$,
      t,
      handleSendEmail,
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
