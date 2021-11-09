<template>
  <div class="content-header">
    <base-button
      dashboard
      neutral
      @click="openWorkspaceModal"
    >
      Novo Workspace
    </base-button>
  </div>
  <base-table
    :columns="columns"
    :data="workspaces"
    :total-items="16"
    :start-items="1"
    @next-page="nextPage"
    @back-page="backPage"
    @set-page="setPage"
  >
    <template v-slot:header-select="row">
      <base-checkbox :id="`checkbox-${row.item.id}`" />
    </template>
    <template v-slot:body-select="row">
      <base-checkbox :id="`checkbox-${row.item.name}`" />
    </template>
    <template v-slot:body-team="row">
      {{ row.item.team.length }}
    </template>
    <template v-slot:body-createdAt="row">
      {{ new Date(row.item.createdAt).toLocaleDateString() }}
    </template>
    <template v-slot:body-updatedAt="row">
      {{ new Date(row.item.updatedAt).toLocaleDateString() }}
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
        id: 'workspaceName',
        name: 'Name',
      },
      {
        id: 'team',
        name: 'Usuários',
      },
      {
        id: 'createdAt',
        name: 'Criado',
      },
      {
        id: 'updatedAt',
        name: 'Última Atualização',
      },
    ]);

    const data = reactive([
    ]);

    store.dispatch('workspaces/getWorkspaces');
    const workspaces = computed<any>(() => store.getters['workspaces/get']);
    function setPage(page: number) {
      console.log('set-page: ', page);
    }

    function nextPage() {
      console.log('next-page');
    }

    function backPage() {
      console.log('back-page');
    }

    function openWorkspaceModal() {
      const modal = useModal();
      modal.open({ component: 'AddWorkspaceModal' });
    }

    return {
      workspaces,
      openWorkspaceModal,
      columns,
      data,
      nextPage,
      setPage,
      backPage,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
