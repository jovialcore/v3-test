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
  </base-table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import useModal from '@/hooks/useModal';

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
    ]);

    const data = reactive([
    ]);

    store.dispatch('team/getTeams');
    const teams = computed<any>(() => store.getters['team/get']);

    function openCompanyModal() {
      const modal = useModal();
      modal.open({ component: 'AddCompanyModal' });
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
      teams,
      columns,
      data,
      openCompanyModal,
      nextPage,
      setPage,
      backPage,
      t,
    };
  },
});
</script>

<style>

</style>
