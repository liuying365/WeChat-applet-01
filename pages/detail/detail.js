// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this)
    this.data.title = wx.getStorageSync('title')
    console.log(wx.getStorageSync('title'))
    // const id = options.title
  },

})