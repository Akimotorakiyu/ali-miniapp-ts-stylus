Component({
    mixins: [],
    data: function () {
        return {
            loading: false,
            disabled: false
        };
    },
    props: {
        onChange(info) {
            console.log("inputChange", info);
        },
        value: "",
        name: "",
        onSearch(data) {
            console.log("search", data);
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('foo');
                }, 3000);
            });
        },
        data: {},
        items: [{
                title: "条件1",
                type: "default",
                name: "picker"
            }, {
                title: "条件2",
                type: "default",
                name: "picker2",
                label: "label",
            }, {
                title: "条件3",
                type: "default",
                name: "picker"
            }, {
                title: "条件4",
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
        async onSearch() {
            try {
                this.setData({
                    loading: true,
                    disabled: true
                });
                await this.props.onSearch(this.props.data && this.props.data[this.props.name] ? JSON.parse(JSON.stringify(this.props.data[this.props.name])) : undefined);
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
