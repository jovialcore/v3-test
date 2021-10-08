<template>
  <base-button @click.prevent="openModal" primary>Abrir modal</base-button>
  <base-button @click.prevent="openToast" primary>Abrir toast</base-button>
  <base-button @click.prevent="openModal2" primary>Abrir modal2</base-button>
  <base-button @click.prevent="openToast2" primary>Abrir toast2</base-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';

export default defineComponent({
  setup() {
    const modal = useModal();
    const toast = useToast();

    function openModal() {
      modal.open({ component: 'ModalTeste1' });
    }

    function openToast() {
      toast.open({ mesage: 'Hi, Toast!' });
    }

    function openModal2() {
      modal.open({ component: 'ModalTeste2' });
    }

    function openToast2() {
      toast.open({ mesage: 'Hi, Toast2! dassssssssssssssssssssssssssssssssssssssssssssss' });
    }

    return {
      openModal,
      openToast,
      openModal2,
      openToast2,
    };
  },
});
</script>

<style>

</style>
