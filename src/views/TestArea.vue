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

    return {
      optionSelected,
      dropdownOptions,
      data,
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
