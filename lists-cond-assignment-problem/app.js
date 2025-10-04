const object = {
    data: () => {
        return {
            taskArray: [],
            typedTask: '',
            isHideList: false,
        };
    },
    methods: {
        onClickAddTask() {
            this.taskArray.push(this.typedTask);
            this.typedTask = '';
            console.log(this.taskArray);
        },
        onClickToggleList() {
            this.isHideList = !this.isHideList;
        }
    },
    computed: {
        buttonText() {
            return this.isHideList ? 'Show' : 'Hide';
        }
    }
};
const app = Vue.createApp(object);

app.mount('#assignment');