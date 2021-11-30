<template>
  <!-- <div /> -->
  <table class="base-table">
    <thead>
      <tr>
        <th v-for="(column, i) in columns" :key="`column_${column.id}`">
          <slot :item="column" :index="i" :name="`header-${column.id}`">
            {{ column.name }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in data" :key="`row_${i}`">
        <td v-for="(column, j) in columns" :key="`row_${i}_column_${j}`">
          <slot :item="item" :index="i" :name="`body-${column.id}`">
            <template v-if="item[column.id]">
              {{ item[column.id] }}
            </template>
          </slot>
        </td>
      </tr>
    </tbody>
    <!-- <tfoot>
      <tr>
        <td :colspan="columns.length">
          <div class="content navigation">
            <base-button-table
              :disabled="BACK_DISABLED"
              @click="backPage"
            >
              {{ t("BaseTable.footer.back") }}
            </base-button-table>
            <base-button-table
              v-for="number in QUANTITY_PAGES"
              :key="number"
              :selected="PAGE_SELECTED(number)"
              @click="setPage(number)"
            >
              {{ number }}
            </base-button-table>
            <base-button-table
              :disabled="NEXT_DISABLED"
              @click="nextPage"
            >
              {{ t("BaseTable.footer.next") }}
            </base-button-table>
          </div>
        </td>
      </tr>
    </tfoot> -->
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  name: 'BaseTable',
  props: {
    columns: {
      type: Array as PropType<OptionType[]>,
      default: () => [],
    },
    data: {
      type: Array as PropType<OptionType[]>,
      default: () => [],
    },
    totalItems: {
      type: Number,
      default: 9,
    },
    maxItems: {
      type: Number,
      default: 9,
    },
    startItems: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n();

    const QUANTITY_PAGES = computed(() => Math.round(props.totalItems / props.maxItems));
    const BACK_DISABLED = computed(() => props.startItems === (((props.startItems * props.maxItems) - props.maxItems) + 1));
    const NEXT_DISABLED = computed(() => props.startItems === (((props.maxItems * QUANTITY_PAGES.value) - props.maxItems) + 1));

    const PAGE_SELECTED = (number: number) => props.startItems == (((number * props.maxItems) - props.maxItems) + 1);

    function setPage(page: number) {
      emit('set-page', page);
    }

    function nextPage() {
      emit('next-page');
    }

    function backPage() {
      emit('back-page');
    }

    return {
      QUANTITY_PAGES,
      BACK_DISABLED,
      NEXT_DISABLED,
      PAGE_SELECTED,
      nextPage,
      setPage,
      backPage,
      t,
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
