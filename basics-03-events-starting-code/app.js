const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(number) {
      if (!number) {
        number = 1;
      }
      this.counter = this.counter + number;
    },
    remove(number) {
      if (!number) {
        number = 1;
      }
      this.counter = this.counter - number;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    reset() {
      this.counter = 0;
    },
  }
});

app.mount('#events');
