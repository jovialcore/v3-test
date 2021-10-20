<template>
  <div class="options-sidebar">
    <p class="sidebar-options-title">Documents</p>
    <ul class="list">
      <li>
        <sidebar-button
          class="option-button"
          icon="/images/dashboard/all-folders.png"
          label="All"
          iconSize="16"
          row
          block
        />
      </li>
      <li>
        <sidebar-button
          class="option-button imported"
          icon="folder"
          label="Imported documents"
          fontAwesome
          iconSize="16"
          row
          block
        />
      </li>
    </ul>
    <ul class="actions">
      <li>
        <sidebar-button
          class="option-button"
          icon="folder-plus"
          label="Adicionar uma pasta"
          fontAwesome
          iconSize="16"
          row
          block
        />
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
