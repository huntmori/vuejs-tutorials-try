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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const data = {
  message: 'Hello',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    console.log('target: ', target);
    console.log('key: ' + key);
    console.log('value: ' + value);

    if(key ==='message') {
      target.longMessage = value + ' World!';
    }

    return target.getProperty(key);
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';