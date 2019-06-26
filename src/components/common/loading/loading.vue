<template>
	<div id="loading">
		<div class="loading" id="box">
		  <div></div>
		  <div></div>
		  <div></div>
		  <div></div>
		</div>
		<span></span>
	</div>
</template>

<script>
	export default{
		name:'loading',
		data(){
			return{
				name:'loading'
			}
		},
		props:{
			txt:{
				default:'loading'
			}
		}
	}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 250px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
  border-radius: 100px;
  cursor: move;

  font-size: 12px;
  text-align: center;
  line-height: 60px;
  left: 40%;

}

.loading > div {
  position: absolute;
  width: 60px;
  height: 60px;
  animation: alpha 5s linear infinite forwards;
  background: rgba(231, 76, 60, 0.75);
 
}

.loading > div:nth-child(1) {
  top: -50%;
  left: -50%;
}

.loading > div:nth-child(2) {
  top: -50%;
  right: -50%;
}

.loading > div:nth-child(3) {
  bottom: -50%;
  right: -50%;
}

.loading > div:nth-child(4) {
  bottom: -50%;
  left: -50%;
}

@keyframes alpha {
  0% {
    transform: rotate(0);
    background: rgba(231, 76, 60, 0.75);
  }
  25% {
    background: rgba(230, 126, 34, 0.75);
  }
  50% {
    border-radius: 50%;
    background: rgba(142, 68, 173, 0.75);
  }
  75% {
    background: rgba(41, 128, 185, 0.75);
  }
  100% {
    transform: rotate(360deg);
    background: rgba(231, 76, 60, 0.75);
  }
}
#loading{
	width:375px;
	height:130px;
	font-size: 20px;
	color:#fff;
}
</style>