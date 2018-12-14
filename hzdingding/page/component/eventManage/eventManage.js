const util = require('../../config/config');
Page({
  data: {
    personArr: [],
    pickedUsers: [],
    date: {
      label: "事发时间",
      value: "请选择",
      datePick: "datePick",
      require: true
    },
    tabs: [
      { title: '新增事件' },
      { title: '事件列表' }
    ],
    eventType: {
      onChange: "eventTypePickerChange",
      name: "eventType",
      label: "事件类型",
      value: "请选择",
      require: true,
      objectArray: [
        { id: 0, name: 'I级', },
        { id: 1, name: 'II级', },
        { id: 2, name: 'III级', },
        { id: 3, name: 'IV级', },
      ],
      arrIndex: 0
    },
    eventLevel: {
      onChange: "eventLevelPickerChange",
      label: "事件等级",
      value: "请选择",
      name: "eventLevel",
      require: true,
      objectArray: [
        { id: 0, name: '美国', },
        { id: 1, name: '中国', },
        { id: 2, name: '巴西', },
        { id: 3, name: '日本', },
      ],
      arrIndex: 0
    },
    eventlistData:[
        {
          title: '2018年十一高速免费通行期间道路通阻信息的大聚会的感觉啊刚到家啊个',
          brief: '消息内容消息内容消息内容',
          arrow: false,
          align: 'top',
          extra: '10:45',
          //thumb: '../../../image/ant.png',
          index: 0,
          person: "张三",
          status: false
        },
        {
          title: '双行列表',
          brief: '描述信息',
          arrow: false,
          align: 'top',
          extra: '10:45',
          //thumb: '../../../image/ant.png',
          index: 1,
          person: "李四",
          status: true
        },
        {
          title: '双行列表',
          brief: '描述信息',
          arrow: false,
          align: 'top',
          extra: '10:45',
          //thumb: '../../../image/ant.png',
          index: 2,
          person: "王五",
          status: false
        },

    ]},
    eventTypePickerChange(e) {
      const objs = this.data.eventType.objectArray;
      this.setData({
        "eventType.arrIndex": e.detail.value,
        "eventType.value": objs[e.detail.value].name
      });
      //console.log(obj[e.detail.value]);
    },
    eventLevelPickerChange(e) {
      const objs = this.data.eventLevel.objectArray;
      this.setData({
        "eventLevel.arrIndex": e.detail.value,
        "eventLevel.value": objs[e.detail.value].name
      });
    },
    onReady() {
      // 使用 dd.createMapContext 获取 map 上下文
      this.mapCtx = dd.createMapContext('map');
    },
    uploadFile() {

    },
    choosePerson() {
      const self = this;
      dd.complexChoose({
        title: "选取通知人",            //标题
        multiple: true,            //是否多选
        limitTips: "超出了",          //超过限定人数返回提示
        maxUsers: 1000,            //最大可选人数
        pickedUsers: self.data.pickedUsers,            //已选用户
        pickedDepartments: [],          //已选部门
        disabledUsers: [],            //不可选用户
        disabledDepartments: [],        //不可选部门
        requiredUsers: [],            //必选用户（不可取消选中状态）
        requiredDepartments: [],        //必选部门（不可取消选中状态）
        permissionType: "xxx",          //可添加权限校验，选人权限，目前只有GLOBAL这个参数
        responseUserOnly: true,        //返回人，或者返回人和部门
        startWithDepartmentId: 0,   // 0表示从企业最上层开始
        success: function(res) {
          console.log(res);
          const pickuser = res.users.map((item) => {
            return item.userId;
          });
          self.setData({
            personArr: res.users,
            pickedUsers: pickuser
          })
        },
        fail: function(err) {
        }
      })
    },
    formSubmit(e) {
      console.log(e)
    },
    onDeleteHandle(e) {
      this.data.personArr.splice(e.index, 1);
      this.data.pickedUsers.splice(e.index, 1);
      this.setData({
        personArr: this.data.personArr,
        pickedUsers: this.data.pickedUsers
      });
    },
    datePick() {
      let self = this;
      dd.datePicker({
        format: 'yyyy-MM-dd HH:mm',
        currentDate: '',
        success: (res) => {
          this.setData({
            "date.value": res.date
          });
        },
      });
    }
  });