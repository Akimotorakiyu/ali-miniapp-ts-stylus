Component({
    mixins: [],
    data: function () {
        return {
            show: true
        };
    },
    props: {
        onChange() {
            console.log(this.data);
        },
        items: [],
        accessControl: false,
        access: {},
        title: "",
    },
    didMount() {
        this.checkAccessShow();
    },
    didUpdate() {
        this.checkAccessShow();
    },
    didUnmount() {
    },
    methods: {
        checkAccessShow() {
            if (this.props.accessControl) {
                let show = this.props.items.some(ele => {
                    if (ele.accessId) {
                        return this.props.access[ele.accessId] ? true : false;
                    }
                    else {
                        return true;
                    }
                });
                this.setData({
                    show
                });
            }
        },
        onItemClick(event) {
            my.navigateTo({
                url: this.props.items[event.target.dataset.index].path,
                fail: () => {
                    console.error("跳转失败");
                }
            });
        }
    }
});
