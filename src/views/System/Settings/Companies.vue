<template>
  <div class="content-header">
    <base-button
      dashboard
      neutral
      @click="newCompany"
    >
      Nova empresa
    </base-button>
  </div>
  <base-table
    :columns="columns"
    :data="companies"
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
    <template v-slot:body-subsidiary="row">
      {{ row.item.companyName }}
    </template>
    <template v-slot:body-actions="row">
      <span class="centered">
        <base-dropdown
          v-model="dropdown.value"
          :options="dropdownOptions"
          @clicked="action(row.index, row.item)"
        >
          <font-awesome-icon icon="ellipsis-v" />
        </base-dropdown>
      </span>
    </template>
  </base-table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import useModal from '@/hooks/useModal';

export default defineComponent({
  setup() {
    const store = useStore();
    const columns = reactive([
      {
        id: 'companyName',
        name: 'Name',
      },
      {
        id: 'description',
        name: 'Description',
      },
      {
        id: 'subsidiary',
        name: 'Subsidiary',
      },
      {
        id: 'actions',
        name: '',
      },
    ]);

    const dropdown = reactive({
      value: '',
    });

    const dropdownOptions = reactive([
      { key: 'remove', value: 'Remover', icon: 'trash-alt' },
      { key: 'edit', value: 'Editar', icon: 'pen' },
    ]);

    store.dispatch('companies/getCompanies');
    const companies = computed<any>(() => store.getters['companies/get']);

    function openCompanyModal() {
      const modal = useModal();
      modal.open({ component: 'AddCompanyModal' });
    }

    function newCompany() {
      store.dispatch('companies/clearCurrent');
      openCompanyModal();
    }

    async function remove(_id: string) {
      await store.dispatch('companies/remove', _id);
      await store.dispatch('companies/getCompanies');
    }

    function action(index: number, item: any) {
      store.dispatch('companies/clearCurrent');

      if (dropdown.value === 'edit') {
        store.dispatch('companies/select', index);

        openCompanyModal();
      } else if (dropdown.value === 'remove' && item._id) {
        remove(item._id);
      }
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
      companies,
      columns,
      dropdown,
      dropdownOptions,
      action,
      backPage,
      nextPage,
      newCompany,
      setPage,
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
