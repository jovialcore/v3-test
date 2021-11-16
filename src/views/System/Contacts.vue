<template>
  <div class="content-header">
    <base-button
      dashboard
      neutral
      @click="openCompanyModal"
    >
      New contact
    </base-button>
    <base-button
      dashboard
      neutral
      @click="openCompanyModal"
    >
      Import contacts
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
    <template v-slot:body-stage="row">
      <base-tag :status="row.item.stage" />
    </template>
  </base-table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

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
    ]);

    const data = reactive([
    ]);

    store.dispatch('companies/getCompanies');
    // const companies = computed<any>(() => store.getters['companies/get']);
    const companies = [
      {
        companyName: 'tilit',
        description: 'testing',
        subsidiary: 'test',
      },
      {
        companyName: 'tilit 2',
        description: 'testing 2',
        subsidiary: 'test',
      },
    ];

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
      data,
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
