<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Step2.form.title`) }}</h1>
      </div>
      <div class="inputs">
        <div class="names">
          <base-input
            v-model="v$.firstName.$model"
            :error="v$.firstName.$errors[0]?.$message"
            :label="t(`Step2.form.first_name`)"
            :placeholder="t(`Step2.form.first_name_placeholder`)"
            required
          />
          <base-input
            v-model="v$.lastName.$model"
            :error="v$.lastName.$errors[0]?.$message"
            :label="t(`Step2.form.last_name`)"
            :placeholder="t(`Step2.form.last_name_placeholder`)"
            required
          />
        </div>
        <base-input
          v-model="v$.job.$model"
          :error="v$.job.$errors[0]?.$message"
          :label="t(`Step2.form.job_title`)"
          :placeholder="t(`Step2.form.job_title_placeholder`)"
        />
        <base-select
          v-model="v$.whatBringsYouHere.$model"
          :error="v$.whatBringsYouHere.$errors[0]?.$message"
          :label="t(`Step2.form.what_brought_to_juridoc`)"
          :placeholder="t(`Step2.form.what_brought_to_juridoc_placeholder`)"
          :options="options.whatBrought"
        />
        <base-input
          v-maska="['+## ## ########', '+## ## #########']"
          v-model="v$.phone.$model"
          :error="v$.phone.$errors[0]?.$message"
          :label="t(`Step2.form.phone`)"
          :placeholder="t(`Step2.form.phone_placeholder`)"
        />
      </div>
      <base-button
        @click="handleSubmit"
        block
        primary
        :disabled="v$.$invalid"
      >
        {{ t(`Step2.form.next_button`) }}
      </base-button>
    </div>
  </form>
</template>

<script lang="ts">
import {
  defineComponent, computed, onMounted, reactive, ref, onBeforeMount,
} from 'vue';
import { useI18n } from 'vue-i18n';

import useVuelidate from '@vuelidate/core';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { required } from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';
import { WhatBroughtOptions } from '@/utils/options/Register';
import { RegisterActivationDataType, RegisterType } from '@/store/modules/auth';

type OptionType = {
  [key: string]: string | number;
}

type OptionsType = {
  whatBrought: OptionType[] | undefined;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();

    const token = ref('');
    const isGoogle = ref(false);

    const options: OptionsType = reactive({ whatBrought: [] });

    const form = computed<RegisterActivationDataType>(() => store.getters['auth/getRegisterActivationData']);
    const register = computed<RegisterType>(() => store.getters['auth/getRegisterData']);

    const rules = {
      firstName: { required },
      lastName: { required },
      job: { },
      whatBringsYouHere: { },
      phone: { },
    } as RulesType;

    const v$ = useVuelidate(rules, form.value);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        if (form.value.phone) {
          form.value.phone = form.value.phone.replace('+', '').replace(/ /g, '');
        }

        router.push({
          name: 'RegisterStep3',
          params: {
            token: token.value,
            isGoogle: String(isGoogle.value),
          },
        });
      }
    }

    onMounted(() => {
      token.value = String(route.params.token) || '';
      isGoogle.value = route.params.isGoogle === 'true' || false;

      if (!token.value) router.push({ name: 'Login' });

      if (isGoogle.value) {
        register.value.tokenId = String(token.value);
      } else {
        register.value.activationToken = String(token.value);
      }
    });

    onBeforeMount(() => {
      options.whatBrought = WhatBroughtOptions();
    });

    return {
      options, v$, t, handleSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.inputs .names {
  display: flex;
  gap: 1rem;
  div {
    min-width: 0;
  }
}
</style>
