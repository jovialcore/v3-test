<template>
  <Description />
  <Completed v-if="email" />
  <Main v-else />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { useStore } from 'vuex';
import Completed from '@/components/Public/CheckEmail/Completed.vue';
import Description from '@/components/Public/CheckEmail/Description.vue';
import Main from '@/components/Public/CheckEmail/Main.vue';

export default defineComponent({
  components: { Description, Completed, Main },
  setup() {
    // const store = useStore();
    const email = computed(() => {
      // const user = store.getters['user/getCurrentUser'];
      // if (user) return user.email;
      const email = 'doijunior@gmail.com';
      return email;
    });
    return { email };
  },
});
</script>
