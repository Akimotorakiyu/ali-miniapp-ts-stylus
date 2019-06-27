let app = getApp()

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
      },
      modal: {
        show: false,
        type: "bottomModal",
        name: "modal"
      },
      modal1: {
        show: false,
        type: "drawer-modal-left",
        name: "modal1"
      },
      modal2: {
        show: false,
        type: "drawer-modal-right",
        name: "modal2"
      },
      modal3:{
        show: false,
        type: "topModal",
        name: "modal3"
      }
    }
  },
  onItemClick(info: { index: number, data: any }) {
    console.log(info)
  },
  showModal(show: { name: string, show: boolean }) {

    this.setData({
      [`${show.name}.show`]: show.show
    })
  }
});

export { }