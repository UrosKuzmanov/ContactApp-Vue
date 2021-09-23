<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

body {
  font-family: "Inter", sans-serif;
  margin: 0;
  color: #fff;
}
.container {
  max-width: 428px;
  margin: auto ;
  background-color: #313438;
  height: 767.465px;
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: #494a4b;
}
</style>
