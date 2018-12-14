Page({
    data: {
        right1: [{ 'type': 'delete', 'text': '删除' }],
        infolistData: [
            {
                title: '2018年十一高速免费通行期间道路通阻信息',
                brief: '消息内容消息内容消息内容',
                arrow: false,
                align: 'top',
                extra: '10:45',
                //thumb: '../../../image/ant.png',
                index: 0,
                person: "张三",
                status: false
            },
            {
                title: '双行列表',
                brief: '描述信息',
                arrow: false,
                align: 'top',
                extra: '10:45',
                //thumb: '../../../image/ant.png',
                index: 1,
                person: "李四",
                status: true
            },
            {
                title: '双行列表',
                brief: '描述信息',
                arrow: false,
                align: 'top',
                extra: '10:45',
                //thumb: '../../../image/ant.png',
                index: 2,
                person: "王五",
                status: false
            },
        ]
    },
    onItemTap(e) {
        const curIndex = e.currentTarget.dataset.index;
        const activeItem = this.data.infolistData[curIndex];
        dd.navigateTo({
            url: './infoDetail/infoDetail',
        });
    },
    onPullDownRefresh() {
        console.log(1);
    },
    touchStart(e) {
        console.log(e);
    }
})