<template>
  <div class="safa-input">
    <!-- readonly counter -->
    <div class="label-container">
      <label v-if="aligned" :for="idOfInput" class="label" :style="{ right: -c + 'rem'}">{{ label }}</label>
      <label v-else :for="idOfInput" class="left-label" :style="{ left: -c + 'rem'}">{{ label }}</label>
    </div>
    <div class="input-container">
      <q-input
        :readonly="read"
        :disable="notEditable"
        ref="input"
        autogrow
        lazy-rules
        outlined
        bottom-slots
        standout="bg-lime-1 text-{color}"
        counter
        maxlength="65"
        v-model="text"
        :id="idOfInput"
        :value="values"
        :type="type"
        :input-style="{
        textAlign: right,
        minHeight: '20px',
        height: '25px' ,
        padding: padding,
        display: flex,
        alignItems: center ,
        justifyContent: center
      }"
        :input-class="{ 'label-aligned': aligned }"
        :color="color"
        :dense="dense"
        :hint="helper"
        :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= 3 || 'حداقل 3 کاراکتر'
      ]"
      >
        <template v-if="aligned" v-slot:prepend>
          <q-icon
            v-if="text && !read && !notEditable"
            round
            dense
            flat
            class="cursor-pointer"
            name="cancel"
            icon="cancel"
            @click.stop="text = null"
            @click.prevent="reset"
          />
        </template>
        <template v-else v-slot:append>
          <q-icon
            v-if="text && !read && !notEditable"
            round
            dense
            flat
            class="cursor-pointer"
            name="cancel"
            icon="cancel"
            @click.stop="text = null"
            @click.prevent="reset"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaInput",
  data() {
    return {
      read: null,
      notEditable: null,
      aligned: null,
      idOfInput: null,
      text: "",
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
      // read write
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "e"
    },
    type: {
      type: String,
      default: "text",
      required: true
    },
    value: { type: String, default: "" },
    label: { default: "", type: String },
    placeholder: {
      type: String,
      default: ""
    },
    // rahnameee
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    padding: {
      type: Number,
      default: 7
    },
    iconsize: { type: String, default: "24px" },
    icon: { type: String, default: "add" },
    color: {
      type: String,
      default: "blue"
    },
    c: {
      // label
      type: String,
      required: true,
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
    this.$set(this, "text", this.value);
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
    reset() {
      this.$refs.input.resetValidation();
    }
  },
  watch: {
    idOfInput: "idGenerator"
  }
};
</script>

<style lang='scss'>
@import url("http://cdn.font-store.ir/behdad.css");
.safa-input {
  font-family: "behdad", "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
  .label-container {
    position: relative;
    & .label {
      position: absolute;
      padding: 0 4px;
      bottom: -2rem;
    }
    & .left-label {
      position: absolute;
      padding: 0 4px;
      bottom: -2rem;
    }
  }
  .input-container {
    .label-aligned {
      text-align: right;
    }
    .q-field__control .relative-position {
      padding: 0 px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
