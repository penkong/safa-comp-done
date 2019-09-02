<template>
  <q-page class="flex flex-center">
    <SafaCheckBox
      :align="align"
      :icon="icon"
      :helper="helper"
      :errorlabel="errorlabel"
      :m="m"
      :c="c"
      :value="value"
      :label="label"
      :color="color"
      :dense="dense"
      @checked="checkInfo"
    />
  </q-page>
</template>

<style></style>

<script>
import SafaCheckBox from "../components/SafaCheckBox";
export default {
  name: "PageIndex",
  components: {
    SafaCheckBox
  },
  data() {
    return {
      align: "right",
      m: "e",
      value: "false",
      label: "زمان قرارداد",
      icon: "",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      c: "4",
      color: "light-blue-10",
      dense: false
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
