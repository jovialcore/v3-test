<template>
  <div class="content-header">
    <base-button
      dashboard
      neutral
      @click="openCompanyModal"
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
      {{row.item.companyName}}
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
    const optionSelected = ref('');
    const dropdownOptions = reactive([
      { key: 'edit', value: 'Editar', icon: 'pen' },
      { key: 'remove', value: 'Remover', icon: 'trash-alt' },
    ]);
    const data = reactive([
    ]);

    store.dispatch('companies/getCompanies');
    const companies = computed<any>(() => store.getters['companies/get']);

    function action(action:string, index: number, _id: string) {
      if(action === 'edit') {
        store.dispatch('companies/select', index);
        openCompanyModal()
      } else {
        remove(_id)
      }
    }
    async function remove(_id: string) {
        await store.dispatch('companies/remove', _id);
        await store.dispatch('companies/getCompanies');
    }
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
      action,
      companies,
      columns,
      data,
      dropdownOptions,
      openCompanyModal,
      optionSelected,
      nextPage,
      setPage,
      backPage,
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
