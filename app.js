// app.js
// App()只能调用一次
App({
  num: 2023,
  onLaunch(options){
    console.log('onLaunch',options)
  },
  onShow(options){
    console.log('onShow',options);
  },
  onHide(options){
    console.log('onHide',options)
  },
  onError(error){
    console.log('onError',error);
  },
  onPageNotFound(options){
    console.log('onPageNotFound',options);
  }

})
