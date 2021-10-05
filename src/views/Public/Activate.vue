<template>
  <span>Invalid {{ route }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({

  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    store.dispatch('auth/setRegisterAccessData', route.params.token);
    router.push({ name: 'RegisterStep2' });
  },
});
</script>

<style>
</style>
