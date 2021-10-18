<template>
  <Description />
  <FormReset v-if="token" :token="token"/>
  <Form v-else />
</template>

<script lang="ts">
import FormReset from '@/components/Public/ForgotPassword/FormReset.vue';
import Form from '@/components/Public/ForgotPassword/Form.vue';
import Description from '@/components/Public/ForgotPassword/Description.vue';

export default {
  components: { Form, FormReset, Description },
  props: {
    token: { type: String, default: '' },
  },
};
</script>
