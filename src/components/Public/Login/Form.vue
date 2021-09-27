<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Login.form.title`) }}</h1>
        <p>
          {{ t(`Login.form.subtitle`) }}
          <base-link primary :to="{ name: 'RegisterStep1' }">
            {{ t(`Login.form.subtitle_link`) }}
          </base-link>
        </p>
      </div>
      <div class="inputs">
        <base-input
          :label="t(`Login.form.email`)"
          :placeholder="t(`Login.form.email_placeholder`)"
        />
        <base-input
          type="password"
          :label="t(`Login.form.password`)"
          :placeholder="t(`Login.form.password_placeholder`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button block primary>{{
            t(`Login.form.login_button`)
          }}</base-button>
          <div class="forgot_password">
            <base-link :to="{ name: 'ForgotPassword' }">
              {{ t(`Login.form.forgot_password`) }}
            </base-link>
          </div>
        </div>
        <base-button @click="handleGoogleAuth" block neutral>
          <img
            class="descriptive"
            alt="Google G icon"
            v-lazy="{src: './images/login/g-icon.png'}"
          />
          {{ t(`Login.form.login_with_google`) }}
        </base-button>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  methods: {
    async handleGoogleAuth() {
      const user = await this.$gAuth.signIn();
      console.log(user);
    },
  },
  setup() {
    const i18n = useI18n();

    return { t: i18n.t };
  },
});
</script>
