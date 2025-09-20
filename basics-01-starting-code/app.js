const app = window.Vue.createApp({
    data: () => {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal: function() {
            const randomNumber = Math.random();

            if(randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    },
});

app.mount('#user-goal');