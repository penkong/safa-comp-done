<template>
  <q-page class="flex flex-center">
    <SafaCommentBox
      :align="align"
      :height="height"
      :width="width"
      :m="m"
      :c="c"
      :value="value"
      :label="label"
      :dense="dense"
      :placeholder="placeholder"
      :maxLength="maxLength"
      @inputer="checkInfo"
    />
  </q-page>
</template>

<script>
import SafaCommentBox from "../components/SafaCommentBox";
export default {
  name: "PageIndex",
  components: {
    SafaCommentBox
  },
  data() {
    return {
      align: "right",
      width: "400px",
      height: "200px",
      maxLength: 400,
      m: "e",
      c: "5",
      placeholder: "را بنویسید",
      value: "",
      label: " نظرات",
      dense: true
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
