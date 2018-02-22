// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    nickName:'Name',
    avatarUrl: '../images/ICOs/Ask.png',
    userInfo: {},
    myProfile: [{ "desc": "我的T币", "id": "mTCoins" }, { "desc": "我问", "id": "mAsk" }, { "desc": "我听", "id": "mListen" }, { "desc": "帮助", "id": "help" }, { "desc": "结算说明", "id": "blanceExplain" }, { "desc": "关于", "id": "about" }],
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShow: function () {
    console.info("show")
  },
  loadProfile: function (e) {
    console.log(e.target)
  }
,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
        //console.log(that.data.nickName);
      },
      
    }),


    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          console.log('获取用户登成功')

          wx.request({
            url: 'http://sliencezebar.top/api/user',
            data: {
              code: res.code
            },
            success:function(){
              console.log("访问服务器成功提交数据为："+res.code);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
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
