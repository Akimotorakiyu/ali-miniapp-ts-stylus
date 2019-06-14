Component({
    mixins: [],
    data() {
        return {
            formData: {}
        };
    },
    props: {
        onChange() {
            console.log(this.data);
        },
        form: [],
        defaultData: {}
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
    methods: {}
});
