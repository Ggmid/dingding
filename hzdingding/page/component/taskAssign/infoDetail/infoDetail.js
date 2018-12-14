Page({
    data: {
        windowHeight:0,
        values: [ {value:"agree",name:'同意'}, {value:"refuse",name:'拒绝'}, {value:"transfer",name:'转交'}, {value:"comment",name:'评论'}],
        processData: [
            {
                title: '张三',
                extra: '10:45',
                index: 0,
                person: "张三",
                status: false,
                approveStatus: '发起申请'
            },
            {
                title: '李四',
                arrow: false,
                align: 'middle',
                extra: '10:45',
                index: 1,
                person: "李四",
                status: false,
                approveStatus: '发起申请'
            },
            {
                title: '王五',
                align: 'top',
                extra: '10:45',
                index: 2,
                person: "王五",
                status: false,
                approveStatus: '发起申请'
            }
        ]
    },
    onItemTap() {

    },
    onItemClick(e) {
        dd.navigateTo({
            url: '../../recevieDetail/recevieDetail?id=1',
        });
    },
    onLoad(){
        let app = getApp();
        console.log(app);
        this.setData({
            windowHeight:app.windowHeight
        })
    },
    processTap(event){
        const btnName = event.currentTarget.dataset.btn;
        dd.alert({content:btnName})
        switch(btnName){
            case "agree":
            break;
            case "refuse":
            break;
            case "transfer":
            break;
            case "comment":
            break;
            default:
            break;
        }    
    }
})