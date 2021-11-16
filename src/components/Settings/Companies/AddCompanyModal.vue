<template>
  <base-modal
    :is-opened="open"
    class="company-modal"
  >
    <template v-slot:header>
      <h3>{{ t(`AddCompanyModal.title`) }}</h3>
    </template>
    <template v-slot:body>
      <div class="base-info">
        <base-input
          v-model="v$.companyName.$model"
          :error="v$.companyName.$errors[0]?.$message"
          :placeholder="t(`AddCompanyModal.companyPlaceholder`)"
        />
        <base-input
          v-model="v$.description.$model"
          :error="v$.description.$errors[0]?.$message"
          :placeholder="t(`AddCompanyModal.descriptionPlaceholder`)"
        />
        <base-select
          v-model="v$.subsidiary.$model"
          :error="v$.subsidiary.$errors[0]?.$message"
          :placeholder="t(`AddCompanyModal.subsidiaryPlaceholder`)"
          :options="companies"
          value="_id"
          text="companyName"
        />
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <base-button
          :disabled="v$.$invalid"
          dashboard
          neutral
          @click="handleSubmit"
        >
          {{ t(`AddCompanyModal.submit`) }}
        </base-button>
      </div>
    </template>
  </base-modal>
</template>

<script lang="ts">
import {
  computed, defineComponent, onBeforeMount, onMounted, reactive, watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { RulesType } from '@/types/Vuelidate';
import { required } from '@/utils/I18nValidators';
import useToast from '@/hooks/useToast';
import { TeamRolesOptions } from '@/utils/options/Invite';
import { LanguagesOptions } from '@/utils/options/Global';
import useModal from '@/hooks/useModal';

type OptionType = {
  [key: string]: string | number;
}

type OptionsType = {
  teamRoles: OptionType[] | undefined;
  languages: OptionType[] | undefined;
}

export default defineComponent({
  props: {
    open: { type: Boolean, default: false },
  },
  setup() {
    const { t, locale } = useI18n();
    const store = useStore();
    const toast = useToast();
    const modal = useModal();

    const options: OptionsType = reactive({
      teamRoles: [],
      languages: [],
    });

    const company = computed<any>(() => store.getters['companies/getCompany']);

    store.dispatch('companies/getCompanies');
    const companies = computed<any>(() => store.getters['companies/get']);

    const rules = computed(() => ({
      companyName: { required },
      description: { required },
      subsidiary: { },
    } as RulesType));

    let v$ = useVuelidate(rules, company.value);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        const endpoint = company.value._id ? 'update' : 'create';
        const response = await store.dispatch(`companies/${endpoint}`);
        store.dispatch('companies/getCompanies');

        if (response.data) {
          toast.open({ mesage: response.data.msg });
        }
        if (response.error) {
          toast.open({ mesage: response.error.msg });
        }

        modal.close({ component: 'AddCompanyModal' });
        store.dispatch('companies/clearCurrent');
      }
    }

    function getOptions() {
      options.teamRoles = TeamRolesOptions();
      options.languages = LanguagesOptions();
    }

    watch(locale, getOptions);

    onBeforeMount(getOptions);

    return {
      options, v$, handleSubmit, t, company, companies,
    };
  },
});
</script>

<style lang="scss" scoped>

.invite-modal {
  ::v-deep(header) {
    background: $secondary;
    padding: 1rem;
  }

  ::v-deep(main) {
    padding: 1rem;
    .base-info {
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 8px;
    }
  }

  ::v-deep(footer) {
    background: $neutral-bg;
    div {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 1rem;
    }
  }
}

</style>
