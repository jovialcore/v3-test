<template>
  <select @change="(e) => changeSelect(e)">
    <option
      v-for="(option, i) in options"
      :selected="modelValue === option['value']"
      :value="option['value']"
      :key="`${i}`"
    >
      {{ t(`SelectLang.${option['name']}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import {
  defineComponent, reactive,
} from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    modelValue: { type: String, default: 'BR' },
    key: { type: String, default: 'name' },
    value: { type: String, default: 'value' },
  },
  setup(_, { emit }) {
    const { t } = useI18n();

    const options = reactive([
      { name: 'ptBr', value: 'br' },
      { name: 'fr', value: 'fr' },
      { name: 'us', value: 'us' },
      { name: 'es', value: 'es' },
    ]);

    function changeSelect(event: Event) {
      emit('update:modelValue', (event.target as HTMLSelectElement).value);
    }
    return {
      t,
      options,
      changeSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
select {
  outline: none !important;
  appearance: unset;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  padding-right: 20px;
  text-align: right;
  background: url('../../assets/icons/select_icon.svg') no-repeat 98% !important;
  height: 23px;
  // margin-bottom: 3rem;
  &::-ms-expand {
    display: none;
  }
}
</style>
