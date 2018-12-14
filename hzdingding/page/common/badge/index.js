Component({
  data:{

  },
  props: {
    value:"",
    size:"normal",
    color:"red",
    index:null,
    isdelete:false,
    classname:null,
    data:{},
    onDeleteHandle:()=>{}
  },
  methods: {
    deletes: function deletes(ev) {
      let _props = this.props;
      console.log(_props);
      let onDeleteHandle = _props.onDeleteHandle;
      if (onDeleteHandle) {
        onDeleteHandle(_props);
      }
    }
  }
});