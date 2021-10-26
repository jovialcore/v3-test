import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/test-area',
  name: 'TestArea',
  component: () => import('@/views/TestArea.vue'),
} as RouteRecordRaw;
