<template>
  <div class="options-section">
    <div id="children-menu">
      <template
        v-for="key in Object.keys(children)"
        :key="`submenu_${key}`"
      >
        <p
          class="title"
        >
          {{ key }}
        </p>
        <ul class="list">
          <li
            v-for="child in children[key]"
            :key="`submenu_${String(child.name)}`"
          >
            <router-link :to="{ name: child.name }">
              <sidebar-button
                class="option-button"
                :icon="String(child.meta?.icon)"
                :font-awesome="Boolean(child.meta?.fontAwesome)"
                :label="String(child.name)"
                icon-size="16"
                row
                submenu
                block
              />
            </router-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import SidebarButton from '@/layouts/System/Sidebar/SidebarButton.vue';

export default defineComponent({
  components: { SidebarButton },
  props: {
    title: { type: String || null, default: null },
    children: { type: Object, default: () => [] },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.options-section {
  background: $background-gray;
  display: flex;
  .list, .actions {
    list-style: none;
    padding: 0;
    margin-bottom: 0.5rem;
    & a {
        text-decoration: none;
    }
  }
  .title {
    padding: 1rem;
    color: $neutral-1;
    border-bottom: 2px solid #1B202A;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    &.secondary {
      padding: 0.5rem;
      border-bottom: none;
      margin-bottom: 0;
    }
  }
  .option-button {
    color: $neutral-1;
    font-size: 14px;
    &.imported {
    color: $yellow-orange;
    }
  }
  #children-menu {
    background: $background-gray;
    width: 220px;
    ul {
      list-style: none;
    }
  }
}
</style>
