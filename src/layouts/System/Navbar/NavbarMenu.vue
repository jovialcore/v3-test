<template>
  <div
    class="profile-menu"
    :class="{ active: state.active }"
    @click="openMenu"
  >
    <div class="profile-image-container">
      <div class="profile-image">
        <img
          :src="user.picture"
          width="48"
          height="48"
          alt="profile image"
        >
      </div>
    </div>
    <div class="profile-open-menu">
      <div class="profile-open-options">
        <div class="profile-chevron">
          <font-awesome-icon icon="caret-down" />
        </div>
      </div>
      <div class="border-fixer" />
    </div>
    <div
      v-show="state.active"
      class="navbar-dropdown-content"
    >
      <base-button
        block
        navbar
      >
        <font-awesome-icon icon="user" />Meu perfil
      </base-button>
      <base-button
        block
        navbar
      >
        <font-awesome-icon icon="street-view" />Onboarding
      </base-button>
      <base-button
        block
        navbar
        @click="openInviteModal"
      >
        <font-awesome-icon icon="plus" />Enviar convites para membros da
        equipe
      </base-button>
      <base-button
        block
        navbar
        logout
        @click="handleLogout"
      >
        <font-awesome-icon icon="sign-out-alt" />Sair
      </base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useModal from '@/hooks/useModal';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      active: false,
    });

    const user = computed<any>(() => store.getters['auth/getCurrentUser']);

    function openMenu() {
      state.active = !state.active;
    }
    function openInviteModal() {
      const modal = useModal();
      modal.open({ component: 'InviteModal' });
    }

    async function handleLogout() {
      await store.dispatch('auth/submitLogout');
      router.push({ name: 'Login' });
    }
    return {
      state, handleLogout, openMenu, openInviteModal, user,
    };
  },
});
</script>

<style lang="scss" scoped>
.profile-menu {
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  &:hover {
    &-image-container {
      border: 1px solid $border-neutral;
      transition: all 0.3s;
    }
    &-open-menu {
      border: 1px solid $border-neutral;
      transition: all 0.3s;
    }
  }
  &.active {
    .profile-image-container {
      border: 1px solid $border-neutral;
      border-bottom: 1px solid transparent;
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
    }
    .profile-image {
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
    }
    .profile-open-menu {
      border: 1px solid $border-neutral;
      border-bottom: 1px solid transparent;
      border-bottom-right-radius: 0%;
      border-left: 1px solid transparent;
    }
    .border-fixer {
      background: white;
      position: absolute;
      width: 100%;
      height: 16px;
      left: 1px;
      border-right: 1px solid $border-neutral;
      z-index: 999;
    }
  }
}
.profile-image-container {
  background: white;
  border-radius: 50%;
  border: 1px solid transparent;
}
.navbar-dropdown-content {
  position: absolute;
  top: calc(100% - 4px);
  width: 200px;
  right: 18px;
  width: max-content;
  border: 1px solid $border-neutral;
}
.profile-image {
  position: relative;
  display: flex;
  padding: 6px;
  border-radius: 50%;
  background: white;
  z-index: 999;
  img {
    border-radius: 50%;
    padding: 2px;
    border: 2px solid $border-neutral;
  }
}
.profile-open-menu {
  padding: 6px;
  position: relative;
  border-radius: 50%;
  left: -16px;
  background: white;
  border: 1px solid transparent;
}
.profile-open-options {
  position: relative;
  padding: 2px;
  border: 2px solid $border-neutral;
  border-radius: 50%;
  z-index: 999;
}
.profile-chevron {
  display: flex;
  width: 20px;
  justify-content: center;
  align-items: center;
  height: 20px;
  background: $dark-grey-4;
  border-radius: 50%;
  svg {
    color: $neutral-1;
  }
}
</style>
