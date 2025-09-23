const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
    reset() {
      this.counter = 0;
    },
  }
});

app.mount('#events');
