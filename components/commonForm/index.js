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
        data: {}
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
        }
    }
});
