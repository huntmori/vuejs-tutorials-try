const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      alert('Form submitted!');
    },
    submitOnly(event) {
      alert('Form submitted!');
    },
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
    setConfirmedName(event) {
      this.confirmedName = event.target.value;
    },
    reset() {
      this.counter = 0;
    },
  }
});

app.mount('#events');
