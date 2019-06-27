Component({
    mixins: [],
    data: function () {
        return {};
    },
    props: {
        onShowModal() {
            console.log("hide");
        },
        item: {
            name: "modal",
            show: true,
            type: "bottomModal"
        }
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        onShowModal() {
            this.props.onShowModal({
                name: this.props.item.name,
                show: false
            });
        },
        catchTap() {
        }
    }
});
