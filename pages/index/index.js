//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/banner_01.jpg',
      '/images/banner_02.jpg',
      '/images/banner_03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    list: [
      {
        title: '1',
        description: 'description1',
        logo: '/images/pro_01.jpg'
      }, {
        title: '2',
        description: 'description2\ndescription2',
        logo: '/images/pro_02.jpg'
      }, {
        title: '3',
        description: 'description3',
        logo: '/images/pro_03.jpg'
      },
      {
        title: '1',
        description: 'description1',
        logo: '/images/pro_01.jpg'
      }, {
        title: '2',
        description: 'description2\ndescription2',
        logo: '/images/pro_02.jpg'
      }, {
        title: '3',
        description: 'description3',
        logo: '/images/pro_03.jpg'
      }
    ]
  },
  //事件处理函数
  onLoad: function () {
    
  },
  goDetail(e) {
    var title = e.currentTarget.dataset.title
    wx.setStorageSync('title', title)
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title
    })
  }
})
