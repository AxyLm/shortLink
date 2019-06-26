<template>
	<div id='index' :style="bgimg">
		<subject></subject>
	</div>
</template>

<script>
import subject from 'pages/subject/subject.vue'

export default {
  components: {
   subject
  },
  data(){
  	return{
  		bgimg:{
  			backgroundImage:`url(bg[0])`
  		},
	  	bg:['https://tvax1.sinaimg.cn/large/005BYqpggy1g4a3b4n9lqj31hc0u04qp.jpg',
					'https://tvax1.sinaimg.cn/large/005BYqpggy1g4a3b5hpvjj31hc0u01kx.jpg',
	  			'https://i.loli.net/2019/06/22/5d0e110041e4c32375.jpg',
	  			'https://i.loli.net/2019/06/22/5d0e11b6b981b19350.jpg',
					'https://i.loli.net/2019/06/22/5d0e11b82cdc044837.jpg',
					'https://i.loli.net/2019/06/22/5d0e11b8b848288895.jpg',
					'https://i.loli.net/2019/06/22/5d0e11bbc92ce68519.jpg',
					'https://i.loli.net/2019/06/22/5d0e11bea5e0243353.jpg',
	  			'https://i.loli.net/2019/06/22/5d0e127fe5dee81794.jpg',
			  	'https://i.loli.net/2019/06/22/5d0e135a181dc22385.jpg',
					'https://i.loli.net/2019/06/22/5d0e135d9cae187527.jpg',
					'https://i.loli.net/2019/06/22/5d0e1361a981d88251.jpg',
					'https://i.loli.net/2019/06/22/5d0e136347d2964371.jpg',
					'https://i.loli.net/2019/06/22/5d0e1363c468920712.jpg',
					'https://i.loli.net/2019/06/22/5d0e13647361149746.jpg',
	  			'https://image.eyabc.cn/image/2019-06-26/17fdd5f92bb60c0dbe605a8d8280e7e5.png'],
	  	bgIndex:'0',
	  }
  },
  created(){
  	this.bgIndex = (Math.floor(Math.random()*(this.bg.length -1 )))
  	this.bgimg.backgroundImage = "url(" + this.bg[this.bgIndex] + ") "

		console.log("%c\n       ", "font-size:230px;background:url('https://image.eyabc.cn/image/2019-06-26/417e261049c5ebd5036654a67b13025a.png') no-repeat ");
    console.log('%c想和我们用代码共同打造心中理想的世界么？%c \n想让自己的成就在亿万用户面前展现吗？想让世界看得你的光芒吗？%c \n加入我们，投入你的时间和热情，滴滴汗水终会汇聚成不平凡的成果。%c \n期待你的加盟。'
    							,"color:red;","color:skyblue;","color:black;","color:green;");
		console.log('%c联系邮箱 ：thelmg@163.com','color:red;font-weight:bold;')
  }
}

</script>

<style scoped>

	#index{
		position: fixed;
		top:0;left: 0;right: 0;bottom: 0;
		height: 100%;
		background-repeat:no-repeat;
		background-position: center;
	}
</style>