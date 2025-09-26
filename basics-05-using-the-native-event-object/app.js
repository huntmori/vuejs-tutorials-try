const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: '',
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
      return this.name + ' ' + this.lastName;
    }

  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
    /** data.name이 변경될 때 마다 **/
    // name(value) {
    //   // value는 name을 참조
    //   // name(oldvalue, newvalue)형태도 사용 가능
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (this.name === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  }
});

app.mount('#events');
