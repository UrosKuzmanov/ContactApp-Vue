<template>
  <div class="img_wrapper" :class="size" :style="{ margin: margin }">
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: "small",
    },
    margin: {
      type: String,
      required: false,
      default: "0",
    },
    img: {
      required: true,
    },
  },
};
</script>
<style scoped>
.img_wrapper {
  background-color: rgba(255, 255, 255, 0.665);
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 0 6px 12px;
}
img {
  max-width: 100%;
}
.small {
  width: 50px;
  height: 50px;
}
.bigg {
  width: 100px;
  height: 100px;
}
</style>