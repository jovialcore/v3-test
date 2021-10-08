<template>
  <teleport to="body">
    <the-toast
      :show="toast.isShowed"
      :mesage="toast.mesage"
      :type="toast.type"
      :timeout="toast.timeout"
    />
  </teleport>
</template>

<script lang="ts">
import {
  reactive, onMounted, onBeforeUnmount, defineComponent, watch,
} from 'vue';
import useToast, { ToastData } from '@/hooks/useToast';

export default defineComponent({
  setup() {
    const modal = useToast();

    const toast = reactive({
      isShowed: false,
      mesage: '',
      type: '',
      timeout: 2.5,
    });

    function toastSetup(payload: ToastData) {
      toast.isShowed = payload.isShowed || false;
      toast.mesage = payload.mesage || '';
      toast.type = payload.type || 'info';
      toast.timeout = payload.timeout || 2.5;
    }

    onMounted(() => {
      modal.on(toastSetup);
    });

    onBeforeUnmount(() => {
      modal.off(toastSetup);
    });

    watch(toast, () => {
      if (toast.mesage) {
        toast.isShowed = true;
        setTimeout(() => {
          toast.isShowed = false;
          toast.mesage = '';
        }, toast.timeout * 1000);
      }
    });

    return { toast };
  },
});
</script>

<style>

</style>
