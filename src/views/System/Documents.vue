<template>
  <div>
    <div class="documents-filter">
      <p>Any Status</p>
      <p>Any Category</p>
    </div>
    <main class="documents-wrapper">
      <div class="folder-icon">
        <font-awesome-icon icon="folder" />
      </div>
      <h1>Here you'll find the documents <br>you've created</h1>
      <p>
        Send interactive PandaDocs to your contractors <br>and prospects to
        more close deals.
      </p>
      <base-button
        primary
        dashboard
      >
        SEND A NEW DOCUMENT
      </base-button>
      {{ route }}
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    return { route };
  },
});
</script>

<style lang="scss" scoped>
.documents-filter {
  background: #f0f0f0;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
}
.documents-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex: 1;
  & h1 {
    font-size: 1.5rem;
    color: $heading-grey;
    font-weight: bold;
    text-align: center;
  }
  & p {
    font-weight: 400;
    color: $text-dark-grey;
    text-align: center;
  }
}
.folder-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 50%;
  border: 2px solid #a2a2a2;
  font-size: 48px;
}
</style>
