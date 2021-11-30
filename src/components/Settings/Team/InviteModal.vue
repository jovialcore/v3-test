<template>
  <base-modal
    :is-opened="open"
    class="invite-modal"
  >
    <template v-slot:header>
      <h3>{{ t(`InviteModal.title`) }}</h3>
    </template>
    <template v-slot:body>
      <div class="base-info">
        <base-input
          v-model="v$.firstName.$model"
          :error="v$.firstName.$errors[0]?.$message"
          :placeholder="t(`InviteModal.firstNamePlaceholder`)"
        />
        <base-input
          v-model="v$.lastName.$model"
          :error="v$.lastName.$errors[0]?.$message"
          :placeholder="t(`InviteModal.lastNamePlaceholder`)"
        />
        <base-input
          v-model="v$.email.$model"
          :error="v$.email.$errors[0]?.$message"
          :placeholder="t(`InviteModal.emailPlaceholder`)"
        />
        <base-select
          v-model="v$.language.$model"
          :error="v$.language.$errors[0]?.$message"
          :placeholder="t(`InviteModal.languagePlaceholder`)"
          :options="options.languages"
        />
        <base-select
          v-model="v$.company.$model"
          :error="v$.company.$errors[0]?.$message"
          :placeholder="t(`InviteModal.companyPlaceholder`)"
          :options="companies"
          value="_id"
          text="companyName"
        />
      </div>
      <base-input-radio
        v-model="v$.role.$model"
        :error="v$.role.$errors[0]?.$message"
        :label="t(`InviteModal.teamRoles.title`)"
        :options="options.teamRoles"
        orientation="column"
      />
    </template>
    <template v-slot:footer>
      <div>
        <base-button
          :disabled="v$.$invalid"
          dashboard
          neutral
          @click="handleSubmit"
        >
          Invite
        </base-button>
      </div>
    </template>
  </base-modal>
</template>

<script lang="ts">
import {
  computed, defineComponent, onBeforeMount, reactive, watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { RulesType } from '@/types/Vuelidate';
import { required, email } from '@/utils/I18nValidators';
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

    const invite = computed<any>(() => store.getters['team/getInvite']);
    store.dispatch('companies/getCompanies');
    const companies = computed<any>(() => store.getters['companies/get']);

    const rules = computed(() => ({
      firstName: { required },
      lastName: { required },
      company: { required },
      email: { required, email },
      role: { required },
      language: { },
    } as RulesType));

    const v$ = useVuelidate(rules, invite.value);

    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        try {
          const response = await store.dispatch('team/submitInvite');

          if (response.data) {
            toast.open({ mesage: response.data.msg });
          }
        } catch (err: any) {
          toast.open({ mesage: err?.response?.data?.message });
        }

        modal.close({ component: 'InviteModal' });
        store.dispatch('team/resetInvite');
      }
    }

    function getOptions() {
      options.teamRoles = TeamRolesOptions();
      options.languages = LanguagesOptions();
    }

    watch(locale, getOptions);

    onBeforeMount(getOptions);

    return {
      options, v$, handleSubmit, t, companies, invite,
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
