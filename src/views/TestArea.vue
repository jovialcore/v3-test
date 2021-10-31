<template>
  <base-table
    :columns="columns"
    :data="data"
    :total-items="16"
    :start-items="1"
    @next-page="nextPage"
    @back-page="backPage"
    @set-page="setPage"
  >
    <template v-slot:header-select="row">
      <base-checkbox :id="`checkbox-${row.item.id}`"  />
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
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const {t} = useI18n();
    const columns = reactive([
        {
          id: 'select',
          name: '',
        },
        {
          id: 'name',
          name: 'Nome',
        },
        {
          id: 'experience',
          name: 'Experiência',
        },
        {
          id: 'stage',
          name: 'Estágio',
        },
        {
          id: 'people',
          name: 'Pessoas',
        },
        {
          id: 'update',
          name: 'Atualização',
        },
        {
          id: 'create',
          name: 'Criado',
        },
        {
          id: 'sign',
          name: 'Assinatura',
        },
        {
          id: 'pdf',
          name: 'PDF',
        },
      ]);

    const data = reactive([
      {
        name: "Teste1",
        experience: "Teste1",
        stage: "draft",
        people: "Teste1",
        update: "Teste1",
        create: "31/12/2000",
        pdf: "https://google.com",
      },
      {
        name: "Teste1",
        experience: "Teste1",
        stage: "approval",
        people: "Teste1",
        update: "Teste1",
        create: "31/12/2000",
        pdf: "https://google.com",
      },
      {
        name: "Teste1",
        experience: "Teste1",
        stage: "finished",
        people: "Teste1",
        update: "Teste1",
        create: "31/12/2000",
        pdf: "https://google.com",
      },
      {
        name: "Teste1",
        experience: "Teste1",
        stage: "finished",
        people: "Teste1",
        update: "Teste1",
        create: "31/12/2000",
        pdf: "https://google.com",
      },
    ]);

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
      columns,
      data,
      nextPage,
      setPage,
      backPage,
      t
    };
  },
});
</script>

<style>

</style>
