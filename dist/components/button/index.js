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
        confirm: false,
        confirmContent: "是否确认",
        btnClass: "cu-btn round bg-blue",
        value: undefined,
        accessId: "",
        accessControl: false,
        access: {}
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
                await this.props.onTap(this.props.value ? JSON.parse(JSON.stringify(this.props.value)) : undefined);
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
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
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
