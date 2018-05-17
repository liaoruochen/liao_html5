//index.js
//获取应用实例
const app = getApp()

Page({
  //数据 对应着 界面状态
  data: {
    //默认的是status是1也是全部
    //setdate 2 未完成
    //......3   已完成
    status : 1,
    addShow:true,
    lists: [{
      title:'帮徐加元同学砍价',
      time:'十分钟前',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      time:'刚刚',
      status: '0'
    }],
    addText:'' 
  },
  showStatus:function(e){

    const status = e.currentTarget.dataset.status;
    console.log(status);
    //不再是DOM编程,针对界面状态的编程
    this.setData({
      status : status 
    })
  },
  addTodoShow:function(e){
   this.setData({
     addShow:false
   })
  },
  addTodo:function(e){
    // ? 如何添加新的todo?
    //页面上多一个任务
    //显示多少条 由lists决定的
    //lists  push
    //数据驱动界面，数据变 界面自动更新
    // MVVM
    const task ={
      //输入框的内容
      title: this.data.addText,
      status:"0",
      time:"刚刚"
    }
    const temp = [...this.data.lists,task];

    this.setData({
      lists : temp,
      addShow : true,
    })


  },
  addTodoHide:function(e){
    this.setData({
      addShow:true,
    })
  },
  setInput:function(e){
    this.setData({
      addText:e.detail.value
    })

  },
 changeTodo: function (event) {
  const index =
  event.currentTarget.dataset.item;
const temp = this.data.lists;
console.log(index)
// console.log(event)
temp.forEach((item, i) => {
  // console.log(item, i);
  if (i == index) {
    if (item.status == '0') {
      item.status = '1'
      wx.showToast({
        title: '已完成任务',
        icon: 'success',
        duration: 1000
      })
    } else {
      item.status = '0'
      wx.showToast({
        title: '任务重做',
        icon: 'success',
        duration: 1000
      })
    }
   
  }

})
this.setData({
  lists: temp,
})
// 当前点击条目的status success 
// 数据 lists 跟当前条目相关的这一条数据
// 将status 值更新为 1
// index ? 

},

 })



