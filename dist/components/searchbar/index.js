Component({
    mixins: [],
    data: function () {
        return {};
    },
    props: {
        onChange(info) {
            console.log("inputChange", info);
        },
        value: "",
        name: "",
        onSearch() {
            console.log("search");
        },
        data: {},
        items: [{
                title: "items1",
                type: "default",
                name: "picker"
            }, {
                title: "items2",
                type: "default",
                name: "picker2",
                label: "label",
            }, {
                title: "items3",
                type: "default",
                name: "picker"
            }, {
                title: "items4",
                type: "default",
                name: "picker2",
                label: "label",
            }],
        selection: {}
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        onblur(event) {
            console.log(event);
            this.props.onChange({
                name: event.target.dataset.name,
                value: event.detail.value || ""
            });
        },
        select(event) {
            console.log(event);
            let items = event.target.dataset.label ? this.props.selection[event.target.dataset.name].map((ele) => (ele[event.target.dataset.label])) : this.props.selection[event.target.dataset.name];
            my.showActionSheet({
                title: '请选择',
                items: items || [],
                success: (res) => {
                    if (res.index >= 0) {
                        this.props.onChange({
                            name: event.target.dataset.name,
                            value: this.props.selection[event.target.dataset.name][res.index]
                        });
                    }
                    else {
                        this.props.onChange({
                            name: event.target.dataset.name,
                            value: null
                        });
                    }
                },
            });
        },
    }
});
