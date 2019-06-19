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
        title: ""
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {}
});
