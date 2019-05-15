new App({
    onLaunch: function (options) {
        console.log('App Launch', options);
        console.log('getSystemInfoSync', my.getSystemInfoSync());
        console.log('SDKVersion', my.SDKVersion);
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide');
    },
    globalData: {
        hasLogin: false,
    },
});
