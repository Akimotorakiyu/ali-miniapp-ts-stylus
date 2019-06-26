import mixins_checkAccessShow from "../mixins/commonDeal"

Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {
        }
    },
    props: {
        items:[],
        accessControl:false,
        access:{},
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