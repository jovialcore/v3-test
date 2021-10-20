<template>
  <div class="dashboard">
    <navbar />
    <div class="content-column">
      <sidebar />
      <router-view class="dashboard-view" />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from './Dashboard/Navbar.vue';
import Sidebar from './Dashboard/Sidebar.vue';

export default {
  components: { Sidebar, Navbar },
};
</script>

<style lang="scss" scoped>
.content-column {
  display: flex;
  width: 100%;
  flex: 1;
}
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.dashboard-view {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
