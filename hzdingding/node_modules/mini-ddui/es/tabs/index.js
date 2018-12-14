Component({
  props: {
    className: '',
    tabBarUnderlineColor: '#3296fa', // 选中选项卡下划线颜色
    tabBarActiveTextColor: '#3296fa', // 选中选项卡字体颜色
    tabBarInactiveTextColor: '#191f25', // 未选中选项卡字体颜色
    tabBarBackgroundColor: '#ffffff', // 选项卡背景颜色
    showPlus: false,
    fixed: true
  },
  data: {
    scrollInit: 0,
    current: 0,
    windowWidth: 0,
    tabWidth: 0.25
  },
  didMount: function didMount() {
    var _this = this;

    var tabs = this.props.tabs;

    my.getSystemInfo({
      success: function success(res) {
        _this.setData({
          windowWidth: res.windowWidth,
          tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length
        });
      }
    });
  },

  methods: {
    handleSwiperChange: function handleSwiperChange(e) {
      var current = e.detail.current;

      this.moveScrollBar(current);
      if (this.props.onChange) {
        this.props.onChange({ index: current });
      }
      this.setData({
        current: current
      });
    },
    handleTabClick: function handleTabClick(e) {
      var index = e.target.dataset.index;


      this.moveScrollBar(index);
      if (this.props.onTabClick) {
        this.props.onTabClick({ index: index });
      }
      this.setData({
        current: index
      });
    },
    handlePlusClick: function handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    },
    moveScrollBar: function moveScrollBar(current) {
      var _data = this.data,
          windowWidth = _data.windowWidth,
          tabWidth = _data.tabWidth;

      var scrollInit = current * windowWidth * tabWidth;

      if (current <= 2) {
        scrollInit = 0;
      } else {
        scrollInit = (current - 2) * windowWidth * tabWidth;
      }

      this.setData({
        scrollInit: scrollInit
      });
    }
  }
});