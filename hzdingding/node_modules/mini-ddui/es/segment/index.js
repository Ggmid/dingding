Component({
  props: {
    className: '',
    selectedIndex: 0,
    values: [],
    disabled: false
  },
  data: {
    current: -1
  },
  didMount: function didMount() {
    this.setData({
      current: parseInt(this.props.selectedIndex, 10)
    });
  },
  didUpdate: function didUpdate(prevProps, prevData) {
    this.setData({
      current: parseInt(this.props.selectedIndex, 10)
    });
  },

  methods: {
    handleItemTap: function handleItemTap(e) {
      var _props = this.props,
          selectedIndex = _props.selectedIndex,
          disabled = _props.disabled,
          onItemTap = _props.onItemTap,
          onChange = _props.onChange;
      var _e$target$dataset = e.target.dataset,
          index = _e$target$dataset.index,
          value = _e$target$dataset.value;
      var current = this.data.current;

      if (disabled) {
        return;
      }
      if (onItemTap) {
        onItemTap({
          index: index,
          value: value
        });
      }
      if (index !== current && onChange) {
        onChange({
          index: index,
          value: value
        });
      }
    }
  }
});