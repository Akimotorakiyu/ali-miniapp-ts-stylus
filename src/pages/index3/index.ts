let app = getApp()

Page({
  data() {
    return {
      items: [{
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1233661&size=128',
        text: '报表',
        accessId: "accessId0",
        path: "./index",
        badge:1
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210079&size=128',
        text: '项目记录',
        accessId: "accessId1",
        path: "./index",
        badge:2
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210083&size=128',
        text: '项目记录',
        accessId: "accessId2",
        path: "./index",
        badge:3
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210090&size=128',
        text: '项目记录',
        accessId: "accessId3",
        path: "./index",
        badge:4
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210078&size=128',
        text: '项目记录',
        accessId: "accessId4",
        path: "./index",
        badge:5
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210074&size=128',
        text: '项目记录',
        accessId: "accessId5",
        path: "./index"
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210070&size=128',
        text: '项目记录',
        accessId: "accessId6",
        path: "./index"
      },
      {
        icon: 'https://www.easyicon.net/api/resizeApi.php?id=1210087&size=128',
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
    }
  }
});

export { }