// pages/listen/listen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ye: 2,
      QuestionList:[]        //   问题列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.mRequest()
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
  var that =this;
   that.mRequest();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   var that  =this;
   ++that.data.ye;
   that.mRequest();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 点击播放录音函数
   */
  playVoice:function(){
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
          }
        })
      }
    });
   
   // 定时停止函数
    setTimeout(function () { wx.stopRecord(); }, 10000);
  },

  /**
   * 获取列表Json文件函数
   */
  mRequest: function () {
    var that = this;
    wx.request({
      url: 'http://sliencezebar.top/public/JsonTest.json',
      data: {
        pageToken: that.data.ye
      },
      success: function (res) {
        that.setData({ QuestionList: that.data.QuestionList.concat(res.data.data) });
        console.log(that.data.QuestionList);
      }
    })
  }
})