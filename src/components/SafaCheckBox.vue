<template>
  <div class="row relative-position">
    <div class="sl q-ml-{c}">
      <q-icon
        round
        dense
        flat
        class="cursor-pointer"
        :name="icon"
        :icon="icon"
        :style="{'margin-right': c + 'px'}"
      />
      <q-checkbox
        :disable="read || notEditable"
        :label="label"
        :color="color"
        @input="handleInput($event)"
        :left-label="aligned"
        v-model="dataVal"
        keep-color
        :dense="dense"
        tabindex="30"
      ></q-checkbox>
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaCheckBox",
  data() {
    return {
      idOfInput: null,
      aligned: null,
      read: null,
      notEditable: null,
      dataVal: ""
    };
  },
  props: {
    align: {
      type: String,
      required: true,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    value: {
      type: String,
      validator: v => ["true", "false"].includes(v),
      default: "false"
    },
    label: { default: "گزینه", type: String },
    icon: {
      type: String,
      default: "today",
      required: true
    },
    color: {
      type: String,
      default: "light-blue-10"
    },
    dense: {
      type: Boolean,
      default: false
    },
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    c: {
      type: String,
      validator: v =>
        [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "auto"
        ].includes(v),
      default: "4"
    }
  },

  created() {
    const generatedId = "Safa" + "_" + uid();
    this.$set(this, "idOfInput", generatedId);
    this.align === "right"
      ? this.$set(this, "aligned", true)
      : this.$set(this, "aligned", false);
    switch (this.m) {
      case "r":
        return this.$set(this, "read", true);
      case "ne":
        return this.$set(this, "notEditable", true);
      default:
        return;
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("checked", $event);
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");
div {
  .sl {
    font-family: "behdad", "Courier New", "Courier", "monospace";
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
