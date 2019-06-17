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
            console.log("按下按钮");
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('foo');
                }, 3000);
            });
        },
        text: "按钮",
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
        }
    }
});
