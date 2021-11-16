<template>
  <base-modal
    :is-opened="open"
    class="workspace-modal"
  >
    <template v-slot:header>
      <h3>{{ t(`AddWorkspaceModal.title`) }}</h3>
    </template>
    <template v-slot:body>
      <div class="base-info">
        <base-input
          v-model="v$.workspaceName.$model"
          :error="v$.workspaceName.$errors[0]?.$message"
          :placeholder="t(`AddWorkspaceModal.workspaceNamePlaceholder`)"
        />
        <base-select
          v-model="v$.company.$model"
          :error="v$.company.$errors[0]?.$message"
          :placeholder="t(`AddWorkspaceModal.companyPlaceholder`)"
          :options="companies"
          value="_id"
          text="companyName"
          @changed="(val:string ) => changeTeam(val)"
        />
        <base-multiple-select
          :options="testing"
          :model-value="v$.team"
          key-name="_id"
          value-name="firstName"
          @change:model-value="selected = $event"
        >
        <template v-slot:option="row">
          {{ row.item.firstName + ' ' + row.item.lastName }}
        </template>
      </base-multiple-select>
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
          {{ t(`AddWorkspaceModal.submit`) }}
        </base-button>
      </div>
    </template>
  </base-modal>
</template>

<script lang="ts">
import {
  computed, defineComponent, onBeforeMount, reactive, ref, watch,
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

    const workspace = computed<any>(() => store.getters['workspaces/getWorkspace']);
    // const team = computed<any>(() => store.getters['team/getTeam']);

    store.dispatch('companies/getCompanies');
    const companies = computed<any>(() => store.getters['companies/get']);

    const rules = computed(() => ({
      company: { required },
      workspaceName: { required },
      team: {}
    } as RulesType));
    const testing = ref([ { "_id": "61898a26a1266a0edf04f18a", "firstName": "Gilson", "lastName": "Doi", "email": "gilson@tilit.com.br", "company": "6188743c6d11156dd7193b86", "role": "collaborator", "owner": "617942fcf230ed8890e49a95", "status": "pending", "__v": 0 }, { "_id": "618990faa1266a0edf04f1a0", "firstName": "Gilson 2", "lastName": "Testing", "email": "doijunior+12@gmail.com", "company": "6188743c6d11156dd7193b86", "role": "collaborator", "owner": "617942fcf230ed8890e49a95", "status": "pending", "__v": 0 } ])
    const v$ = useVuelidate(rules, workspace.value);
    async function handleSubmit() {
      const isValidate = await v$.value.$validate();

      if (isValidate) {
        try {
          const response = await store.dispatch('workspaces/create');

          if (response.data) {
            toast.open({ mesage: response.data.msg });
          }
        } catch (err: any) {
          toast.open({ mesage: err?.response?.data?.message });
        }

        modal.close({ component: 'AddWorkspaceModal' });
        store.dispatch('workspaces/clear');
      }
    }

    function changeTeam(companyId: string) {
      store.dispatch('team/fetchTeam', companyId);
    }

    function getOptions() {
      options.teamRoles = TeamRolesOptions();
      options.languages = LanguagesOptions();
    }

    watch(locale, getOptions);

    onBeforeMount(getOptions);

    return {
      testing, options, changeTeam, v$, handleSubmit, t, workspace, companies
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
