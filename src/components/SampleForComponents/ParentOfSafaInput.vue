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
        :color="color"
        :c="c"
      />
    </div>
    <div>
      <SafaInput
        :align="align"
        :m="m"
        :type="type"
        :value="value"
        label="ایمیل"
        placeholder="ایمیل"
        :helper="helper"
        :errorlabel="errorlabel"
        :padding="padding"
        :iconsize="iconsize"
        :icon="icon"
        :color="color"
        :c="c"
      />
    </div>
  </q-page>
</template>

<style></style>

<script>
import SafaInput from "../components/SafaInput";
export default {
  name: "PageIndex",
  components: {
    SafaInput
  },
  data() {
    return {
      align: "left",
      m: "e",
      id: "43434",
      type: "text",
      value: "ورود اطلاعات",
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
      color: "blue",
      c: "5"
    };
  }
};
</script>
