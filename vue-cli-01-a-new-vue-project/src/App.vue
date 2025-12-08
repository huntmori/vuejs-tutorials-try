<template>
    <section>
      <h2>My Friends</h2>
      <ul>
        <li v-for="friend in friends" :key="friend.id">
          <h3>{{ friend.name }}</h3>
          <p>Phone: {{ friend.phone }}</p>
          <p>Email: {{ friend.email }}</p>
        </li>
      </ul>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: 'manuel', 
            name: 'Manuel Lorenz', 
            phone: '0171 1234567', 
            email: 'manuel@example.com'
          },
          {
            id: 'julie', 
            name: 'Julie Jones', 
            phone: '0171 7654321', 
            email: 'julie@example.com'
          },
        ]
      }
    },
    methods: {},
    computed: {}
  };
</script>