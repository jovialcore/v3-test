<template>
  <div
    :class="{ isOpened: isOpened }"
    class="base-modal-container"
    @click.self="$emit('close')"
  >
    <div class="base-modal">
      <button class="close-button" @click="$emit('close')">
        x
      </button>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="body"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'tModal',
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.base-modal-container {
  display: none;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.4);

  z-index: 10000;

  &.isOpened {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .base-modal {
    width: 100%;
    max-width: 500px;
    position: relative;
    background-color: $white;

    header {
      background-color: $primary;

      display: flex;
      align-items: center;

      font-size: 24px;
      font-weight: 700;

      color: $white;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .close-button {
      position: absolute;

      top: -16px;
      right: -16px;

      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: white;
      color: $secondary;

      border: 0px;

      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      svg {
        color: $primary;
      }
    }
  }
}
</style>
