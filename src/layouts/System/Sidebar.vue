<template>
  <div class="sidebar">
    <ul>
      <li
        v-for="item in menuGroup1"
        :key="`sidebar_item_${item.name}`"
      >
        <router-link :to="{ name: item.name }">
          <sidebar-button
            block
            :label="item.name"
            :icon="item.icon"
            :font-awesome="item.fontAwesome"
          />
        </router-link>
      </li>
    </ul>
    <ul>
      <li
        v-for="item in menuGroup2"
        :key="`sidebar_item_${item.name}`"
      >
        <router-link :to="{ name: item.name }">
          <sidebar-button
            block
            :label="item.name"
            :icon="item.icon"
            :font-awesome="item.fontAwesome"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarButton from '@/layouts/System/Sidebar/SidebarButton.vue';

export default defineComponent({
  components: { SidebarButton },
  setup() {
    const menuGroup1 = [
      {
        name: 'Dashboard',
        icon: '/images/dashboard/noun_dashboard.png',
      },
      {
        name: 'Documents',
        icon: 'file-alt',
        fontAwesome: true,
      },
      {
        name: 'Templates',
        icon: 'file',
        fontAwesome: true,
      },
      {
        name: 'Library',
        icon: 'book',
        fontAwesome: true,
      },
      {
        name: 'Contacts',
        icon: 'address-book',
        fontAwesome: true,
      },
    ];
    const menuGroup2 = [
      {
        name: 'Help',
        icon: 'headset',
        fontAwesome: true,
      },
      {
        name: 'Addons',
        icon: 'box-open',
        fontAwesome: true,
      },
      {
        name: 'Settings',
        icon: 'cog',
        fontAwesome: true,
      },
    ];
    return { menuGroup1, menuGroup2 };
  },
});
</script>

<style lang="scss" scoped>
.sidebar{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1b202a;
  &>div {
    display: flex;
    height: 100%;
  }
  ul {
    padding: 0;
    list-style: none;
    width: 4.5rem;
    li a {
      text-decoration: none;
    }
  }
  .sidebar-button {
    color: $neutral-3;
    font-size: 10px;
  }

}
// .dashboard-sidebar {
//   display: flex;
//   width: fit-content;
//   flex-direction: column;
//   height: 100%;
//   background: #1b202a;
//   .dashboard-menu {
//     display: flex;
//     height: 100%;
//   }
//   .sidebar-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     background: #1b202a;
//     height: 100%;
//   }
// }
// .options-section {
//   display: flex;
//   width: 100%;
//   min-width: 220px;
//   .options-content {
//     background: #1f2531;
//     flex: 1;
//   }
// }

</style>
