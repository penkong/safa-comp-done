<template>
  <div class="safa-data">
    <!-- step 1 -->
    <date-picker
      element="my-custom-editable-input"
      :editable="read"
      :disabled="read"
      :v-model="type"
      :show="show"
      :min="minDate"
      :max="maxDate"
      :highlight="highlight"
      :auto-submit="true"
      @input="handleInput($event)"
      @close="show=false"
      locale="fa"
      color="#216583"
      inputFormat="YYYY-MM-DD HH:mm"
      format="jYYYY - jMM - jDD  --  HH:mm"
      type="datetime"
      appendTo="body"
      inputClass="form-control"
    />
    <!-- step 2 -->
    <q-btn
      :loading="loadingGear"
      :disabled="read"
      @click="show=true"
      @click.prevent="simulateProgress"
      round
      dense
      type="button"
      size="0.8rem"
      color="light-blue-9"
      text-color="white"
      icon="today"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
    <!-- step 3 -->
    <q-input
      :disable="read"
      :placeholder="value"
      :hint="hinter()"
      v-model="datetime"
      borderless
      dense
      bg-color="lime-1"
      id="my-custom-editable-input"
      type="text"
      class="form-control is-editable for-input"
    >
      <template v-slot:hint>field hint</template>
      <template v-slot:append>
        <q-item-label
          style="font-family: 'behdad', 'Courier New', Courier, monospace;"
          header
        >{{ label }}</q-item-label>
      </template>
    </q-input>
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import uid from "uuid/v4";
export default {
  name: "SafaDate",
  components: {
    DatePicker: VuePersianDatetimePicker
  },
  data() {
    return {
      idOfInput: null,
      date: "",
      datetime: "",
      initHelper: null,
      //
      show: false,
      loadingGear: false,
      //
      read: null,
      notEditable: null,
      //
      dense: true
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
    minDate: {
      type: String,
      default: ""
    },
    maxDate: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      required: true,
      default: "datetime"
    },
    value: { type: String },
    label: { default: "none", type: String },
    icon: {
      type: String,
      default: "today",
      required: true
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
    hinter() {
      if (this.read) {
        return this.$set(this, "initHelper", null);
      } else {
        return this.$set(this, "initHelper", this.helper);
      }
    },
    handleInput($event) {
      this.$set(this, "datetime", $event);
      return this.$emit("inputer", this.datetime);
    },
    simulateProgress() {
      // we set loading state
      this.loadingGear = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loadingGear = false;
      }, 500);
    },
    highlight() {
      return {
        style: {
          color: "grey-3",
          "font-family": "'behdad' ,'Courier New' ,'Courier', 'monospace'"
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");
.for-input {
  display: inline-block;
  border: none;
  padding: 0.75rem;
  width: 90%;
}
</style>