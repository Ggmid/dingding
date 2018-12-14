Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    onInput: function onInput() {},
    onConfirm: function onConfirm() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  },
  methods: {
    onBlur: function onBlur(e) {
      this.props.onBlur(e);
    },
    onConfirm: function onConfirm(e) {
      this.props.onConfirm(e);
    },
    onFocus: function onFocus(e) {
      this.props.onFocus(e);
    },
    onInput: function onInput(e) {
      this.props.onInput(e);
    },
    onClear: function onClear() {
      console.log(222222);
      my.alert({
        content: 'onClear'
      });
    }
  }
});