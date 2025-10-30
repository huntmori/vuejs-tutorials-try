const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText.value);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  }
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p> {{ favoriteMeal }} </p>
  `,
  data: function() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');