<template>
  <base-modal :isOpened="open">
    <template v-slot:header>
      <h3>Teste 2</h3>
    </template>
    <template v-slot:body>
      <h1>teste 2</h1>
    </template>
    <template v-slot:footer>
      <button>dasdsa</button>
    </template>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    open: { type: Boolean, default: false },
  },
});
</script>
<style>

</style>
