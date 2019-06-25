let app = getApp()

Page({
  data() {
    return {
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
      items: [{
        icon: 'cuIcon-home text-green',
        title: '报表',
        accessId: "accessId0",
        path: "./index",
        badge:1
      },
      {
        icon: 'cuIcon-light text-blue',
        title: '项目记录',
        accessId: "accessId1",
        path: "./index",
        badge:2
      },
      {
        icon: 'cuIcon-record text-olive',
        title: '项目记录',
        accessId: "accessId2",
        path: "./index",
        badge:3
      },
      {
        icon: 'cuIcon-like text-orange',
        title: '项目记录',
        accessId: "accessId3",
        path: "./index",
        badge:4
      },
      {
        icon: 'cuIcon-goods text-cyan',
        title: '项目记录',
        accessId: "accessId4",
        path: "./index",
        badge:5
      },
      {
        icon: 'cuIcon-shop text-glod',
        title: '项目记录',
        accessId: "accessId5",
        path: "./index"
      },
      {
        icon: 'cuIcon-emoji text-yellow',
        title: '项目记录',
        accessId: "accessId6",
        path: "./index"
      },
      {
        icon: 'cuIcon-taxi text-mauve',
        title: '项目记录',
        accessId: "accessId7",
        path: "./index"
      }],
      access: {
        accessId1: true,
        accessId3: true,
        accessId5: true,
        accessId7: true,
      },
      
    }
  },
  onItemClick(info:{index:number,data:any}){
    console.log(info)
  }
});

export { }