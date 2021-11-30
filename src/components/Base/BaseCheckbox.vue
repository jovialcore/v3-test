<template>
  <div
    class="input-container"
    :class="classes"
  >
    <label class="checkbox">
        <input type="checkbox" :id="id"
        @input="updateValue"/>
        <span></span>
    </label>
    <label :for="id" v-if="label">{{ label }}</label>
    <span>
      {{ error }}
    </span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    id: { type: String, required: true },
    label: { type: String, required: false, default: '' },
    modelValue: { type: Boolean, default: false },
    error: { type: String, default: '' },
    block: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
    }));

    function updateValue(event: Event) {
      const { checked } = event.target as HTMLInputElement;

      emit('update:modelValue', checked);
    }

    return {
      updateValue,
      classes,
    };
  },
});
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-items: center;
  margin-left: 3px;

  .checkbox {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    margin-left: 0px;
    & > span {
      color: $text-dark-contrast;
      padding: 0.5rem 0.20rem;
    }

    & > input {
      height: 25px;
      width: 25px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid $border-neutral;
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      background-color: $white-bg-elements;
      cursor: pointer;
    }
    & > input:checked {
        background-color: $primary-bg-elements;
    }

    & > input:checked + span::before {
      content: '\2713';
      display: block;
      text-align: center;
      color: $text-dark-contrast;
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
    }

    & > input:active {
        border: 2px solid #34495E;
    }
  }
  // .custom-checkbox {
  // input {
  //   display: none;
  //   width: 25px;
  //   height: 25px;
  // }
  // span {
  //   width: 25px;
  //   height: 25px;
  //   display: block;
  //   background-color: #fff;
  //   border: 1px solid #DDD;
  // }
  // input:checked + span {
  //     background-color: #c03;
  // }

  // }
  label {
    font-size: 12px;
    margin-left: 15px;
  }
  span {
    color: $error;
    padding-left: 8px;
  }
}
</style>
