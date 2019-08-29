<template>
  <div>this is some thing for app . for test . will omit . {{ msg }}</div>
</template>

<script>
export default {
  name: "Sth",
  props: {
    msg: {
      type: String,
      required: true,
      defualt: "righted for here"
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: rgb(206, 102, 102);
}
</style>