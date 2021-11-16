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
      <font-awesome-icon
        icon="clock"
        :style="{ width: 14, height: 14 }"
      />
      {{ new Date(row.item.createdAt).toLocaleDateString() }}
    </template>
    <template v-slot:body-updatedAt="row">
      <font-awesome-icon
        icon="clock"
        :style="{ width: 14, height: 14 }"
      />
      {{ new Date(row.item.updatedAt).toLocaleDateString() }}
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
      {
        id: 'actions',
        name: '',
      },
    ]);

    const data = reactive([
    ]);
    const optionSelected = ref('');
    const dropdownOptions = reactive([
      { key: 'edit', value: 'Editar', icon: 'pen' },
      { key: 'remove', value: 'Remover', icon: 'trash-alt' },
    ]);
    store.dispatch('workspaces/getWorkspaces');
    const workspaces = computed<any>(() => store.getters['workspaces/get']);

    function action(action:string, index: number, _id: string) {
      if(action === 'edit') {
        store.dispatch('workspaces/select', index);
        openWorkspaceModal()
      } else {
        remove(_id)
      }
    }
    async function remove(_id: string) {
        await store.dispatch('workspaces/remove', _id);
        await store.dispatch('workspaces/getWorkspaces');
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
      optionSelected,
      dropdownOptions,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
span.centered {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
