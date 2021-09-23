<template>
  <base-wrapper>
    <base-badge key="1">
      <i class="fas fa-phone icon"></i>
      <p>{{ contact.name }}</p>
    </base-badge>
    <base-badge key="2">
      <i class="fas fa-at icon"></i>
      <p>{{ contact.email }}</p>
    </base-badge>
    <base-badge key="3">
      <i class="fas fa-map-marker-alt"></i>
      <p>{{ contact.address }}</p>
    </base-badge>
    <base-button
      link
      :to="editLink"
      class="fas fa-user-edit"
      :style="{ textAlign: 'center', display: 'block' }"
    >
    </base-button>
  </base-wrapper>
</template>

<script>
export default {
  props: ["contact"],
  computed: {
    editLink() {
      return `/contacts/${this.contact.id}/edit`;
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin: 0 auto;
}
</style>