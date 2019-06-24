export default {
    data: function () {
        return {
            show: true
        };
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
        }
    }
};
