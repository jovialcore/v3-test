<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Step2.form.title`) }}</h1>
      </div>
      <div class="inputs">
        <div class="names">
          <base-input
            block
            :label="t(`Step2.form.first_name`)"
            :placeholder="t(`Step2.form.first_name_placeholder`)"
          />
          <base-input
            block
            :label="t(`Step2.form.last_name`)"
            :placeholder="t(`Step2.form.last_name_placeholder`)"
          />
        </div>
        <base-input
          :label="t(`Step2.form.job_title`)"
          :placeholder="t(`Step2.form.job_title_placeholder`)"
        />
        <base-input
          :label="t(`Step2.form.what_brought_to_juridoc`)"
          :placeholder="t(`Step2.form.what_brought_to_juridoc_placeholder`)"
        />
        <base-input
          :label="t(`Step2.form.phone`)"
          :placeholder="t(`Step2.form.phone_placeholder`)"
        />
      </div>
      <base-button block primary>{{ t(`Step2.form.next_button`) }}</base-button>
    </div>
  </form>
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
.inputs .names {
  display: flex;
  gap: 1rem;
  div {
    min-width: 0;
  }
}
</style>
