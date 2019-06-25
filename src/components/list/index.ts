import mixins_checkAccessShow from "../mixins/checkAccessShow"

Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {
        }
    },
    props: {
        onChange() {
            console.log(this.data)
        },
        items:[],
        accessControl:false,
        access:{},
        title:""
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

    }
})