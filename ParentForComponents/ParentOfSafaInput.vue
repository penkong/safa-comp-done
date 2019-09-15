<template>
  <q-page style="width: 500px; margin: 0 auto;">
    <div style="display: block;">
      <SafaInput
        :align="align"
        :m="m"
        :type="type"
        :value="value"
        :label="label"
        :placeholder="placeholder"
        :helper="helper"
        :errorlabel="errorlabel"
        :padding="padding"
        :iconsize="iconsize"
        :icon="icon"
        :colored="color"
        :c="c"
        @inputer="checkVal"
      />
    </div>
  </q-page>
</template>

<style></style>

<script>
import SafaInput from "../components/SafaInput/SafaInput";
export default {
  name: "PageIndex",
  components: {
    SafaInput
  },
  data() {
    return {
      align: "right",
      m: "e",
      type: "text",
      value: "",
      label: "نام",
      placeholder: "ورود اطلاعات",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      // not usefull
      padding: 5,
      // not usefull
      iconsize: "24px",
      // it must be base on quasar icon name
      icon: "event",
      color: "amber-1",
      c: "5"
    };
  },
  methods: {
    checkVal(val) {
      console.log(val);
    }
  }
};
</script>
