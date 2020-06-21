Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    msg: "获取短信验证码",
    sendInfo: '',
    timer: 60,
    showMsg: true,
    userMessage: ''
  },
  getMsg: function () {
    var _this = this
    this.setData({
      showMsg: false
    })
    var tim = setInterval(function () {
      _this.data.timer -= 1
      _this.setData({
        timer: _this.data.timer
      })
      _this.setData({
        msg: "重新发送(" + _this.data.timer + ")"
      })
      if (_this.data.timer === 0) {
        _this.setData({
          msg: "发送验证码"
        })
        _this.setData({
          showMsg: true
        })
        _this.setData({
          timer: 60
        })
        clearInterval(tim)
      }
    }, 1000)
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
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