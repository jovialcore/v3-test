<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="inputs">
        <base-input
          :label="t(`CheckEmail.form.email`)"
          :placeholder="t(`CheckEmail.form.email_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button block neutral>{{
            t(`CheckEmail.form.send_mail_button`)
          }}</base-button>
        </div>
      </div>
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
form.form {
  padding-top: 130px;
}
@media screen and (max-width: 1060px) {
  form.form {
    padding-top: 0px;
  }
}
</style>
