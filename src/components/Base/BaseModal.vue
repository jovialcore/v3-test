<template>
  <div
    :class="{ isOpened: isOpened }"
    class="base-modal-container"
    @click.self="$emit('close')"
  >
    <div class="base-modal">
      <header>
        <slot name="header"></slot>
        <button class="close-button" @click="$emit('close')">x</button>
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
    border-radius: 4px;

    header {
      background-color: $secondary;

      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 24px;
      font-weight: 700;

      color: $white;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      ::v-deep(h3) {
        color: $white;
      }
    }

    header,
    main,
    footer {
      padding: 1rem;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: $white-grey;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .close-button {
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: $primary;
      background: transparent;

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
