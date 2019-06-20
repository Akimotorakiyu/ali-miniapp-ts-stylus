let app = getApp()

Page({
  data() {
    return {
      menuList: [{
        type: "info",
        title: "Info",
        info: "我是信息",
        accessId: "accessId1"
      }, {
        type: "slot",
        title: "slot1",
        info: "我是slot1",
        slotName: "slot1",
        accessId: "accessId2"
      }, {
        type: "slot",
        title: "slot2",
        info: "我是slot2",
        icon: 'cuIcon-lightauto text-olive',
        slotName: "slot2",
        accessId: "accessId3"
      }, {
        type: "navigator",
        title: "Info",
        info: "我是信息",
        path: "./index",
        accessId: "accessId4"
      }, {
        type: "tag",
        title: "Info",
        info: [{ text: "Beta", class: "bg-orange light" }, { text: "0.0.1", class: "bg-olive light" }],
        accessId: "accessId5"
      }],
      tabbar:[{
        type: "navigator",
        title:"creative",
        icon:"cuIcon-creative",
        path: "./index",
        accessId: "accessId1"
      },{
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
    }
  },
});


export { }