<template>
  <div class="options-sidebar">
    <p class="sidebar-options-title">
      Documents
    </p>
    <ul class="list">
      <li>
        <sidebar-button
          class="option-button"
          icon="/images/dashboard/all-folders.png"
          label="All"
          icon-size="16"
          row
          block
        />
      </li>
      <li>
        <sidebar-button
          class="option-button imported"
          icon="folder"
          label="Imported documents"
          font-awesome
          icon-size="16"
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
          font-awesome
          icon-size="16"
          row
          block
        />
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
