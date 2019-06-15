Component({
    mixins: [],
    data() {
        return {};
    },
    props: {
        onChange() {
            console.log(this.data);
        },
        form: [],
        data: {},
        selection: {}
    },
    onInit() {
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
                value: event.detail.value
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
        dataPicker(event) {
            my.datePicker({
                format: event.target.dataset.format || "yyyy-MM-dd",
                success: (res) => {
                    this.props.onChange({
                        name: event.target.dataset.name,
                        value: res.date
                    });
                }
            });
        },
    }
});
