<template>
  <div>
    <info-header :contact="contact"></info-header>

    <info-item :contact="contact"></info-item>
  </div>
</template>

<script>
import ContactInfoHeader from "../components/layout/ContactInfo/ContactInfoHeader.vue";
import infoItem from "../components/layout/ContactInfo/InfoItem.vue";

export default {
  name: "contactInfo",
  props:["id"],
  components: {
    infoHeader: ContactInfoHeader,
    infoItem,
  },
  computed:{
      contact(){
          return this.$store.getters.showContactItem(this.id)
      }
  }
};
</script>