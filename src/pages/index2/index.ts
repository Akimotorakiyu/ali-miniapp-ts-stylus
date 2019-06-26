let app = getApp()

Page({
  data(){
    return {
      items:[{
        photo:"https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png",
        title:"莫甘娜",
        desc:"手机:18817832004",
      },{
        photo:"https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png",
        title:"堕天使",
        desc:"手机:18817832004",
      }]
    }
  },
  onItemClick(ev) {
   console.log("测试传函数进去")
  },

});

export { }