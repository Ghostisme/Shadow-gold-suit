//hisoryquerycontent.js
Component({
  data: {
    //定义组件的内部数据 
  },
  properties: {
    //组件的对外属性，主要用于父页面向子组件传值
    lefttext:{
      type:String,
      value:'蒋小查询'
    },
    leftnum: {
      type: Number,
      value: '155****5678'
    },
    rightday: {
      type: String,
      value: '保留7天'
    },
    righttime: {
      type: Date,
      value: '2018-10-26 23:45:12'
    },
    navimg:{
      type:String,
      value: 'image/professional.png'
    }
  },
  created: function () {
    //组件实例进入页面节点树时所触发的生命周期函数 
  },
  ready: function () {
    //组件布局完成后所触发的生命周期函数
  },
  methods: {
    //组件内部的方法
  }
})
