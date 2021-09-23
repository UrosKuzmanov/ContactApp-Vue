<template>
  <div class="card" @click="showInfo">
    <div class="info">
      <img-wrapper :img="contact.avatar"></img-wrapper>
      <contact-info :contact="contact"></contact-info>
    </div>
    <base-button
      @click.stop
      :to="editLink"
      type="edit"
      link
      class="fas fa-user-edit"
    ></base-button>
  </div>
</template>


<script>
export default {
  name: "base-card",
  props: ["contact"],
  methods: {
    showInfo() {
      this.$router.push({ path: `/contacts/${this.contact.id}` });
    },
  },
  computed: {
    editLink() {
      return `/contacts/${this.contact.id}/edit`;
    },
  },
};
</script>


<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  padding: 0 5px;
  cursor: pointer;
}
.card:hover {
  background-color: #494a4b;
}
.info {
  display: flex;
  align-items: center;
}
</style>