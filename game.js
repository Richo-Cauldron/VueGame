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
		toggle: function(){
			this.show = !this.show
		},
		attack: function(){
			this.mstrAtk = Math.floor(Math.random() *10);
			this.playerPoints = this.playerPoints - this.mstrAtk;
			this.plyrPointsWidth = this.playerPoints/100*350;
			this.gameLog.push('Monster hits you with ' + this.mstrAtk + 'points of damage');
			this.plyrAtk = Math.floor(Math.random() * 20);
			this.monsterPoints = this.monsterPoints - this.plyrAtk;
			this.mstrPointsWidth = this.monsterPoints/100*350;
			this.gameLog.push('You hit the monster with ' + this.plyrAtk + 'points of damage');
		},
		specialAttack: function(){
		this.plyrAtk = Math.floor(Math.random() * 20)*2;
			this.monsterPoints = this.monsterPoints - this.plyrAtk;
			this.mstrPointsWidth = this.monsterPoints/100*350;
		}
	}, 
	
	computed: {
	}
})