<template>
  <div>
    <edit-header></edit-header>
    <edit-form :contact="contact"></edit-form>
  </div>
</template>
<script>
import editContactHeader from "../components/layout/EditContact/EditContactHeader.vue";
import editContactForm from "../components/layout/EditContact/editContactForm.vue";
export default {
  props: ["id"],
  components: {
    editHeader: editContactHeader,
    editForm: editContactForm,
  },
  computed: {
    contact() {
      return this.$store.getters.showContactItem(this.id);
    },
  },
};
</script>