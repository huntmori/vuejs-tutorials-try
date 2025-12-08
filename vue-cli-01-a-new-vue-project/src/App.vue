<template>
    <section>
      <h2>My Friends</h2>
      <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
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
