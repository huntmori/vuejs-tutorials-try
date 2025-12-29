<template>
  <li>
    <h2>{{ this.name }} {{ isFavorite ? '★' : '' }}</h2>
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
        {{ this.emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { 
      type: Boolean, 
      required: false, 
      default: false
    },
  },
  //emits: [ 'toggle-favorite' ],
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('id not found');
        return false;
      }
    }
  },
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
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>