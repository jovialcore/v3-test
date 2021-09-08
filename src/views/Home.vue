<template>
  <nav-bar/>
  <div class="view-home">
    <img alt="JuriDoc" src="../assets/images/logo.png">

    <h1>{{t("Home.welcome")}}</h1>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar/index.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-home{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin-top: 32px;

  img {
    max-width: 128px;
  }
}
</style>
