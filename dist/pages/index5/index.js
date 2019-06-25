let app = getApp();
Page({
    data() {
        return {
            tabbar: [{
                    type: "default",
                    title: "creative",
                    icon: "cuIcon-creative",
                    path: "./index",
                    accessId: "accessId1"
                }, {
                    type: "slot",
                    title: "slot1",
                    icon: "cuIcon-lightauto text-blue",
                    slotName: "slot1",
                    accessId: "accessId2"
                }, {
                    type: "slot",
                    title: "slot2",
                    icon: "cuIcon-lightauto text-blue",
                    slotName: "slot2",
                    accessId: "accessId3"
                },],
            access: {
                accessId1: true,
                accessId3: true,
                accessId5: true,
                accessId7: true,
            }
        };
    },
    onItemClick(ev) {
        my.alert({
            title: "aaaa",
            content: ev.detail.index,
        });
    },
});
