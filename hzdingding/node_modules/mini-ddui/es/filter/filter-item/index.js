import lifecycle from '../mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    confirmStyle: ''
  },

  props: {
    className: '',
    item: '',
    id: '',
    value: '',
    selected: false,
    onChange: function onChange() {}
  },

  didMount: function didMount() {
    var _data = this.data,
        confirmStyle = _data.confirmStyle,
        results = _data.results,
        items = _data.items;
    var _props = this.props,
        selected = _props.selected,
        id = _props.id,
        value = _props.value,
        onChange = _props.onChange;

    if (selected) {
      confirmStyle = true;
      results.push({ id: id, value: value });
      items.push(this);
      this.setData({
        confirmStyle: confirmStyle
      });
    }
  },


  methods: {
    handleClick: function handleClick() {
      var _props2 = this.props,
          id = _props2.id,
          value = _props2.value,
          onChange = _props2.onChange;
      var _data2 = this.data,
          confirmStyle = _data2.confirmStyle,
          results = _data2.results,
          items = _data2.items,
          commonProps = _data2.commonProps;

      if (confirmStyle === '' && results.length < commonProps.max) {
        confirmStyle = true;
        results.push({ id: id, value: value });
        items.push(this);
        if (commonProps.max === 1) {
          onChange(results);
        }
      } else {
        confirmStyle = '';
        results.some(function (key, index) {
          if (JSON.stringify(key) === JSON.stringify({ id: id, value: value })) {
            results.splice(index, 1);
          }
        });
      }
      this.setData({
        confirmStyle: confirmStyle
      });
    }
  }
});