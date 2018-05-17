const app = getApp()
// import{
//   API_BASE
// }from "../../config/api"

Page({
  data: {
    entities: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 3,
    total: 0

  },
  onPullDownRefresh() {
    // console.log('下拉了');
    // setTimeout(() => {
    //   wx.stopPullDownRefresh();
    // }, 2000)
    wx.request({
      url: "https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a52/students/xxx",
      success: (res) => {
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1,
          totalPage: res.data.data.totalPages,
          total: res.data.data.total
        })
      }
    })
  },
  onLoad() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a52/students/xxx',
      success: (res) => {
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1
        })
      }
    })
  }
  ,
  onReachBottom() {
    let { currentPage, totalPages, isLoading } = this.data
    console.log(currentPage, totalPages, isLoading);

    if (currentPage >= totalPages || isLoading) {
      return;
    }
    currentPage += 1;
    this.setData({
      isLoading: true,

    })

    const url = `${'https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a52/students/xxx'}/${currentPage}`;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a52/students/xxx',
      success: (res) => {
        const entities = [
          ...this.data.entities,
          ...res.data.data.articles
        ];
        this.setData({
          entities,
          isLoading: false,
          currentPage

        })
      }
    })

    // console.log('到底了')
    //请求下一页的数据
  }

})
