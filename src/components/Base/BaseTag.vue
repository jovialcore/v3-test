<template>
  <div :class="`base-tag ${status}`">
    {{ t(`BaseTag.status.${status}`) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    status: { type: String, default: "draft"},
  },
  setup() {
    const { t } = useI18n();

    return { t }
  }
});
</script>

<style lang="scss" scoped>
.base-tag {
  width: 100%;
  padding: 8px;
  background: $text-dark-grey-2;
  color: $neutral-2;

  border-radius: 8px;
  &.approval {
    background: #5732C2;

  }
  &.draft {
    background: #999999;
  }
  &.finished {
    background: #4571AE;
  }
}
</style>
