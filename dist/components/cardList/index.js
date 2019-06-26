import mixins_checkAccessShow from "../mixins/commonDeal";
Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {};
    },
    props: {
        items: [],
        onMulitSelect: undefined,
        accessControl: false,
        access: {},
        name: ""
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
        mulitSelect(event) {
            if (this.props.onMulitSelect) {
                let temp = event.target.dataset;
                temp.selected = event.detail.value;
                temp.name = this.props.name;
                this.props.onMulitSelect(temp);
            }
            else {
                console.log("选择", event);
            }
        }
    }
});
