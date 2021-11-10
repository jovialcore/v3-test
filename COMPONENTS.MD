# Component Documentation

Since we haven't yet decided on a library to do this job I decided to start with this basic markdown.

## BASE DROPDOWN

**Props**
name      | description | default | required
--------- | --------- | ------- | --------
keyName   | Rename key field | 'key' | No
options   | Menu options [{ key: '', valaue: '', icon: '' }] | [] | | Não
valueName | Rename value field  | 'value' | Sim
v-model   | Directive used to get the value selected in the menu | '' | Sim

**Basic Usage**
```html
<template>
  <base-dropdown
    v-model="optionSelected"
    :options="dropdownOptions"
  >
    <font-awesome-icon icon="ellipsis-v" />
  </base-dropdown>
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

    return {
      optionSelected,
      dropdownOptions,
    };
  },
});
</script>
```

