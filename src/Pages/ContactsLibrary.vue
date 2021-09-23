<template>
  <div>
    <librery-header @search-contacts="searchContacts"></librery-header>
    <contacts-librery :contacts="contacts"></contacts-librery>
  </div>
</template>

<script>
import ContactLibraryHeader from "../components/layout/ContactLibrary/ContactLibraryHeader.vue";
import contactsLibrery from "../components/layout/ContactLibrary/ContactLibrery.vue";

export default {
  name: "contactsList",
  components: {
    libreryHeader: ContactLibraryHeader,
    contactsLibrery,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchContacts(args) {
      this.search = args;
    },
  },
  computed: {
    contacts() {
      if (this.search != "") {
        return this.$store.getters.showAllContacts.filter(
          (item) =>
            item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      }
      return this.$store.getters.showAllContacts;
    },
  },
};
</script>



