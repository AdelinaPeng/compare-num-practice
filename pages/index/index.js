// index.js
Page({
  data:{
    num1: 0,
    num2: 0,
    result: '',
  },
  onLoad(){
    console.log('页面加载 onLoad');
    var app = getApp();
    console.log(app.num)
  },
  onReady(){
    console.log('页面初次渲染完成 onReady');
    // wx.navigateTo({
    //   url: '../about/about?name=Mike&age=18',
    // })
  },
  onShow(){
    console.log('页面显示 onShow');
  },
  onHide(){
    console.log('页面隐藏 onHide');
  },
  onShareAppMessage(){

  },
  onPullDownRefresh(){
    console.log('此时用户下拉触顶','onPullDownRefresh')
  },
  onReachBottom(){
    console.log('此时用户上拉触底','onReachBottom')
  },
  onPageScroll(options){
    console.log('此时用户滚动界面','滚动距离',options.scrollTop,'OnpageScroll')
  },
  compare(e){
    var str = '两数相等';
    if(this.data.num1>this.data.num2){
      str = '第一个数大'
    }else if(this.data.num1<this.data.num2){
      str = '第二个数大'
    }
    console.log('num1',this.data.num1,'num2',this.data.num2)
    this.setData({
      result: str
    })
  },
  num1change:function(e){
    this.num1 = Number(e.detail.value)
    console.log('num1change',e.detail.value)
  },
  num2change:function(e){
    this.num2 = Number(e.detail.value)
    console.log('我被改变了',e.detail.value);
  },
  numchange(e){
    console.log(e)
    let data = {}
    data[e.currentTarget.dataset.id]=Number(e.detail.value);
    this.setData(
      data
    )
    console.log(this.data.num1,this.data.num2)
  },
  formCompare(e){
    console.log(e,'被提交')
    let num1 = Number(e.detail.value.name1);
    let num2 = Number(e.detail.value.name2);
    let str = '两数相等';
    if(num1>num2){
      str = '第1个数大'
    }else if(num1 < num2){
      str = '第2个数大'
    }
    this.setData({
      result:str
    })
  }
})
