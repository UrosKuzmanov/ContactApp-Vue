<template>
  <button v-if="!link" @click="goBack" :class="mode" :style="style">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode" :style="style">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    type: {
      type: String,
      required: false,
      default: "",
    },
    style: {
      required: false,
      default: {},
    },
  },

  methods: {
    goBack: function () {
      if (this.mode == "backBtn") {
        this.$router.go(-1);
      } else {
        return null;
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

a:hover,
a:active,
.backBtn:hover {
  color: rgba(255, 255, 255, 0.384);
}
.backBtn {
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.saveBtn,
.delBtn {
  padding: 30px 40px;
  box-sizing: border-box;
  margin: 40px 20.8505px;
  width: 90%;
  border-radius: 23px;
  background: #313438;
  box-shadow: 7px 7px 14px #2d2f33, -7px -7px 14px #35393d;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
}
.delBtn {
  color: rgb(118, 24, 24);
  font-weight: bold;
}
.saveBtn:hover,
.delBtn:hover {
  background: #3b3e43;
}
</style>