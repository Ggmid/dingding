const baseUrl = 'http://share.vaiwan.com:8081'

const showMsg = function(Icon, msg) {
  dd.showToast({
    type: Icon,
    content: msg,
    duration: 1300
  });
};

const getUserInfo = ()=> {
  dd.getAuthCode({
    scopes: 'auth_user',
    success: ({ authCode }) => {
      dd.setStorage({
        key: 'AUTHCODE',
        data: {
          cityName: authCode
        },
        success: function() {
          //dd.alert({content: '写入成功'});
        }
      });
    },
  });
}

const showLoading = function() {
  dd.showLoading({
    content: '正在加载...',
    delay: 0
  })
}

module.exports = {
  baseUrl: baseUrl,
  showMsg: showMsg,
  showLoading: showLoading,
  getUserInfo: getUserInfo
}