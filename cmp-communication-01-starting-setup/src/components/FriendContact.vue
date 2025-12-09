<template>
  <li>
    <h2>{{ this.name }} {{ friendIsFavorite === '1' ? '★' : '' }}</h2>
    <button @click="toggleFavorite">
      toggle Favorite
    </button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ this.phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ this.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [
    'name', 'phoneNumber', 'emailAddress', 'isFavorite'
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0;'
      } else {
        this.friendIsFavorite = '1';
      }
    }
  }
};
</script>