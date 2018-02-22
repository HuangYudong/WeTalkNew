// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TitleList: {},
    news: ['第1行信息', '第2行信息', '第3行信息'],
    ye:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.mRequest();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.mRequest()
    this.setData({ye:2})
    console.log("开始刷新")
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    this.setData({
      ye: ++this.data.ye
    })
    console.log(this.data.ye);
    wx.request({
      url: 'localhost:8089/public/JsonTest.json',//'http://sliencezebar.top/public/JsonTest.json', //360新闻接口
      data: {
        pageToken: that.data.ye
      },
      success: function (res) {
        //console.log(res.data)
        that.setData({ TitleList: that.data.TitleList.concat(res.data.data) })
       // that.setData({ TitleList:res.data.data })

      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*
  * 连接服务器求资源函数
  */
  mRequest:function()
{
    var that = this;
    wx.request({
      url: 'http://sliencezebar.top/public/JsonTest.json', //360新闻接口
      data: {

      },
      success: function (res) {
        //console.log(res.data)
        that.setData({ TitleList: res.data.data })

      }
    })
}
})
