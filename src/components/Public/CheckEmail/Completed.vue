<template>
  <div class="completed">
    <h1 class="completed-title">{{ t(`CheckEmail.completed.title`) }}</h1>
    <p>{{ t(`CheckEmail.completed.sub`) }}</p>
    <ul>
      <li>{{ t(`CheckEmail.completed.items.spam_folder`) }}</li>
      <li>{{ t(`CheckEmail.completed.items.mistake_email`) }}</li>
      <li>{{ t(`CheckEmail.completed.items.another_email`) }}</li>
      <li>{{ t(`CheckEmail.completed.items.cant_deliver`) }}</li>
    </ul>
    <a href="#" @click="clearEmail">{{ t(`CheckEmail.completed.reenter_email`) }}</a>
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
.completed {
  border-radius: 0px 0px 5px 0px;
  width: 100%;
  padding: 30px 90px 50px 70px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  h1 {
    color: $text-dark-grey-4;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 25px;
  }
  p {
    font-size: 15px;
  }
}
ul {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  li {
    font-size: 15px;
  }
}
a {
  color: $link-color;
  text-decoration: none;
}
</style>
