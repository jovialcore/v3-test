<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <span>{{ t(`Register.form.prelude`) }}</span>
        <h1>{{ t(`Register.form.title`) }}</h1>
        <p>
          {{ t(`Register.form.subtitle`) }}
          <base-link primary :to="{ name: 'Login' }">
            {{ t(`Register.form.subtitle_link`) }}
          </base-link>
        </p>
      </div>
      <div class="inputs">
        <base-input
          :label="t(`Register.form.email`)"
          :placeholder="t(`Register.form.email_placeholder`)"
        />
        <base-input
          type="password"
          :label="t(`Register.form.password`)"
          :placeholder="t(`Register.form.password_placeholder`)"
        />
        <base-checkbox
          id="confirm_terms"
          :label="t(`Register.form.confirm_terms`)"
        />
      </div>
      <div class="buttons">
        <div>
          <base-button block primary>{{
            t(`Register.form.register_button`)
          }}</base-button>
        </div>
        <base-button block neutral>
          <img
            class="descriptive"
            alt="Google G icon"
            v-lazy="{ src: '/images/login/g-icon.png' }"
          />
          {{ t(`Register.form.register_with_google`) }}
        </base-button>
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

<style>
</style>
