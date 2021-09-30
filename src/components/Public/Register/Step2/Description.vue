<template>
  <div class="description">
    <h1>{{ t(`Step2.description.main`) }}</h1>
    <p>{{ t(`Step2.description.sub`) }}</p>
    <div class="lawyer-image-container">
      <img
        class="descriptive"
        v-lazy="{ src: '/images/login/Felipe-Novak-juridoc-socio.png' }"
        alt="Felipe Novak picture"
      />
      <div class="legend">
        <span>Felipe Novak</span>
        <span>{{ t(`Step2.description.lawyer_sub`) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const i18n = useI18n();

    return { t: i18n.t };
  },
});
</script>

<style lang="scss" scoped>
div.description img.descriptive {
  width: 100px;
}
.lawyer-image-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.lawyer-image-container .legend {
  display: flex;
  flex-direction: column;
}
</style>
