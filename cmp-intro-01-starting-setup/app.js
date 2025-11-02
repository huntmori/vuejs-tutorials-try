const app = Vue.createApp({
    data: function() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                }
            ]
        }
    }
});

app.component('friend-contact',{
    data: function() {
        return {
            isVisibleDetail: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
        }
    },
    methods: {
        toggleDetails: function() {
            this.isVisibleDetail = !this.isVisibleDetail;
        }
    },
    template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button v-on:click="toggleDetails">
                {{ isVisibleDetail ? 'Hide': 'Show' }} Show Details
            </button>
            <ul v-if="isVisibleDetail">
                <li><strong>Phone:</strong> {{friend.phone}} </li>
                <li><strong>Email:</strong> {{ friend.email}} </li>
            </ul>
        </li>
    `
});

app.mount('#app');