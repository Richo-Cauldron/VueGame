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
			this.plyrAtk = Math.floor(Math.random() * 10);
			this.monsterPoints = this.monsterPoints - this.plyrAtk;
			this.mstrPointsWidth = this.monsterPoints/100*350;
		},
		specialAttack: function(){
		this.plyrAtk = Math.floor(Math.random() * 10)*2;
			this.monsterPoints = this.monsterPoints - this.plyrAtk;
			this.mstrPointsWidth = this.monsterPoints/100*350;
		}
	}, 
	
	computed: {
	}
})