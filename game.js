new Vue({
	el: '#app',
	data: {
		show: true,
		pointsTotal: 100,
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
			if (type == 'restart'){
				this.pointsTotal = 100 ;
				this.playerPoints = 100 ;
				this.monsterPoints = 100 ;
				this.plyrPointsWidth = 350 ;
				this.mstrPointsWidth = 350 ;
				this.gameLog = [] ;
				console.log(this.gameLog.length);
			}
			this.show = !this.show
		},
		generateGameDamage: function(x=1){
			this.mstrAtk = Math.floor(Math.random() *20) * x;
			this.plyrAtk = Math.floor(Math.random() * 20) * x;
		},
		attack: function(){
			this.generateGameDamage();
			this.combatDamageResolution(this.plyrAtk, this.mstrAtk, x=1);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'damage');
		},
		combatDamageResolution: function(playerAtk, monsterAtk){
			// console.log(player, monster);
			this.playerPoints = this.playerPoints - monsterAtk;
			this.monsterPoints = this.monsterPoints - playerAtk;
			if(this.playerPoints >= 100){
				this.playerPoints = 100;
			}
			if(this.playerPoints <= 0) {
				this.playerPoints = 0;
				alert('The monster has won the battle!!');
				this.toggle('restart');
			}
			if(this.monsterPoints >= 100){
				this.monsterPoints = 100;
			}
			if(this.monsterPoints <= 0) {
				this.monsterPoints = 0;
				alert('Congratulations, You have won the battle!!');
				this.toggle('restart');
			}
		},
		healthBarCalculation: function(playerHBAdj, monsterHBAdj){
			this.plyrPointsWidth = this.playerPoints/100*350;
			this.mstrPointsWidth = this.monsterPoints/100*350;
		},
		logEntry: function(playerAtk, monsterAtk, type){
			console.log(type);
			console.log(this.playerPoints, this.monsterPoints);
			if(type == 'health'){
			this.gameLog.push('You recieved ' + playerAtk + 'points of ' + type);
			this.gameLog.push('Monster recieved ' + monsterAtk + 'points of ' + type);
			} else {
			this.gameLog.push('You hit the monster with ' + playerAtk + 'points of ' + type);
			this.gameLog.push('Monster hits you with ' + monsterAtk + 'points of ' + type);
			}
		},
		specialAttack: function(){
			this.generateGameDamage(2);
			this.combatDamageResolution(this.plyrAtk, this.mstrAtk);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'special damage');			
		},
		health: function(){
			this.generateGameDamage();
			this.combatDamageResolution(-this.plyrAtk, - this.mstrAtk);
			this.healthBarCalculation(this.playerPoints,this.monsterPoints);
			this.logEntry(this.plyrAtk, this.mstrAtk, 'health');
			
		}
	}, 
	
	computed: {
	}
})