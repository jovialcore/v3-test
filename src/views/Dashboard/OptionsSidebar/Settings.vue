<template>
  <div class="options-sidebar">
    <p class="sidebar-options-title">GENERAL</p>
    <ul class="list">
      <li>
        <sidebar-button
          row
          block
          label="Profile"
          icon="user"
          fontAwesome
          iconSize="16"
          class="option-button"
        />
      </li>
      <li>
        <sidebar-button
          row
          block
          label="Account"
          icon="wallet"
          fontAwesome
          iconSize="16"
          class="option-button"
        />
      </li>
      <li>
        <sidebar-button
          row
          block
          label="Preferences"
          icon="cog"
          fontAwesome
          iconSize="16"
          class="option-button"
        />
      </li>
    </ul>
    <p class="sidebar-options-title secondary">WORKSPACE SETTINGS</p>
    <ul class="list">
      <li>
        <router-link :to="{ name: 'Team' }">
          <sidebar-button
            row
            block
            label="Team"
            icon="users"
            fontAwesome
            class="option-button"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarButton from '@/layouts/Dashboard/Sidebar/SidebarButton.vue';

export default defineComponent({
  components: { SidebarButton },
});
</script>

<style lang="scss" scoped>
</style>
