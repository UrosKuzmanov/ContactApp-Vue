<template>
  <div class="info_wrapper" :class="renderTo">
    <p class="contact_name">{{ contact.name }}</p>
    <p class="contact_rel">{{ contact.rel }}</p>
  </div>
</template>
<script>
export default {
  props: {
    renderTo: {
      type: String,
      required: false,
      default: "libreryHeader",
    },
    contact: {
      required: true,
    },
  },
};
</script>
<style scoped>
.contact_name {
  font-size: 20px;
  letter-spacing: 1px;
}
.contact_rel {
  letter-spacing: 1px;
  width: 70px;
  text-align: center;
  padding: 6px 8px;
  border-radius: 100px;
  border-top-left-radius: 0;
  background-color: #75a85e;
}
.infoHeader .contact_rel {
  margin: 0 auto;
  background-color: transparent;
}
.libreryHeader {
  margin-left: 20px;
}
.infoHeader {
  text-align: center;
  margin: 0 auto;
}
</style>