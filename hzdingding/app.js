const util = require('./page/config/config');

App({
  onLaunch(options) {
    util.getUserInfo();
    console.log('App Launch', options);
    console.log('getSystemInfoSync', dd.getSystemInfoSync());
    console.log('SDKVersion', dd.SDKVersion);
    let windowHeight = dd.getSystemInfoSync().windowHeight;
    this.globalData.option = options;
    this.globalData.windowHeight = windowHeight;
    //console.log(this.globalData)
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
    option: null,
    windowHeight:0
  },
});
