new Page({
    data: {},
    onItemClick: function (ev) {
        my.alert({
            title: "aaaa",
            content: ev.detail.index,
        });
    },
});
