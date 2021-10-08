<template>
  <toast-manager />
  <modal-manager />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ModalManager from './components/ModalManager.vue';
import ToastManager from './components/ToastManager.vue';

export default defineComponent({
  components: {
    ModalManager,
    ToastManager,
  },
});
</script>
