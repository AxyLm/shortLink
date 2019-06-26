<template>
	<div id='subject'>
		<div id='subIn'>
				<div id='welcome'><h3>欢迎光临</h3></div>
			<div class='inputBox'>
				<span class="iconfont link">&#xe658;</span>
				<input name="logname" class="text" type="text" placeholder="请输入要转换的链接" v-model="write">
			</div>
			
			<div class='btnBox'>
				<button class='iconfont conversion' @click="Conversion()">&#xe664;{{start}}</button>
				
				<button class='iconfont imgbtn' @click="imgBtn()">{{img}}&#xe626;</button>
			</div>
			
			
			<div class='inputBox'>
				<span class="iconfont link">&#xe64d;</span>
				<!--<input class="text" value="" type="text" placeholder="结果" v-model="Result">-->
				<span class='content'>{{Result}}</span>
			</div>
		</div>
		<transition name = 'slide-fade'>
			
			<div id='Mask' v-show="show">
				<div class='iconfont showBtn' @click="showBtn">&#xe690;</div>
				<div id='maskImg'>
					<img :src=src alt="" id="subImgs"/>
					<img :src="loading[indexLoading]"/>
				</div>
			</div>
			
		</transition>
	</div>
</template> 

<script>
	import Loading from 'common/loading/loading'
	export default {
		data(){
			return{
				write:'',
				Result:'结果',
				start:'转换',
				urls:'http://suo.im/api.php?',
				img:'生成二维码',
				src:"",
				indexLoading:'4',
				show:false,
				
				loading:
				['https://storage7.cuntuku.com/2019/06/22/cNJwW.gif',
									'https://storage1.cuntuku.com/2019/06/22/cNNRd.gif',
									'https://storage6.cuntuku.com/2019/06/22/cNKD6.gif',
									'https://storage7.cuntuku.com/2019/06/22/cNdjr.gif',
									'https://storage6.cuntuku.com/2019/06/22/cNvyV.gif',]
			}
		},
		components:{Loading},
		methods:{
			Conversion(){
				this.$axios.get(`${this.urls}url=${this.write}&key=5cbdc04f8e676d197e2eb270@2ddf5a77469ad8df146d2c739ad8250f&expireDate=2029-03-31`)
				.then((res)=>{
					this.Result = res
					this.start = '转换成功'
				})
				.catch((err)=>{
					console.log(err)
					this.start = '转换失败'
				})
			},
			imgBtn(){
				let random = Math.floor(Math.random() * 4);
				this.indexLoading = random
				if(this.Result !== '结果'){
					this.src = `https://bshare.optimix.asia/barCode?site=weixin&url=${this.Result}`
				}else{
					this.src = `https://bshare.optimix.asia/barCode?site=weixin&url=${this.write}`
				}
					this.show = !this.show
				},
			showBtn(){
				this.show = !this.show
			}
		},
	}
</script>

<style scoped>
@import url("~style/font.css");
@import url("~style/input.css");
@import url("~style/subject.css");
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>


