<template>
  <div class="content-header">
  </div>
  <base-table
    :columns="columns"
    :data="teams"
    :total-items="16"
    :start-items="1"
    @next-page="nextPage"
    @back-page="backPage"
    @set-page="setPage"
  >
    <template v-slot:body-firstName="row">
      {{row.item.firstName}} {{row.item.lastName}}
    </template>
    <template v-slot:body-company="row">
      {{row.item.company.companyName}}
    </template>
    <template v-slot:body-actions="row">
      <span class="centered">
        <base-dropdown
          v-model="optionSelected"
          :options="dropdownOptions"
          @clicked="(value:string) => action(value, row.index, row.item._id)"
        >
          <font-awesome-icon icon="ellipsis-v" />
        </base-dropdown>
      </span>
    </template>
  </base-table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const columns = reactive([
      {
        id: 'firstName',
        name: 'Name',
      },
      {
        id: 'email',
        name: 'Email',
      },
      {
        id: 'company',
        name: 'Company',
      },
      {
        id: 'role',
        name: 'Role',
      },
      {
        id: 'status',
        name: 'Status',
      },
      {
        id: 'actions',
        name: '',
      },
    ]);

    const data = reactive([
    ]);

    store.dispatch('team/getTeams');
    const teams = computed<any>(() => store.getters['team/get']);
    const optionSelected = ref('');
    const dropdownOptions = reactive([
      { key: 'resend', value: 'Resend invitation', icon: 'pen' },
      { key: 'remove', value: 'Remove', icon: 'trash-alt' },
    ]);

    function action(action:string, index: number, _id: string) {
      if(action === 'resend') {
      } else {
        remove(_id)
      }
    }
    async function remove(_id: string) {
        await store.dispatch('team/remove', _id);
        await store.dispatch('team/getTeams');
    }

    function setPage(page: number) {
      console.log('set-page: ', page);
    }

    function nextPage() {
      console.log('next-page');
    }

    function backPage() {
      console.log('back-page');
    }

    return {
      action,
      teams,
      columns,
      nextPage,
      setPage,
      backPage,
      optionSelected,
      dropdownOptions,
      t,
    };
  },
});
</script>

<style>
span.centered {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
