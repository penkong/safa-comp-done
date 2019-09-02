<template>
  <div class="safa-comment">
    <div v-if="label" class="label-container">
      <label v-if="aligned" :for="idOfInput" class="label" :style="{right: -c + 'rem'}">{{ label }}</label>
      <label v-else :for="idOfInput" class="left-label" :style="{ left: -c + 'rem'}">{{ label }}</label>
    </div>
    <div class="input-container">
      <q-input
        :readonly="read"
        :disable="notEditable"
        :id="idOfInput"
        :value="value"
        :placeholder="placeholder"
        :input-style="cssProps"
        @input="handleInput($event)"
        lazy-rules
        type="textarea"
        ref="textArea"
        autogrow
        outlined
        bottom-slots
        standout="bg-lime-1"
        counter
        :maxlength="maxLength"
        v-model="text"
        debounce="20"
      ></q-input>
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaCommentBox",
  data() {
    return {
      read: null,
      notEditable: null,
      aligned: null,
      text: "",
      idOfInput: null
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "سیب"
    },
    maxLength: {
      type: Number,
      default: 1200
    },
    align: {
      type: String,
      validator: v => ["right", "left"].includes(v),
      default: function() {
        return "right";
      }
    },
    height: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "200px"
    },
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: function() {
        return "r";
      }
    },
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
    },
    value: {
      type: String,
      default: function() {
        return "";
      }
    },
    label: {
      type: String,
      default: function() {
        return "";
      }
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
  computed: {
    cssProps() {
      if (this.align === "right") {
        return {
          direction: "rtl",
          minHeight: this.height,
          minWidth: this.width,
          padding: "padding",
          fontSize: "0.80rem"
        };
      } else {
        return {
          minHeight: this.height,
          minWidth: this.width,
          padding: "padding",
          fontSize: "0.80rem"
        };
      }
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("inputer", $event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");
.safa-comment {
  font-family: "behdad", "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
  .label-container {
    position: relative;
    & .label {
      position: absolute;
      padding: 0 4px;
      bottom: -2.4rem;
    }
    & .left-label {
      position: absolute;
      padding: 0 4px;
      bottom: -2.4rem;
    }
  }
  .input-container {
    .label-aligned {
      text-align: right;
    }
  }
}
</style>
