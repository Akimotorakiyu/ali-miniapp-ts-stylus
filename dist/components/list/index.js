import mixins_checkAccessShow from "../mixins/checkAccessShow";
Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {};
    },
    props: {
        onItemClick: undefined,
        items: [],
        accessControl: false,
        access: {},
        title: ""
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
        onItemClick(event) {
            if (this.props.onItemClick) {
                this.props.onItemClick(event.target.dataset);
            }
            else {
                my.navigateTo({
                    url: this.props.items[event.target.dataset.index].path,
                    fail: () => {
                        console.error("跳转失败");
                    }
                });
            }
        }
    }
});
