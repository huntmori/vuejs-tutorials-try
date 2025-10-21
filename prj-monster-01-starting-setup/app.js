const data = {
    playerHealth: 100,
    monsterHealth: 100,
    maxHealth: 100,
    currentRound: 0,
    specialAttackCoolDown: 0,
    winner: null,
};

// javascript에서 만 호출하는 경우 javascript function가능
const getRandomValue = function(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

const methods = {
    increaseRound: function() {
        this.currentRound++;

        this.specialAttackCoolDown--;
        if(this.specialAttackCoolDown < 0) {
            this.specialAttackCoolDown = 0;
        }
    },
    attackMonster: function() {
        this.increaseRound();
        const damage = getRandomValue(5, 12);
        this.monsterHealth -= damage;
        this.attackPlayer()
    },
    attackPlayer: function() {
        const damage = getRandomValue(8, 10);
        this.playerHealth -= damage;
    },
    specialAttackMonster: function() {
        this.increaseRound();
        this.specialAttackCoolDown = 3;
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.attackPlayer();
    },
    healPlayer: function() {
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
    data: function() {
        return data;
    },
    methods: methods,
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //draw
                this.winner = 'draw';
            } else if(value<=0) {
                //player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //draw
                this.winner = 'draw';
            } else if(value <= 0) {
                //player win
                this.winner = 'player';
            }
        }
    },
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
        },
        isDefeated() {
            return this.playerHealth <= 0  && this.monsterHealth >= 0;
        },
        isWin() {
            return this.monsterHealth <= 0 && this.playerHealth >= 0;
        },
        isDraw() {
            return this.monsterHealth <= 0 && this.playerHealth <= 0;
        }
    }
};

const app = Vue.createApp(appData);

app.mount('#game');