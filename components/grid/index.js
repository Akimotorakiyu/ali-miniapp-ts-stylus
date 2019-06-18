Component({
    mixins: [],
    data: function () {
        return {};
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
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
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
