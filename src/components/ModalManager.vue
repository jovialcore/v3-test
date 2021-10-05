<template>
  <teleport to="body">
    <component
      :is="modalData.component"
      :open="modalData.show"
      @close="handleModalToogle({ show: false, component: modalData.component })"
    />
  </teleport>
</template>

<script lang="ts">
import {
  reactive, onMounted, onBeforeUnmount, defineComponent,
} from 'vue';
import useModal, { ModalData } from '@/hooks/useModal';
import ModalTeste1 from '@/components/ModalTeste1.vue';
import ModalTeste2 from '@/components/ModalTeste2.vue';

export default defineComponent({
  components: {
    ModalTeste1,
    ModalTeste2,
  },
  setup() {
    const modal = useModal();

    const modalData = reactive({
      show: false,
      component: '',
    });

    function handleModalToogle(payload: ModalData) {
      modalData.show = payload.show;
      modalData.component = payload.component || '';
    }

    onMounted(() => {
      modal.on(handleModalToogle);
    });

    onBeforeUnmount(() => {
      modal.off(handleModalToogle);
    });

    return {
      modalData,
      handleModalToogle,
    };
  },
});
</script>

<style>

</style>
