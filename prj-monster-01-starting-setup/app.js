const data = {
    playerHealth: 100,
    monsterHealth: 100,
    maxHealth: 100,
    currentRound: 0,
    specialAttackCoolDown: 0
};

// javascript에서 만 호출하는 경우 javascript function가능
const getRandomValue = function(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

const methods = {
    increaseRound() {
        this.currentRound++;

        this.specialAttackCoolDown--;
        if(this.specialAttackCoolDown < 0) {
            this.specialAttackCoolDown = 0;
        }
    },
    attackMonster() {
        this.increaseRound();
        const damage = getRandomValue(5, 12);
        this.monsterHealth -= damage;
        this.attackPlayer()
    },
    attackPlayer() {
        const damage = getRandomValue(8, 10);
        this.playerHealth -= damage;
    },
    specialAttackMonster() {
        this.increaseRound();
        this.specialAttackCoolDown = 3;
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.attackPlayer();
    },
    healPlayer() {
        const healAmount = getRandomValue(8, 20);

        if(this.playerHealth + healAmount >= this.maxHealth) {
            this.playerHealth = this.maxHealth;
        } else {
            this.playerHealth += healAmount;
        }
        this.attackPlayer();
        this.increaseRound();
    }
}

const appData = {
    data: () => data,
    methods: methods,
    computed: {
        monsterBarStyle() {
            return {
                width: (this.monsterHealth < 0 ? 0 : this.monsterHealth)
                        / this.maxHealth * 100 + '%'
            };
        },
        playerBarStyle() {
            return {
                width: ( this.playerHealth < 0 ? 0 : this.playerHealth)
                    / this.maxHealth * 100 + '%'
            };
        },
        isEnableSpecialAttack() {
            return this.specialAttackCoolDown !== 0;
        }
    }
};

const app = Vue.createApp(appData);

app.mount('#game');