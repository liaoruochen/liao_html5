//index.js
//获取应用实例
const app = getApp()

Page({
  //数据绑定
  data: {
    latitude: 39,
    longitude: 116,
    scale:15,
    controls: []
  },
  onReady:function(){
    //小程序提供了获取经纬度的方法
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        console.log(res.latitude,res.longitude);
        //重新设置 data 中的数据
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          scale:18,
          
        })
      }
    })

      //data数据初始化，数据会随着生命周期
      //用户的请求发生改变，数据时会变的 绑定着数据的界面也要时刻改变
      //自动刷新页面 setData 就是这样的一个API page 先显示地图 晚一点显示control
    this.setData({
        controls:[{
          id:1,
          iconPath:'/images/location.png',
          position:{
            left:20,
            top:200,
            width:50,
            height:50
          }
        }]
    })
  },
  //生命周期函数
  onLoad:function(){
    console.log('load');
  }
  
})
