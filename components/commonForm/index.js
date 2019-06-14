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
        value: {}
    },
    onInit() {
    },
    didMount() {
        this.setData({
            formData: this.props.defaultData
        });
    },
    didUpdate() {
        this.props.onChange(this.data.formData);
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
        }
    }
});
