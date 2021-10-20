<template>
  <div class="dashboard-sidebar">
    <div class="dashboard-menu">
      <div class="sidebar-content">
        <div>
          <ul>
            <li>
              <router-link :to="{ name: 'Dashboard' }">
                <sidebar-button
                  block
                  label="Dashboard"
                  icon="/images/dashboard/noun_dashboard.png"
                  iconSize="24"
                />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Documents' }">
                <sidebar-button
                  block
                  label="Documents"
                  icon="file-alt"
                  fontAwesome
                  iconSize="24"
                />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Templates' }">
                <sidebar-button
                  block
                  label="Templates"
                  icon="file"
                  fontAwesome
                  iconSize="24"
                />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Library' }">
                <sidebar-button
                  block
                  label="Library"
                  icon="book"
                  fontAwesome
                  iconSize="24"
                />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Contacts' }">
                <sidebar-button
                  block
                  label="Contacts"
                  icon="address-book"
                  fontAwesome
                  iconSize="24"
                />
              </router-link>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <sidebar-button
              block
              label="Help"
              icon="headset"
              fontAwesome
              iconSize="24"
            />
          </li>
          <li>
            <router-link :to="{ name: 'Addons' }">
              <sidebar-button
                block
                label="Addons"
                icon="box-open"
                fontAwesome
                iconSize="24"
              />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Settings' }">
              <sidebar-button
                block
                label="Settings"
                icon="cog"
                fontAwesome
                iconSize="24"
              />
            </router-link>
          </li>
        </ul>
      </div>
      <div class="options-section">
        <router-view
          name="OptionsSidebar"
          class="options-content"
        ></router-view>
      </div>
    </div>
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
.dashboard-sidebar {
  display: flex;
  width: fit-content;
  flex-direction: column;
  .dashboard-menu {
    display: flex;
    height: 100%;
  }
  .sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #1b202a;
    height: 100%;
  }
}
.options-section {
  display: flex;
  width: 100%;
  min-width: 200px;
  .options-content {
    background: #1f2531;
    flex: 1;
  }
}
ul {
  padding: 0;
  list-style: none;
  width: 4.5rem;
}
ul li a {
  text-decoration: none;
}
.sidebar-button {
  color: $neutral-3;
  font-size: 10px;
}
</style>
