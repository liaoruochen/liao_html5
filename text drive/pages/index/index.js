//index.js
//获取应用实例
import testDrive from '../../modules/text-drive'
// console.log(testDrive)
//在page中得到app
const app = getApp()

Page({
  data: {
   slides:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides,

    })
  },
  //事件处理函数
  testDrive
  ,

  readMore:function(event){
    const id =event.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vihicies/show?id=${id}`
    })
  }
})
