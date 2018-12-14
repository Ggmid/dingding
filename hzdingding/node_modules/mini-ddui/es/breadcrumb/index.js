Component({
  props: {
    className: '',
    values: [],
    scrollLeft: 9999
  },
  methods: {
    handleItemTap: function handleItemTap(e) {
      var _props = this.props,
          onItemTap = _props.onItemTap,
          values = _props.values;
      var _e$target$dataset = e.target.dataset,
          index = _e$target$dataset.index,
          value = _e$target$dataset.value;

      if (onItemTap && values.length - 1 !== index) {
        onItemTap({
          index: index,
          value: value
        });
      }
    }
  }
});