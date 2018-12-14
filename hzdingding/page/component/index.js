import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    items: [
            {
                title: '双行列表',
                brief: '描述信息',
                arrow: false,
                align: 'top',
                extra: '10:45',
                thumb: '../../../image/ant.png',
                index:1
            },
            {
                title: '双行列表',
                brief: '描述信息',
                arrow: false,
                align: 'top',
                extra: '10:45',
                thumb: '../../../image/ant.png',
                index:2
            },
            {
                title: '双行列表',
                brief: '描述信息',
                arrow: false,
                align: 'top',
                extra: '10:45',
                thumb: '../../../image/ant.png',
                index:3
            },
        ],
    ...animModal.data,
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    dailyArr: {
      onItemTap: 'onDailyGridItemTap',
      onChildItemTap: 'onChildItemTap',
      type: 'daily',
      list: [
        {
          icon: '/image/view.png',
          title: '信息通报',
          page: 'infoNotice',
        }, {
          icon: '/image/basic.png',
          title: '任务下发',
          page: 'taskAssign',
        }, {
          icon: '/image/form.png',
          title: '待我审批',
          page: 'filter'
        }, {
          icon: '/image/feedback.png',
          title: '召开会议',
          page: 'meeting'
        },
      ]
    },
    eventArr:{
      onItemTap: 'onEventGridItemTap',
      onChildItemTap: 'onChildItemTap',
      type: 'event',
      list: [
        {
          icon: '/image/view.png',
          title: '事件管理',
          page: 'eventManage'
        }
      ],
    }
  },
  onDailyGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.dailyArr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  onEventGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.eventArr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({
      url: `${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
