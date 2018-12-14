import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 0,
    singleSelect: true
  },
  props: {
    className: '',
    onChange: function onChange() {},
    max: 10000
  },
  didMount: function didMount() {
    var _data = this.data,
        commonProps = _data.commonProps,
        singleSelect = _data.singleSelect;
    var max = this.props.max;

    commonProps.max = max;
    if (commonProps.max === 1) {
      singleSelect = false;
      this.setData({
        singleSelect: singleSelect
      });
    }
  },

  methods: {
    resetFn: function resetFn() {
      var _data2 = this.data,
          items = _data2.items,
          results = _data2.results;

      items.forEach(function (element) {
        element.setData({
          confirmStyle: ''
        });
      });
      results.splice(0, results.length);
    },
    confirmFn: function confirmFn() {
      var onChange = this.props.onChange;
      var results = this.data.results;

      onChange(results);
    }
  }
});