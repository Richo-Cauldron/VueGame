new Vue({
	el: '#app',
	data: {
		show: true,
		playerPoints: 100,
		monsterPoints: 100,
		plyrPointsWidth: 350,
		mstrPointsWidth: 350,
		plyrAtk: 0,
		mstrAtk: 0,
		gameLog: []
	},
	methods: {
		toggle: function(type){
			this.show = !this.show;
			this.gameLog = [];
		},
		restart: function(){
			console.log('restart called');
				this.toggle();
				this.playerPoints = 100 ;
				this.monsterPoints = 100 ;
				this.plyrPointsWidth = 350 ;
				this.mstrPointsWidth = 350 ;
				this.gameLog = [] ;
		},
		attack: function(){
			this.generateGameDamage(1);
			this.combatDamageResolution(this.plyrAtk, this.mstrAtk);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'damage');
		},
		specialAttack: function(){
			this.generateGameDamage(2);
			this.combatDamageResolution(this.plyrAtk, this.mstrAtk);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'special damage');			
		},
		health: function(){
			this.generateGameDamage(1);
			this.combatDamageResolution(-this.plyrAtk, - this.mstrAtk);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'health');
			
		},
		generateGameDamage: function(x){
			this.mstrAtk = Math.floor(Math.random() *20) * x;
			this.plyrAtk = Math.floor(Math.random() * 20) * x;
		},
		combatDamageResolution: function(playerAtk, monsterAtk){
			// console.log(player, monster);
			this.playerPoints = this.playerPoints - monsterAtk;
			this.monsterPoints = this.monsterPoints - playerAtk;

			if(this.playerPoints <= 0 && this.monsterPoints<= 0){
				alert("you both have died!");
				this.restart();
				return ;
			}

			if(this.playerPoints >= 100){
				this.playerPoints = 100;
			}
			if(this.playerPoints <= 0) {
				this.playerPoints = 0;
				alert('The monster has won the battle!!');
				return;
			}
			if(this.monsterPoints >= 100){
				this.monsterPoints = 100;
			}
			if(this.monsterPoints <= 0) {
				this.monsterPoints = 0;
				alert('Congratulations, You have won the battle!!');
				return;
			}
			
		},
		healthBarCalculation: function(playerHBAdj, monsterHBAdj){
			this.plyrPointsWidth = this.playerPoints/100*350;
			this.mstrPointsWidth = this.monsterPoints/100*350;
		},
		logEntry: function(playerAtk, monsterAtk, type){
			
			// console.log(type);
			// console.log(this.playerPoints, this.monsterPoints);
			if(type == 'health'){
				this.gameLog.push('You recieved ' + playerAtk + 'points of ' + type);
				this.gameLog.push('Monster recieved ' + monsterAtk + 'points of ' + type);
			}
			if(this.playerPoints <=0  || this.monsterPoints <=0){
					this.restart();
			} else {
					this.gameLog.push('You hit the monster with ' + playerAtk + 'points of ' + type);
					this.gameLog.push('Monster hits you with ' + monsterAtk + 'points of ' + type);
			}
		},
		
	}
})