const app = Vue.createApp({
    data: () => {
        return {
            alertMessage: 'Keeper of the celestial flame of the Abernathy',
            input1Value: '',
            input2Value: '',
        }
    },
    methods: {
        showAlertHandler(msg) {
            if(!msg) {
                msg = this.alertMessage;
            }
            alert(msg);
        },
        input1KeydownHandler(event) {
            console.log(event.target.value);
            this.input1Value = event.target.value;
        },
        input2EnterHandler(event) {
            this.input2Value = event.target.value;
        }
    },
});

app.mount('#assignment')