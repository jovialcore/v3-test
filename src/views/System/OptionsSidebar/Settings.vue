<template>
  <div class="options-sidebar">
    <p class="sidebar-options-title">
      GENERAL
    </p>
    <ul class="list">
      <li>
        <sidebar-button
          row
          block
          label="Profile"
          icon="user"
          font-awesome
          icon-size="16"
          class="option-button"
        />
      </li>
      <li>
        <sidebar-button
          row
          block
          label="Companies"
          icon="wallet"
          font-awesome
          icon-size="16"
          class="option-button"
        />
      </li>
      <li>
        <sidebar-button
          row
          block
          label="Account"
          icon="wallet"
          font-awesome
          icon-size="16"
          class="option-button"
        />
      </li>
      <li>
        <sidebar-button
          row
          block
          label="Preferences"
          icon="cog"
          font-awesome
          icon-size="16"
          class="option-button"
        />
      </li>
    </ul>
    <p class="sidebar-options-title secondary">
      WORKSPACE SETTINGS
    </p>
    <ul class="list">
      <li>
        <router-link :to="{ name: 'Team' }">
          <sidebar-button
            row
            block
            label="Team"
            icon="users"
            font-awesome
            class="option-button"
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
});
</script>

<style lang="scss" scoped>
</style>
