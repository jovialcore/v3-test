<template>
  <div class="system">
    <navbar />
    <section class="content">
      <sidebar />
      <children-menu
        v-if="submenu.children"
        :children="submenu.children"
        :title="String(submenu.title)"
      />
      <section>
        <router-view />
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { onUpdated, reactive } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import ChildrenMenu from '@/layouts/System/ChildrenMenu.vue';
import Navbar from '@/layouts/System/Navbar.vue';
import Sidebar from '@/layouts/System/Sidebar.vue';

function getCurrentRouteChildren(route: RouteLocationNormalizedLoaded) {
  if (route.matched[0].children.length > 1) {
    const subroutes: any = {};
    route.matched[0].children.forEach((item) => {
      const group: string = item.meta?.group ? String(item.meta?.group) : String(route.name);

      if (subroutes[group]) subroutes[group].push(item);
      else subroutes[group] = [item];
    });
    return subroutes;
  }
  return undefined;
}

export default {
  components: { ChildrenMenu, Sidebar, Navbar },
  setup() {
    const route = useRoute();
    const submenu = reactive({
      title: route.name,
      // children: route.matched[0].children,
      children: getCurrentRouteChildren(route),
    });
    onUpdated(() => {
      // submenu.children = route.matched[0].children;
      submenu.children = getCurrentRouteChildren(route);
      submenu.title = route.name;
    });
    return {
      submenu,
    };
  },

};

</script>

<style lang="scss" scoped>
.system {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    flex: 1;
    display: flex;
    section {
      flex: 1;
    }
  }
}
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
