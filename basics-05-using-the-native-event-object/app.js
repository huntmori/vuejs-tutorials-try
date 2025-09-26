const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullName() {
      /** 페이지에 변화가 생길 시 vue에 의해 매번 재 실행 됨 */
      console.log('outputFullName');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzumuller';
    },
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

});

app.mount('#events');
