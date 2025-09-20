const app = window.Vue.createApp({
    data: () => {
        return {
            courseGoal: 'Finish the course and learn Vue!'
        };
    },
});



app.mount('#user-goal');