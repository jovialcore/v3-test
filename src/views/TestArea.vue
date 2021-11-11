<template>
  <div class="test-area">
    {{ optionSelected }}
    <base-dropdown
      v-model="optionSelected"
      :options="dropdownOptions"
    >
      <font-awesome-icon icon="ellipsis-v" />
    </base-dropdown>
    <base-datepicker
      v-model="data.date"
      label="Data"
      required
    />
    <base-multiple-select
      label="Testando"
      :options="options"
      :model-value="selected"
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

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const optionSelected = ref('');
    const dropdownOptions = reactive([
      { key: 'edit', value: 'Editar', icon: 'pen' },
      { key: 'move', value: 'Mover', icon: 'exchange-alt' },
      { key: 'share', value: 'Comparilhar', icon: 'share-alt' },
      { key: 'remove', value: 'Remover', icon: 'trash-alt' },
    ]);
    const data = reactive({ date: new Date().toISOString() });

    const selected = ref(['1', '2']);
    const options = reactive([
      { _id: '1', firstName: 'Luciano', lastName: 'Weslen da Silva' },
      { _id: '2', firstName: 'Gilson', lastName: 'Doi Junior' },
      { _id: '3', firstName: 'Eduardo', lastName: 'Odelon Wagner' },
      { _id: '4', firstName: 'Samuel', lastName: 'Eduardo da Silva' },
    ]);

    return {
      optionSelected,
      dropdownOptions,
      data, 
      options, 
      selected 
    };
  },
});
</script>

<style lang="scss" scoped>
.test-area{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg{
    color: #000;
  }
}

</style>
