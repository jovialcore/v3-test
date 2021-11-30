<template>
<div></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  name: 'BaseTabs',
  props: {
    tabs: {
      type: Array as PropType<String[]>,
      default: () => [],
    },
  },
  setup(props) {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
.base-table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  display: table;
  background-color: $white-bg-elements;
  font-size: 14px;
  tr {
    border-top: 1px solid $border-neutral;
  }
  th {
    text-align: left;
    padding: 1rem 0.5rem;
  }

  thead {
    color: var(--primary);

    th {
      font-weight: bold;
      color: $text-dark-grey;
      padding: 1rem;
    }
  }

  tbody tr {
    &:hover {
      background-color: $neutral-2;
    }
    td {
      padding: 1rem 0.5rem;
      border-top: 1px solid $border-neutral;
    }
  }

  tfoot {
    tr {
      border: 0;
    }
    td {
      padding: 0 5rem;
      .navigation {
        padding: 0.5rem;
        justify-content: end;
        gap: 4px;
      }
    }
  }
}
</style>
