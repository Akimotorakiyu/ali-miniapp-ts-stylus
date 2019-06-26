let app = getApp()

Page({
  data() {
    return {
      data: {
        input: "我是厨师值哦",
        textarea: "我是谁？",
        switch: true,
      },
      form: [{
        type: "text",
        mode: "",
        name: "text",
        text: "文字",
        icon: ""
      },

      {
        type: "input",
        mode: "",
        name: "input",
        text: "输入",
        icon: ""
      },
      {
        type: "input",
        mode: "",
        name: "password",
        text: "密码",
        icon: "",
        password: true
      },

      {
        type: "input",
        mode: "",
        name: "password",
        text: "数字",
        icon: "",
        inputType: "digit"
      },
      {
        type: "textarea",
        mode: "",
        name: "textarea",
        text: "文本域",
        icon: ""
      },
      {
        type: "picker",
        mode: "",
        name: "picker",
        text: "选择器",
        icon: ""
      },
      {
        type: "picker",
        mode: "",
        name: "picker2",
        text: "选择器2",
        label: "label",
        icon: ""
      },
      {
        type: "date",
        mode: "",
        name: "date",
        format: "",
        text: "日期",
        icon: ""
      },
      {
        type: "switch",
        mode: "",
        name: "switch",
        text: "开关",
        icon: ""
      },
      {
        type: "silder",
        mode: "",
        name: "silder",
        text: "滑块",
        step: 4,
        min: 0,
        max: 100,
        icon: ""
      }],
      selection: {
        picker: ["picker-1", "picker-2", "picker-3"],
        picker2: [{ label: "picker-1" }, { label: "picker-2" }, { label: "picker-3" }],
      },
      TabCur: 0,
      tabNav: ['test1', 'test2', 'test3'],
    }
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  change(data) {
    console.log(data)

    this.setData({
      [`data.${data.name}`]: data.value
    })
  },

});

export { }