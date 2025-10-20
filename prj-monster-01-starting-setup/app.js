const data = {
    playerHealth: 100,
    monsterHealth: 100,

};

// javascript에서 만 호출하는 경우 javascript function가능
const getRandomValue = function(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

const methods = {
    attackMonster() {
        const damage = getRandomValue(5, 12);
        this.monsterHealth -= damage;
        this.attackPlayer()
    },
    attackPlayer() {
        const damage = getRandomValue(8, 10);
        this.playerHealth -= damage;
    }
}

const appData = {
    data: () => data,
    methods: methods,
};

const app = Vue.createApp(appData);

app.mount('#game');