# Component Documentation

Since we haven't yet decided on a library to do this job I decided to start with this basic markdown.

## BASE DATEPICKER

**Props**
name      | description | default | required
--------- | --------- | ------- | --------
block   | Component occupy all available space | false | No
error | Error text | '' | No
label   | Label input | '' | No
required   | Component is required | false | No
v-model   | Directive used to get the value selected in the menu | '' | Yes

**Basic Usage**
```html
<template>
  <div class="test-area-view">
    <base-datepicker
      v-model="data.date"
      label="Data"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({ date: new Date().toISOString() });

    return {
      data,
    };
  },
});
</script>
```

## BASE DROPDOWN

**Props**
name      | description | default | required
--------- | --------- | ------- | --------
keyName   | Rename key field | 'key' | No
options   | Menu options [{ key: '', valaue: '', icon: '' }] | [] | | No
valueName | Rename value field  | 'value' | Yes
v-model   | Directive used to get the value selected in the menu | '' | Yes

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
```

## BASE MULTIPLE SELECT

**Props**
name                | description | default | required
------------------- | ----------- | ------- | --------
label               | Label input | '' | No
keyName             | Rename key field | 'key' | No
modelValue          | Directive used to get the value selected in the menu | [] | Yes
options             | Menu options | [] | No
valueName           | Rename value field  | 'value' | Yes
block               | Component occupy all available space | false | No
placeholder         | Placeholder input | '' | No
change:model-value  | prop used to change model value | '' | Yes

**Basic Usage**
```html
<template>
  <div class="test-area">
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
    const selected = ref(['1', '2']);
    const options = reactive([
      { _id: '1', firstName: 'Luciano', lastName: 'Weslen da Silva' },
      { _id: '2', firstName: 'Gilson', lastName: 'Doi Junior' },
      { _id: '3', firstName: 'Eduardo', lastName: 'Odelon Wagner' },
      { _id: '4', firstName: 'Samuel', lastName: 'Eduardo da Silva' },
    ]);

    return { options, selected };
  },
});
</script>
```

## BASE SWITCH

**Props**
name      | description | default | required
--------- | --------- | ------- | --------
v-model   | Directive used to get the value selected in the menu | '' | Yes
on-text   | Text that appears on the switch if it is true | '' | No
off-text   | Text that appears on the switch if it is false | '' | No

**Basic Usage**
```html
<template>
  <div class="test-area-view">
    <base-switch
      v-model="data.isChecked"
      on-text="Oui"
      off-text="Pas"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({ isChecked: true });

    return {
      data,
    };
  },
});
</script>
```
