<template>
  <div :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "outset",
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  padding: 30px 40px;
  box-sizing: border-box;
  margin: 40px auto;
  width: 90%;
  border-radius: 23px;
  background: #313438;
}
.outset {
  box-shadow: 7px 7px 14px #2d2f33, -7px -7px 14px #35393d;
}
.inset {
  box-shadow: inset 12px 12px 16px #2c2e32, inset -12px -12px 16px #363a3e;
}
</style>