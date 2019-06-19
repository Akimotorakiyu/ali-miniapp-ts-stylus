let app = getApp();
Page({
    data() {
        return {
            menuList: [{
                    type: "info",
                    title: "Info",
                    info: "我是信息"
                }, {
                    type: "slot",
                    title: "slot1",
                    info: "我是slot1",
                    slotName: "slot1"
                }, {
                    type: "slot",
                    title: "slot2",
                    info: "我是slot2",
                    slotName: "slot2"
                }, {
                    type: "navigator",
                    title: "Info",
                    info: "我是信息",
                    path: "./index",
                }, {
                    type: "tag",
                    title: "Info",
                    info: [{ text: "Beta", class: "bg-orange light" }, { text: "0.0.1", class: "bg-olive light" }],
                }]
        };
    },
});
