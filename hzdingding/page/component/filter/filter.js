Page({
	data: {
        listdata:[
            {
                selectedLables: ',疾病医疗,',
                tags: [
                    {
                        label: '意外医疗',
                        selected: false,
                        onChange: 'onTagChange1',
                    },
                    {
                        label: '疾病医疗',
                        selected: true,
                        onChange: 'onTagChange2',
                    },
                    {
                        label: '疾病住院',
                        selected: false,
                        onChange: 'onTagChange3',
                    },
                ]
            }
        ],   
    },
    onTagChange1(e) {
        var studentArray = [
            {"name":"小明","gender":"男","subject":['语文','数学'],"score":85},
            {"name":"小刚","gender":"男","subject":['英语','数学'],"score":90},
            {"name":"小红","gender":"女","subject":['语文','英语'],"score":72},
            {"name":"小方","gender":"女","subject":['语文','历史'],"score":63},
            {"name":"小王","gender":"男","subject":['物理','化学'],"score":89}
        ];
        console.log(studentArray.filter(item => item.name.indexOf("小刚")))
        this.onTagChange(e.currentTarget.dataset.selected, 0);
    },
    onTagChange2(e) {
        this.onTagChange(e.currentTarget.dataset.selected, 1);
    },
    onTagChange3(e) {
        this.onTagChange(e.currentTarget.dataset.selected, 2);
    },
    onTagChange(selected, index) {
        const tempTag = [].concat(this.data.listdata[0].tags);
        tempTag[index].selected = !selected;
		const labels = tempTag.map((item) => item.selected ? item.label : '').join(',');
        this.setData({
            "listdata[0].tags": tempTag,
            selectedLables: labels,
        });
    }
})
