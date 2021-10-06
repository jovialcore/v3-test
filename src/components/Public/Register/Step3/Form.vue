<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Step3.form.title`) }}</h1>
      </div>
      <div class="inputs">
        <base-input
          v-model="v$.company.$model"
          :error="v$.company.$errors[0]?.$message"
          :label="t(`Step3.form.company_name`)"
          :placeholder="t(`Step3.form.company_name_placeholder`)"
        />
        <base-select
          v-model="v$.size.$model"
          :error="v$.size.$errors[0]?.$message"
          :label="t(`Step3.form.company_size`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="options.industrySize"
        ></base-select>
        <base-select
          v-model="v$.industry.$model"
          :error="v$.industry.$errors[0]?.$message"
          :label="t(`Step3.form.industry`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="options.industry"
        ></base-select>
        <base-select
          v-model="v$.crm.$model"
          :error="v$.crm.$errors[0]?.$message"
          :label="t(`Step3.form.crm`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="options.crm"
        ></base-select>
        <base-checkbox
          v-model="isConfirmedTerms"
          id="confirm_terms"
          :label="t(`Register.form.confirm_terms`)"
        />
      </div>
      <div class="buttons">
        <base-button
          @click="toBack"
          undo
        >
          {{t(`Step3.form.return_button`)}}
        </base-button>
        <base-button
          @click="handleSubmit"
          block
          :disabled="!isConfirmedTerms"
          primary
        >
          {{t(`Step3.form.next_button`)}}
        </base-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core';
import {
  defineComponent, reactive, computed, onBeforeMount, ref,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { required } from '@/utils/I18nValidators';
import { RulesType } from '@/types/Vuelidate';
import { RegisterActivationType } from '@/store/modules/auth';
import { CompanySizeOptions, CRMOptions, IndustryOptions } from '@/utils/options/Register';

type OptionType = {
  [key: string]: string | number;
}

type OptionsType = {
  industrySize: OptionType[] | undefined;
  industry: OptionType[] | undefined;
  crm: OptionType[] | undefined;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const { t } = useI18n();
    const options: OptionsType = reactive({
      industrySize: [],
      industry: [],
      crm: [],
    });

    const form = computed<RegisterActivationType>(() => store.getters['auth/getRegisterActivationData']);

    const rules = {
      company: { required },
      size: { required },
      industry: { required },
      crm: { required },
    } as RulesType;
    const isConfirmedTerms = ref(false);
    const v$ = useVuelidate(rules, form);

    function toBack() {
      router.back();
    }

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        store.dispatch('auth/setRegisterActivationStep3', form.value);
        store.dispatch('auth/submitActivation');
        router.push({ name: 'RegisterFinished' });
      }
    }

    onBeforeMount(() => {
      options.industrySize = CompanySizeOptions();
      options.industry = IndustryOptions();
      options.crm = CRMOptions();
    });

    return {
      v$,
      options,
      t,
      toBack,
      handleSubmit,
      isConfirmedTerms,
    };
  },
});
</script>

<style lang="scss" scoped>
.form .buttons {
  flex-direction: row;
}
.form .form-title h1 {
  font-size: 28px;
}
</style>
