<template>
  <header>
    <base-button
      mode="backBtn"
      class="fas fa-arrow-circle-left"
      :style="{ margin: '20px' }"
    ></base-button>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(
    90deg,
    rgba(66, 159, 124, 1) 0%,
    rgba(161, 193, 78, 1) 100%
  );
  padding: 10px 0;
}
</style>