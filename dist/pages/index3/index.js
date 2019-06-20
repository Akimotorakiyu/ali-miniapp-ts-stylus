let app = getApp();
Page({
    data() {
        return {
            items: [{
                    icon: 'cuIcon-home text-green',
                    text: '报表',
                    accessId: "accessId0",
                    path: "./index",
                    badge: 1
                },
                {
                    icon: 'cuIcon-light text-blue',
                    text: '项目记录',
                    accessId: "accessId1",
                    path: "./index",
                    badge: 2
                },
                {
                    icon: 'cuIcon-heart text-olive',
                    text: '项目记录',
                    accessId: "accessId2",
                    path: "./index",
                    badge: 3
                },
                {
                    icon: 'cuIcon-like text-orange',
                    text: '项目记录',
                    accessId: "accessId3",
                    path: "./index",
                    badge: 4
                },
                {
                    icon: 'cuIcon-goods text-cyan',
                    text: '项目记录',
                    accessId: "accessId4",
                    path: "./index",
                    badge: 5
                },
                {
                    icon: 'cuIcon-shop text-glod',
                    text: '项目记录',
                    accessId: "accessId5",
                    path: "./index"
                },
                {
                    icon: 'cuIcon-emoji text-yellow',
                    text: '项目记录',
                    accessId: "accessId6",
                    path: "./index"
                },
                {
                    icon: 'cuIcon-taxi text-mauve',
                    text: '项目记录',
                    accessId: "accessId7",
                    path: "./index"
                }],
            access: {
                accessId1: true,
                accessId3: true,
                accessId5: true,
                accessId7: true,
            }
        };
    }
});
