<template>
  <form class="form" v-if="!state.completed">
    <div class="form-content">
      <div class="inputs">
        <base-input
          :label="t(`CheckEmail.form.email`)"
          :placeholder="t(`CheckEmail.form.email_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button block neutral @click="sendEmail">{{
            t(`CheckEmail.form.send_mail_button`)
          }}</base-button>
        </div>
      </div>
    </div>
  </form>
  <completed v-else />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import Completed from './Completed.vue';

export default defineComponent({
  components: { Completed },
  setup() {
    const i18n = useI18n();

    const state = reactive({
      completed: false,
    });

    function sendEmail() {
      state.completed = true;
    }

    return { t: i18n.t, state, sendEmail };
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
