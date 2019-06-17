Component({
    mixins: [],
    data: function () {
        return {
            loading: false,
            disabled: false
        };
    },
    props: {
        async onTap() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('foo');
                }, 3000);
            });
        },
        text: "按钮",
        confirm: false,
        confirmContent: "是否确认"
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        async taptap() {
            try {
                if (this.props.confirm) {
                    await this.confirm();
                }
                this.setData({
                    loading: true,
                    disabled: true
                });
                await this.props.onTap();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.setData({
                    loading: false,
                    disabled: false
                });
            }
        },
        confirm() {
            return new Promise((resolve, reject) => {
                my.confirm({
                    title: "提示",
                    content: this.props.confirmContent,
                    success(res) {
                        if (res.confirm) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    },
                    fail(res) {
                        console.log(res);
                        reject();
                    }
                });
            });
        }
    }
});
