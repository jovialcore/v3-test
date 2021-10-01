<template>
  <form @submit.prevent class="form">
    <div class="form-content">
      <div class="form-title">
        <h1>{{ t(`Step3.form.title`) }}</h1>
      </div>
      <div class="inputs">
        <base-input
          :label="t(`Step3.form.company_name`)"
          :placeholder="t(`Step3.form.company_name_placeholder`)"
        />
        <base-select
          :label="t(`Step3.form.company_size`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="state.options.industrySize"
        ></base-select>
        <base-select
          :label="t(`Step3.form.industry`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="state.options.industry"
        ></base-select>
        <base-select
          :label="t(`Step3.form.crm`)"
          :placeholder="t(`Step3.form.default_select_placeholder`)"
          :options="state.options.crm"
        ></base-select>
      </div>
      <div class="buttons">
        <base-button transparent>{{
          t(`Step3.form.return_button`)
        }}</base-button>
        <base-button block primary>{{
          t(`Step3.form.next_button`)
        }}</base-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const state = reactive({
      options: {
        industrySize: [
          'Solo',
          '2 - 5',
          '6 - 10',
          '11 - 25',
          '26 - 50',
          '51 - 200',
          '201 - 1.000',
          '1.001 - 10.000',
          '10.000 +',
        ],
        industry: [
          'Administrative Services',
          'Advocacy',
          'Architecture',
          'Arts',
          'Bloggers/Youtube',
          'Business Consulting',
          'Cinematographic Studio',
          'Commercial Representation',
          'Dentist',
          'Design in General',
          'Digital Marketing Agency',
          'Doctors',
          'General Education',
          'Graphic Design',
          'Human Resources',
          'Insurance Brokerage',
          'Interior Design',
          'Intermediation',
          'IT Services',
          'Journalism and Advisory',
          'Marketing',
          'Marketing and Propaganda',
          'Marketplace',
          'Music',
          'Nutrition',
          'Organization of Events',
          'Photo',
          'Physical Education',
          'Physiotherapy',
          'Psychology',
          'Real Estate Brokerage',
          'Technology Consulting',
          'Tourism',
          'Translation',
          'Veterinary',
          'Web Development',
          'Other',
        ],
        crm: [
          'Hubspot',
          'Insightly',
          'Pipedrive',
          'Salesforce',
          'SugarCRM',
          'ZohoCRM',
          'None',
        ],
      },
    });
    return { t, state };
  },
});
</script>

<style lang="scss" scoped>
.form .buttons {
  flex-direction: row;
}
</style>
