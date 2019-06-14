let app = getApp();
Page({
    data() {
        return {
            data: {},
            form: [{
                    type: "text",
                    mode: "",
                    name: "text",
                    text: "文字",
                    icon: ""
                }, {
                    type: "input",
                    mode: "",
                    name: "input",
                    text: "输入",
                    icon: ""
                },
                {
                    type: "textarea",
                    mode: "",
                    name: "textarea",
                    text: "文本域",
                    icon: ""
                },
                {
                    type: "picker",
                    mode: "",
                    name: "picker",
                    text: "选择器",
                    icon: ""
                },
                {
                    type: "date",
                    mode: "",
                    name: "date",
                    text: "日期",
                    icon: ""
                },
                {
                    type: "switch",
                    mode: "",
                    name: "switch",
                    text: "switch",
                    icon: ""
                },
                {
                    type: "upload",
                    mode: "",
                    name: "upload",
                    text: "上传",
                    icon: ""
                }]
        };
    },
    change(data) {
        console.log(data);
        this.setData({
            [`data.${data.name}`]: data.value
        });
    },
});
