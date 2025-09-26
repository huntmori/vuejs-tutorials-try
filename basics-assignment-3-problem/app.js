const app = Vue.createApp({
    data: () => {
        return {
            result: 0,
            goal: 37
        }
    },
    methods: {
        addResult(event, value) {
            this.result += value;
        }
    },
    computed:{
        outputResult() {
            if (this.result > this.goal) {
                return 'Too much!';
            } else if (this.result < this.goal) {
                return 'Not there yet';
            }

        }
    },
    watch: {
        result() {
            const self = this;
            setTimeout(() => {
                self.result = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');