<template>
  <base-wrapper>
    <base-card 
    v-for="contact in contacts"
    :key="contact.id"
    :contact="contact"
    ></base-card>
   
  </base-wrapper>
</template>
<script>
import baseCard from "../../ui/BaseCard.vue";
export default {
  components: {
    baseCard,
  },
  props:["contacts"]

  
};
</script>


