<template>
  <header>
    <input
      v-model="searchText"
      @input="searchContact"
      placeholder="Search Contacts"
      type="text"
    />
    <base-button
      link
      to="/add"
      :style="{ fontSize: '24px' }"
      class="fas fa-plus-circle add_icon"
    ></base-button>
  </header>
</template>
<script>
export default {
  name: "ContactLibraryHeader",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchContact() {
      this.$emit("search-contacts", this.searchText);
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(
    90deg,
    rgba(66, 159, 124, 1) 0%,
    rgba(161, 193, 78, 1) 100%
  );
  padding: 40px 0;
  align-items: center;
}
input {
  font-size: 20px;
  padding: 5px;
  border-radius: 100px;
  border: 1px solid #fff;
  outline: none;
  letter-spacing: 2px;
}
</style>