Component({
  props: {
    className: '',
    placeholder: '',
    focus: false
  },
  data: {
    _value: '',
    focus: false
  },
  didMount: function didMount() {
    this.setData({
      _value: this.props.hasOwnProperty('value') ? this.props.value : '',
      focus: this.props.focus
    });
  },
  didUpdate: function didUpdate() {
    if (this.props.hasOwnProperty('value') && this.props.value !== this.data._value) {
      this.setData({
        _value: this.props.value
      });
    }
  },

  methods: {
    handleInput: function handleInput(e) {
      var value = e.detail.value;


      if (!this.props.hasOwnProperty('value')) {
        this.setData({
          _value: value
        });
      }

      if (this.props.onInput) {
        this.props.onInput(value);
      }
    },
    handleClear: function handleClear() {
      this.setData({
        focus: true
      });

      if (!this.props.hasOwnProperty('value')) {
        this.setData({
          _value: ''
        });
      }

      this.doClear();
    },
    doClear: function doClear() {
      if (this.props.onClear) {
        this.props.onClear('');
      }

      if (this.props.onChange) {
        this.props.onChange('');
      }
    },
    handleFocus: function handleFocus() {
      this.setData({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus();
      }
    },
    handleBlur: function handleBlur() {
      this.setData({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur();
      }
    },
    handleCancel: function handleCancel() {
      if (!this.props.hasOwnProperty('value')) {
        this.setData({
          _value: ''
        });
      }

      if (this.props.onCancel) {
        this.props.onCancel();
      } else {
        this.doClear();
      }
    },
    handleConfirm: function handleConfirm(e) {
      var value = e.detail.value;


      if (this.props.onSubmit) {
        this.props.onSubmit(value);
      }
    },
    handleBack: function handleBack(e) {
      if (this.props.onBack) {
        this.props.onBack();
      }
    }
  }
});