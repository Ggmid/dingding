Page({
  data: {
    switch1: true,
  },
  btnClick(e) {
    dd.complexChoose({
      title: "测试标题",            //标题
      multiple: true,            //是否多选
      limitTips: "超出了",          //超过限定人数返回提示
      maxUsers: 1000,            //最大可选人数
      pickedUsers: [],            //已选用户
      pickedDepartments: [],          //已选部门
      disabledUsers: [],            //不可选用户
      disabledDepartments: [],        //不可选部门
      requiredUsers: [],            //必选用户（不可取消选中状态）
      requiredDepartments: [],        //必选部门（不可取消选中状态）
      appId: 158,              //微应用的Id
      permissionType: "xxx",          //可添加权限校验，选人权限，目前只有GLOBAL这个参数
      responseUserOnly: false,        //返回人，或者返回人和部门
      startWithDepartmentId: 0,   // 0表示从企业最上层开始
      success: function(res) {
        
      },
      fail: function(err) {
      }
    })
  },
  gettoken(e){
    const self = this;
    dd.httpRequest({
      url: 'https://oapi.dingtalk.com/gettoken?corpid=dingff5ea30126639fc535c2f4657eb6378f&corpsecret=-0cG5f4yXMEcaQtPFLFh3No1_suLiwxyKM0B5-CYMVIAZrYiwUuvHnDKnAeGrBrm',
      method: 'GET',
      data: {
        
      },
      dataType: 'json',
      success: function(res) {
        //console.log(res.data.access_token);
        self.getnews(res.data.access_token);
      },
      fail: function(res) {
        //console.log(res);
      },
      complete: function(res) {
        //dd.hideLoading();
        //console.log(res);
      }
    });
  },
  getnews(token){
    dd.httpRequest({
      url: 'https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2?access_token='+token,
      method: 'POST',
      data: {
        agent_id: "204434845",
        userid_list: "051723050123352825",
        msg: JSON.stringify({"msgtype": "text", "text": { "content": "消息内容" }})
      },
      dataType: 'json',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        //console.log(res);
      },
      complete: function(res) {
        //dd.hideLoading();
        //console.log(res);
      }
    });

  }
});