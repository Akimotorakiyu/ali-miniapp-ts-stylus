export default {
    data: function () {
        return {
            show: true
        };
    },
    props: {
        onItemClick: undefined,
    },
    methods: {
        onItemClick(event) {
            if (this.props.onItemClick) {
                this.props.onItemClick(event.target.dataset);
            }
            else if (event.target.dataset.data.path) {
                my.navigateTo({
                    url: event.target.dataset.data.path,
                    fail: () => {
                        console.error("跳转失败");
                    }
                });
            }
            else {
                console.log("点击", event.target.dataset);
            }
        },
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
        }
    }
};
