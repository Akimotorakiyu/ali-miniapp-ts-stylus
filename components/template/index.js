Component({
    mixins: [],
    data: {
        formData: {}
    },
    props: {
        onChange() {
            console.log(this.data);
        },
        form: [],
        defaultData: {}
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
    methods: {}
});
