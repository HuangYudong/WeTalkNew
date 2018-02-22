// pages/askCos/askCos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //人物头像
      imageUrl:null,
    //人物姓名
      personName:null,
    //人物介绍
      personIntr:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var  that =this;
    //获取传入的数据（图片的Url）
    that.setData({ imageUrl: options.imageUrl});
    //获取传入的数据（人物的姓名）
    that.setData({ personName: options.personName});
    //获取传入的数据（人物的介绍）
    that.setData({ personIntr: options.personIntr});
    console.log(options.personIntr);
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})