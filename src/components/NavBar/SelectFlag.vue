<template>
  <select @change="(e) => changeSelect(e)">
    <option
      v-for="(option, i) in options"
      :selected="modelValue === option['value']"
      :value="option['value']"
      :key="`${i}`"
    >
      {{ t(option['name']) }}
    </option>
  </select>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
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
      { name: 'portugueseBrazil', value: 'br' },
      { name: 'french', value: 'fr' },
      { name: 'englishUS', value: 'us' },
      { name: 'spanish', value: 'es' },
    ]);

    function changeSelect(event: any) {
      emit('update:modelValue', event.target.value);
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
.select-flags{
  display: flex;
  color: #000000;

  font-weight: 800;

  display: flex;
  flex-direction: column;

  .current-flag{
    background: $neutral-1;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
  .options {
    background: $neutral-1;
    display: flex;
    flex-direction: column;
  }
}
</style>
