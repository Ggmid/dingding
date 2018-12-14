Page({
  data: {
    tabs: [
      { title: '未接收（3）' },
      { title: '已接收（5）' },
    ],
    receiveData: [
        {
            items: [
                {
                    title: '张三',
                    //extra: '10:45',
                    index:0,
                    person:"张三",
                     brief:"10月28日 10:36",
                    status:false,
                    //approveStatus:'发起申请'
                },
                {
                    title: '李四',
                    arrow: false,
                    align: 'middle',
                     brief:"10月28日 10:36",
                    //extra: '10:45',
                    index:1,
                    person:"李四",
                    status:false,
                    //approveStatus:'发起申请'
                },
                {
                    title: '王五',
                    align: 'top',
                     brief:"10月28日 10:36",
                    //extra: '10:45',
                    index:2,
                    person:"王五",
                    status:false,
                    //approveStatus:'发起申请'
                },
            ],
        },
        {
            onItemTap:"onItemTap2",
            items: [
                {
                    title: '张三',
                    //extra: '10:45',
                    index:0,
                    brief:"10月28日 10:36",
                    person:"张三",
                    status:false,
                    //approveStatus:'发起申请'
                },
                {
                    title: '李四',
                    arrow: false,
                    align: 'middle',
                     brief:"10月28日 10:36",
                    //extra: '10:45',
                    index:1,
                    person:"李四",
                    status:false,
                     brief:"10月28日 10:36",
                    //approveStatus:'发起申请'
                },
                {
                    title: '王五',
                    align: 'top',
                    //extra: '10:45',
                    index:2,
                    person:"王五",
                     brief:"10月28日 10:36",
                    status:false,
                    //approveStatus:'发起申请'
                },
            ],
        }
    ]
  },
  handleTabClick({ index }) {},
  handleTabChange({ index }) {},
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  }
});