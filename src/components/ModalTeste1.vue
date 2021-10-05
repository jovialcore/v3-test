<template>
  <base-modal :isOpened="open">
    <template v-slot:header>
      <div class="header">
        <h3>Teste</h3>
      </div>
    </template>
    <template v-slot:body>
      <div class="body">
        <h3>Teste</h3>
      </div>
    </template>
    <template v-slot:footer>
      <div class="buttons">
        <base-button primary block>Okay</base-button>
      </div>
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
<style lang="scss" scoped>
.header, .body{
  padding: 16px;
}

.buttons {
  width: 100%;
  display: flex;
  gap: 16px;

  padding: 16px;

}
</style>
