// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ye:2,           //用作页面加载
    PersonList:[],  //用作页面数据保存
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
  wx.request({
    url: 'http://sliencezebar.top/public/JsonTest.json',
    success: function(res){
      that.setData({ PersonList: that.data.PersonList.concat(res.data.data)});
      console.log(that.data.PersonList);
    }
  })
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
    var that=this;
    that.mRequest();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that=this;
    ++that.data.ye;
    that.mRequest();
    console.log(that.data.ye);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  mRequest:function(){
    var that =this;
    wx.request({
      url: 'http://120.76.205.241:8000/news/qihoo?kw=%E7%99%BD&site=qq.com&apikey=Pfx1RyWJVRhCoqNacB8ZsuQeoWczVRYsYIq6OS3c35LHIDDRSgVvRpSyNuJGnmq7',
      data:{
        pageToken:that.data.ye
      },
      success: function (res) {
        that.setData({ PersonList: that.data.PersonList.concat(res.data.data) });
        console.log(that.data.PersonList);
      }
    })
  }
})