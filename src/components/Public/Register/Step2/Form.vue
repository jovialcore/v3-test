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
          />
          <base-input
            v-model="v$.lastName.$model"
            :error="v$.lastName.$errors[0]?.$message"
            :label="t(`Step2.form.last_name`)"
            :placeholder="t(`Step2.form.last_name_placeholder`)"
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

    const options:OptionsType = reactive({ whatBrought: [] });

    const form = computed(() => store.getters['auth/getRegisterActivationData']);

    const rules = {
      firstName: { required },
      lastName: { required },
      job: { required },
      whatBringsYouHere: { required },
      phone: { required },
    } as RulesType;

    const v$ = useVuelidate(rules, form);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        store.dispatch('auth/setRegisterActivationStep2', form.value);

        router.push({
          name: 'RegisterStep3',
          params: {
            token: token.value,
          },
        });
      }
    }

    onMounted(() => {
      const { token: activationToken } = route.params;

      if (!activationToken) {
        router.push({ name: 'Login' });
      }

      form.value.activationToken = String(activationToken);
      token.value = String(activationToken);
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
