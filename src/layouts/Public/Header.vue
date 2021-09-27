<template>
  <div class="header">
    <div>
      <img class="logo"
        alt="Juridoc Logo"
        v-lazy="{src: './images/logo.png'}"/>
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
  grid-template-columns: 420px 390px;
  height: 50px;
  padding-top: 27px;
  padding-left: 90px;

  &:first-child{
    background-color: $neutral-bg;
    img {
      width: 83px;
      height: 23px;
    }
  }
  div.selector{
    background-color: $white;
    justify-content: flex-end;
    display: flex;
  }
}

// @media screen and (max-width: 1060px) {
//   .login-card {
//     width: 90%;
//     padding: 0px 50px;
//     height: fit-content;
//   }
// }

@media (orientation: portrait) {
  .header {
    padding: 27px 30px 0px 30px;
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: space-between;
  }
}

</style>
