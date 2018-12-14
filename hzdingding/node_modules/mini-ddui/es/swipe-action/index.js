Component({
  data: {
    X: null,
    leftPos: 0,
    swiping: false
  },
  props: {
    className: '',
    right: [],
    restore: false,
    index: null
  },
  didUpdate: function didUpdate(prevProps, prevData) {
    var restore = this.props.restore;

    if (restore === true) {
      this.setData({
        leftPos: 0,
        swiping: false
      });
    }
  },

  methods: {
    onSwipeTap: function onSwipeTap(e) {
      if (!this.data.swiping) {
        this.setData({
          leftPos: 0,
          swiping: false
        });
      }
    },
    onSwipeStart: function onSwipeStart(e) {
      this.setData({
        X: e.touches[0].pageX
      });

      var _props = this.props,
          index = _props.index,
          onSwipeStart = _props.onSwipeStart;

      if (onSwipeStart) {
        onSwipeStart({ index: index });
      }
    },
    onSwipeMove: function onSwipeMove(e) {
      var leftPos = this.data.leftPos;
      // 滑动距离

      var direction = e.touches[0].pageX - this.data.X;
      var newLeftPos = leftPos;
      // 左划
      if (direction < 0) {
        newLeftPos = Math.max(direction, -this.props.right.length * 60);
        // 右划
      } else {
        newLeftPos = 0;
      }

      this.setData({
        leftPos: newLeftPos,
        swiping: direction < 0
      });
    },
    onSwipeEnd: function onSwipeEnd(e) {
      var leftPos = this.data.leftPos;

      var direction = e.changedTouches[0].pageX - this.data.X;
      var newLeftPos = leftPos;
      if (direction < 0) {
        if (Math.abs(direction + leftPos) > this.props.right.length * 60 * 0.7) {
          newLeftPos = -this.props.right.length * 60;
        } else {
          newLeftPos = 0;
        }
      }
      this.setData({
        leftPos: newLeftPos,
        swiping: false,
        X: null
      });
    },
    onItemClick: function onItemClick(e) {
      var _this = this;

      var onRightItemClick = this.props.onRightItemClick;

      if (onRightItemClick) {
        var index = e.target.dataset.index;
        onRightItemClick({
          index: index,
          extra: this.props.extra,
          detail: this.props.right[index]
        });
      }

      if (!this.data.swiping) {
        setTimeout(function () {
          _this.setData({
            leftPos: 0,
            swiping: false
          });
        }, 300);
      }
    }
  }
});