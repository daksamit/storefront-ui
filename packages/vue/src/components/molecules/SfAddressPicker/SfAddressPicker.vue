<template>
  <div class="sf-address-picker">
    <!--@slot Default. Here you should pass your addresses-->
    <slot />
  </div>
</template>
<script>
import SfAddress from "./_internal/SfAddress.vue";
import Vue from "vue";

Vue.component("SfAddress", SfAddress);
export default {
  name: "SfAddressPicker",
  props: {
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      checked: this.selected,
    };
  },
  provide() {
    return {
      getSelectedValue: this.getSelectedValue,
      setSelectedValue: this.setSelectedValue,
    };
  },
  methods: {
    getSelectedValue() {
      return this.checked;
    },
    setSelectedValue(newVal) {
      const newValue = newVal;
      this.checked = newValue;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddressPicker.scss";
</style>
