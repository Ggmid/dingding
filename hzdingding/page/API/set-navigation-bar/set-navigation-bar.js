Page({
  setNaivgationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    dd.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
    })
  },
  resetNavigationBar() {
    dd.setNavigationBar({
      reset: true,
      title: '设置页面导航栏',
    });
  }
})
