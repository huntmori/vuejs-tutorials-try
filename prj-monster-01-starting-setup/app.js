const data = {
    playerHealth: 100,
    monsterHealth: 100,
    maxHealth: 100,
    currentRound: 0,
    specialAttackCoolDown: 0,
    winner: null,
    logMessages: []
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
        this.addLogMessage('player', 'attack', damage);
        this.attackPlayer()
    },
    attackPlayer: function() {
        const damage = getRandomValue(8, 10);
        this.addLogMessage('monster', 'attack', damage);
        this.playerHealth -= damage;
    },
    specialAttackMonster: function() {
        this.increaseRound();
        this.specialAttackCoolDown = 3;
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.addLogMessage('player','special attack', damage);
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
        this.addLogMessage('player', 'heal', healAmount);
        this.increaseRound();
    },
    startNewGame: function() {
        this.currentRound = 0;
        this.specialAttackCoolDown = 0;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.winner = null;
        this.logMessages = [];
    },
    surrender: function() {
        this.winner = 'monster';
    },
    addLogMessage: function(who, what, value) {
        this.logMessages.unshift({
            actionBy: who,
            actionType: what,
            actionValue: value
        });
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
                this.playerHealth = 0;
            } else if(value<=0) {
                //player lost
                this.winner = 'monster';
                this.playerHealth = 0;
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //draw
                this.winner = 'draw';
                this.monsterHealth = 0;
            } else if(value <= 0) {
                //player win
                this.winner = 'player';
                this.monsterHealth = 0;
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
            if(this.winner === 'monster') {
                return true;
            }
            return this.playerHealth <= 0  && this.monsterHealth >= 0;
        },
        isWin() {
            if (this.winner === 'player') {
                return true;
            }
            return this.monsterHealth <= 0 && this.playerHealth >= 0;
        },
        isDraw() {
            if (this.winner==='draw') {
                return true;
            }
            return this.monsterHealth <= 0 && this.playerHealth <= 0;
        },
        isGameOver() {
            return this.winner !== null
                || this.playerHealth <= 0
                || this.monsterHealth <= 0;
        }
    }
};

const app = Vue.createApp(appData);

app.mount('#game');