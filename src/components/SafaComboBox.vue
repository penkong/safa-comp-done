<template>
  <div>
    <div v-if="aligned" class="safa-combo-box row" :style="{minHeigh: height, minWidth: width }">
      <div>
        <Vselect
          :placeholder="placeholder"
          :options="items"
          :value="selected"
          @input="setSelected"
          :inputId="idOfInput"
          :disabled="read || notEditable"
          class="style-chooser"
          :style="{minWidth: width }"
        >
          <template #search="{attributes, events}">
            <input class="vs__search" :required="!selected" v-bind="attributes" v-on="events" />
          </template>
        </Vselect>
      </div>
      <div class="input-container">
        <q-input
          rounded
          flat
          borderless
          bg-color="blue-1"
          bottom-slots
          :readonly="read"
          :disable="notEditable"
          :id="idOfInput"
          :dense="dense"
          type="number"
          style="max-height: 10px;padding: 0;"
          @input="handleInput($event)"
          lazy-rules
          maxlength="12"
          :input-style="cssProps"
          v-model="inputNum"
        ></q-input>
      </div>
      <label :for="idOfInput" class="label-container label" :style="{right: -c + 'px'}">{{ label }}</label>
    </div>
    <div v-else class="safa-combo-box row" :style="{minHeigh: height, minWidth: width }">
      <label
        :for="idOfInput"
        class="label-container left-label"
        :style="{ left: -c + 'rem'}"
      >{{ label }}</label>
      <div class="input-container">
        <q-input
          rounded
          flat
          borderless
          bg-color="blue-1"
          bottom-slots
          :readonly="read"
          :disable="notEditable"
          :id="idOfInput"
          :dense="dense"
          type="number"
          style="max-height: 10px;padding: 0;"
          @input="handleInput($event)"
          lazy-rules
          maxlength="12"
          :input-style="cssProps"
          v-model="inputNum"
        ></q-input>
      </div>
      <div>
        <Vselect
          :placeholder="placeholder"
          :options="items"
          :value="selected"
          @input="setSelected"
          :inputId="idOfInput"
          :disabled="read || notEditable"
          class="style-chooser"
          :style="{minWidth: width }"
        >
          <template #search="{attributes, events}">
            <input class="vs__search" :required="!selected" v-bind="attributes" v-on="events" />
          </template>
        </Vselect>
      </div>
    </div>
  </div>
</template>

<script>
import uid from "uuid";
import Vselect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "SafaComboBox",
  data() {
    return {
      aligned: null,
      read: null,
      notEditable: null,
      idOfInput: null,
      inputNum: "",
      selected: "",
      lastId: null,
      error: false,
      itemsFromData: null
    };
  },
  components: {
    Vselect
  },
  props: {
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
      default: function() {
        return "4";
      }
    },
    align: {
      type: String,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    height: {
      type: String,
      default: "200px",
      required: true
    },
    width: {
      type: String,
      default: "200px",
      required: true
    },
    value: {
      type: String
    },
    label: {
      type: String,
      default: function() {
        return "none";
      }
    },
    dense: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    helper: {
      type: String,
      default: "تصحیح شود"
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // come from db => go to serveice
    DtoName: {
      type: String,
      default: function() {
        return "";
      }
    },
    // data provider =? go to serveice sql mongo post gress
    Domain: {
      type: String,
      default: function() {
        return "";
      }
    },
    HideValue: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  created() {
    const lastId = this.items[this.items.length - 1].code;
    this.$set(this, "lastId", lastId);
    this.$set(this, "inputNum", this.value);
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
          fontSize: "0.80rem"
        };
      } else {
        return {
          float: "left",
          fontSize: "0.80rem"
        };
      }
    }
  },
  methods: {
    // onLoadItems() {
    //   return this.$set(this, "itemsFromData", dataLoader(this.items));
    // },
    handleInput($event) {
      const itemForSelect = this.items.filter(item => item.code === $event);
      if ($event > 0 && $event <= this.lastId) {
        this.inputNum = parseInt($event);
        this.selected = itemForSelect[0].label;
        this.$emit("inputer", [$event, this.selected]);
      } else {
        this.selected = "";
        this.inputNum = "";
      }
    },
    setSelected(val) {
      if (val) {
        this.selected = val.label;
        this.inputNum = val.code;
        this.$emit("selectedVal", val);
      } else {
        this.selected = null;
        this.inputNum = null;
      }
    }
  }
};
</script>
<style lang="scss" >
@import url("http://cdn.font-store.ir/behdad.css");
.safa-combo-box {
  font-family: "behdad", "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 0.8rem;
  .q-field--dense .q-field__control {
    font-family: Arial, Helvetica, sans-serif;
    color: #0070cc;
    height: 20px !important;
    width: 3rem;
    padding: 0 3px !important;
    font-size: 1rem;
  }
  .q-field__inner {
    max-width: 3.5rem;
  }

  .q-icon,
  .material-icons {
    // margin-bottom: 0.6rem;
    // margin-left: -0.6rem;
    position: absolute;
    right: 0;
    top: -2px;
    .text-negative {
      background-color: red;
    }
  }
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: "lime-1";
    border: none;
    color: #0070cc;
    direction: rtl;
    text-align: right;
  }
  .style-chooser .vs__dropdown-toggle {
    margin: 0 4px;
  }
  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #0070cc;
    margin-left: 6px;
  }
  .input-container {
    position: relative;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    width: 70px;
    font-family: "Courier New", Courier, monospace;
  }
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
}
</style>
