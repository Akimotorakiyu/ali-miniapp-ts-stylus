let app = getApp()

Page({
  data(){
    return {
    }
  },
    onItemClick(ev) {
      my.alert({
          title:"aaaa",
          content:ev.detail.index,
      });
    },
    
  });

  export {}