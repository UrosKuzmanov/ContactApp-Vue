<template>
  <base-wrapper>
    <form @submit.prevent="saveItem">
      <base-badge key="1" type="inset">
        <i class="fas fa-user"></i>
        <input v-model="newItem.name" type="text" placeholder="Name" />
      </base-badge>

      <base-badge key="2" type="inset">
        <i class="fas fa-phone"></i>
        <input v-model="newItem.phone" type="text" placeholder="Phone number" />
      </base-badge>

      <base-badge key="3" type="inset">
        <i class="fas fa-at icon"></i>
        <input v-model="newItem.email" type="text" placeholder="Email" />
      </base-badge>

      <base-badge key="4" type="inset">
        <i class="fas fa-map-marker-alt"></i>
        <input v-model="newItem.address" type="text" placeholder="Adress" />
      </base-badge>

      <base-badge key="5" type="inset">
        <i class="fas fa-images icon"></i>
        <input v-model="newItem.avatar" type="text" placeholder="Avatar" />
      </base-badge>
      <a href="https://robohash.org/" target="_blank"
        >Pick avatar from RoboHash</a
      >

      <base-badge key="6" type="inset">
        <i class="fab fa-creative-commons-sampling"></i>
        <select v-model="newItem.rel" id="rel" name="rel">
          <option value="Friend">Friend</option>
          <option value="Work">Work</option>
          <option value="Family">Family</option>
        </select>
      </base-badge>

      <base-button mode="saveBtn">
        <i class="fas fa-save"></i> Save Contact
      </base-button>
    </form>
  </base-wrapper>
</template>
<script>
export default {
  data() {
    return {
      newItem: {
        name: "",
        phone: "",
        email: "",
        address: "",
        avatar: "",
        rel: "",
      },
    };
  },
  methods: {
    saveItem() {
      this.$store.dispatch("saveNewItem", this.newItem);
      this.$router.replace("/contacts");
    },
  },
};
</script>
<style scoped>
input,
select {
  margin: auto;
  text-align: center;
  border: none;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
}
select {
  cursor: pointer;
}
select option {
  background-color: #494a4b;
}
a {
  color: white;
  margin: 0 0 0 20px;
}
</style>