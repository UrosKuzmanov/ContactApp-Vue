<template>
  <div>
    <add-header></add-header>
    <add-form></add-form>
  </div>
</template>
<script>
import AddContactHeader from "../components/layout/AddContact/AddContactHeader.vue";
import AddContactForm from "../components/layout/AddContact/AddContactForm.vue";
export default {
  components: {
    addHeader: AddContactHeader,
    addForm: AddContactForm,
  },
};
</script>