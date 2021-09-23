<template>
  <header>
    <base-button
      mode="backBtn"
      type="back"
      :style="{ margin: '20px 0 0 20px ' }"
      class="fas fa-arrow-circle-left"
    ></base-button>
    <img-wrapper
      :img="contact.avatar"
      margin="0 auto"
      size="bigg"
    ></img-wrapper>
    <contact-info :contact="contact" renderTo="infoHeader"></contact-info>
  </header>
</template>
<script>
export default {
  props: ["contact"],
};
</script>
<style scoped>
header {
  background: linear-gradient(
    90deg,
    rgba(66, 159, 124, 1) 0%,
    rgba(161, 193, 78, 1) 100%
  );
  padding: 10px 0;
  align-items: center;
}
</style>