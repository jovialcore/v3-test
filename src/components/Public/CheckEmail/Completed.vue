<template>
  <div class="form">
    <div class="form-content">
      <h2 class="completed-title">{{ t(`CheckEmail.completed.title`) }}</h2>
      <p>{{ t(`CheckEmail.completed.sub`) }}</p>
      <ul>
        <li>{{ t(`CheckEmail.completed.items.spam_folder`) }}</li>
        <li>{{ t(`CheckEmail.completed.items.mistake_email`) }}</li>
        <li>{{ t(`CheckEmail.completed.items.another_email`) }}</li>
        <li>{{ t(`CheckEmail.completed.items.cant_deliver`) }}</li>
      </ul>
      <a href="#" @click="clearEmail">{{ t(`CheckEmail.completed.reenter_email`) }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const store = useStore();

    async function clearEmail() {
      store.dispatch('user/setUser', { email: '' });
    }

    return {
      t: i18n.t, clearEmail,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  padding-top: 130px;
}
.form-content ul {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.completed-title {
  margin-bottom: 2rem;
}
.form-content a {
  color: $link-color;
  text-decoration: none;
}
</style>
