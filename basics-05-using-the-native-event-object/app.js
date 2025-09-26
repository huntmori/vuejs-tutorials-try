const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.counter = 0;
      this.name = '';
    },
  },
  /** vue가 의존성을 인식하고 필요한 경우에만 호출 */
  computed: {
    fullName() {
      console.log('called fullName in computed property');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
    }
  }
});

app.mount('#events');
