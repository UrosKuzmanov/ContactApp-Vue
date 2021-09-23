<template>
  <base-wrapper>
    <form @submit.prevent="saveItem">
      <base-badge key="1" type="inset">
        <i class="fas fa-user"></i>
        <input
          v-model="newItem.name"
          type="text"
          :placeholder="contact.name" />
      </base-badge>

      <base-badge key="2" type="inset">
        <i class="fas fa-phone"></i>
        <input
          v-model="newItem.phone"
          type="text"
          :placeholder="contact.phone"
        />
      </base-badge>

      <base-badge key="3" type="inset">
        <i class="fas fa-at icon"></i>
        <input
          v-model="newItem.email"
          type="text"
          :placeholder="contact.email"
        />
      </base-badge>

      <base-badge key="4" type="inset">
        <i class="fas fa-map-marker-alt"></i>
        <input
          v-model="newItem.address"
          type="text"
          :placeholder="contact.address"
        />
      </base-badge>

      <base-badge key="5" type="inset">
        <i class="fab fa-creative-commons-sampling"></i>
        <select v-model="newItem.rel" id="rel" name="rel">
          <option value="friend">Friend</option>
          <option value="work">Work</option>
          <option value="Family">Family</option>
        </select>
      </base-badge>

      <base-button mode="saveBtn"
        ><i class="fas fa-save"></i> Save Contact</base-button
      >
      <base-button @click.stop="deleteItem" mode="delBtn">
        <i class="fas fa-trash-alt"></i> Delate Contact</base-button
      >
    </form>
  </base-wrapper>
</template>
<script>
export default {
  props: ["contact"],
  data() {
    return {
      newItem: {
        name: this.contact.name,
        phone: this.contact.phone,
        email: this.contact.email,
        address: this.contact.address,
        avatar: this.contact.avatar,
        rel: this.contact.rel,
        id: this.contact.id,
      },
    };
  },
  methods: {
    saveItem() {
      this.$store.dispatch("updataItem", this.newItem);
      this.$router.replace("/contacts");
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", this.contact.id);
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
</style>