<template>
  <div id="the-hand">
    <the-hand/>
  </div>
</template>

<script lang="ts">
import TheHand from '@/components/Base/TheHand.vue';

export default {
  components: { TheHand },
};
</script>
<style lang="scss" scoped>
#the-hand{
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
