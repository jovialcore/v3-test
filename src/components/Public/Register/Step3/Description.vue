<template>
  <div class="description step3">
    <h1>{{ t(`Step3.description.main`) }}</h1>
    <p>{{ t(`Step3.description.sub`) }}</p>
    <div>
      <h1>{{ t(`Step3.description.items_brand`) }}</h1>
      <ul>
        <checked-item :label="t(`Step3.description.items.save_time`)" />
        <checked-item :label="t(`Step3.description.items.teamwork`)" />
        <checked-item :label="t(`Step3.description.items.deals_faster`)" />
        <checked-item :label="t(`Step3.description.items.productivity`)" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import CheckedItem from './CheckedItem.vue';

export default defineComponent({
  components: { CheckedItem },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style lang="scss" scoped>
h1, p {
  color: $text-dark-grey-2;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
