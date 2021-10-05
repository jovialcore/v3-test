<template>
  <div class="header">
    <div class="logo-container">
      <img
        class="logo"
        alt="Juridoc Logo"
        v-lazy="{ src: '/images/logo.png' }"
      />
    </div>
    <div class="selector">
      <SelectLang v-model="currentLang" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import SelectLang from '@/components/SelectLang/index.vue';

export default defineComponent({
  components: { SelectLang },
  setup() {
    const langStorage = localStorage.getItem('lang');
    const currentLang = ref(langStorage || 'br');
    const i18n = useI18n();

    watch(currentLang, (newValue) => {
      window.localStorage.setItem('lang', newValue);
      i18n.locale.value = newValue;
    });

    return { currentLang, t: i18n.t };
  },
});
</script>

<style lang="scss" scoped>
.header {
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-column: 1/3;
  grid-template-columns: 510px 480px;
  height: 50px;

  .logo-container {
    border-radius: 5px 0px 0px 0px;
    padding-top: 27px;
    background-color: $neutral-bg ;
    padding-left: 90px;
    img {
      width: 83px;
      height: 23px;
    }
  }
  .selector {
    border-radius: 0px 5px 0px 0px;
    padding-top: 27px;
    padding-right: 90px;
    width: 100%;
    background-color: $white;
    justify-content: flex-end;
    display: flex;
  }
}

@media (orientation: portrait) {
  .header {
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    .logo-container {
      padding-top: 27px;
      background-color: $neutral-bg ;
      padding-left: 10%;
      img {
        width: 83px;
        height: 23px;
      }
    }
    .selector {
      padding-right: 10%;
      padding-top: 27px;
      width: 100%;
      background-color: $neutral-bg ;
      justify-content: flex-end;
      display: flex;
    }

  }
}
</style>
