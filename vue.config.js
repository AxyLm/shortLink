let path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  devServer:{
    port:8899,
    proxy:{
      '/api':{
//    	localhost:8899/api/fcj/recommend/banner
//      target:'http://47.95.207.1:3000',//转发的目标服务器，
        target:'http://47.95.207.1:3000',
        changeOrigin:true, // 是否允许虚拟站点
        // ws:true,
        pathRewrite:{
          '^/api':'' //路径重写
        }
      }
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('style',resolve('./src/common/style'))
    .set('utils',resolve('./src/common/utils'))
    .set('img',resolve('./src/common/img'))
    .set('font',resolve('./src/common/font'))
    .set('components',resolve('./src/components'))
    .set('common',resolve('./src/components/common'))
    .set('pages',resolve('./src/components/pages'))
    .set('node_modules',resolve('./node_modules'))
  }
}
