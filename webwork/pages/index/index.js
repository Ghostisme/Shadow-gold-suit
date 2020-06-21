// pages/index/index.js
Page({



  // leftClick: function () {
  //   // wx.switchTab({
  //   //   url: '../promotionandsetup/promotionandsetup'   
  //   // })
  //   wx.redirectTo({
  //     url: '../promotionandsetup/promotionandsetup'
  //   })
  // },
  // rightClick: function () {
  //   wx.switchTab({
  //     url: '../mumber/mumber'   
  //   })
  //   // wx.redirectTo({
  //   //   url: '../my/my'
  //   // })
  // }
  btn1: function() {
    wx.switchTab({
      url: '../login/login'
    })
  },
  btn2: function() {
    wx.switchTab({
      url: '../membershiprecharge/membershiprecharge'
    })
  },
  btn3: function() {
    wx.switchTab({
      url: '../mumber/mumber'
    })
  },
  btn4: function() {
    wx.navigateTo({
      url: '../payroll/payroll'
    })
  },
  btn5: function () {
    wx.navigateTo({
      url: '../payrolldetailed/payrolldetailed'
    })
  },
  btn6: function () {
    wx.navigateTo({
      url: '../contactcustomerservice/contactcustomerservice'
    })
  },
  btn7: function () {
    wx.navigateTo({
      url: '../historyquery/historyquery'
    })
  },
  btn8: function () {
    wx.navigateTo({
      url: '../cashwithdrawal/cashwithdrawal'
    })
  },
  btn9: function () {
    wx.navigateTo({
      url: '../promotionandsetup/promotionandsetup'
    })
  },
  btn10: function () {
    wx.navigateTo({
      url: '../usagerule/usagerule'
    })
  },
  btn11: function () {
    wx.navigateTo({
      url: '../presentationdetails/presentationdetails'
    })
  },
  btn12: function () {
    wx.navigateTo({
      url: '../notificationmessage/notificationmessage'
    })
  },
  btn13: function () {
    wx.navigateTo({
      url: '../notificationdetails/notificationdetails'
    })
  },
  btn14: function () {
    wx.navigateTo({
      url: '../performanceenquiry/performanceenquiry'
    })
  }
})