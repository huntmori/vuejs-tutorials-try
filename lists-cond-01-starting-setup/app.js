const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  },

  computed: {
    isEmptyGoal() {
      return this.goals.length === 0;
    }
  }
});

app.mount('#user-goals');
