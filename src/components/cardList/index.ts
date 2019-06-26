import mixins_checkAccessShow from "../mixins/commonDeal"

Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {
        }
    },
    props: {
        items: [],
        onMulitSelect:undefined,
        accessControl: false,
        access: {},
        title: "",
        name:""
    },
    didMount() {
        this.checkAccessShow()
    },
    didUpdate() {
        this.checkAccessShow()

    },
    didUnmount() {

    }
    ,
    methods: {
        mulitSelect(event: tinyapp.ICustomEvent){
            if (this.props.onMulitSelect) {
                let temp=event.target.dataset as {index:number,data:any,[props :string]:any}
                temp.selected=(event.detail as {value:boolean}).value;
                temp.name=this.props.name
                this.props.onMulitSelect(temp);
            }
            else {
                console.log("选择", event);
            }

        }
    }
})