const app = Vue.createApp({
    data: () => {
        return {
            classArray: [],
            backgroundColor: '',
            hidden: false
        }
    },
    methods: {
        addClass($event) {
            if (this.classArray.includes($event.target.value)) {
                this.classArray = this.classArray.filter((el) => el !== $event.target.value)
                return;
            }
            this.classArray.push($event.target.value);
        },
        updateBackgroundColor(event) {
            this.backgroundColor = event.target.value;
        },
        toggleHidden() {
            this.hidden = ! this.hidden;
        }
    },
    computed: {
        visibleClass () {
            return this.hidden ? 'hidden' : '';
        }
    }
});

app.mount('#assignment');