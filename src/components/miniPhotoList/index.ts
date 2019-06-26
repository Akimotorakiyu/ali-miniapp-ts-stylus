import mixins_checkAccessShow from "../mixins/commonDeal"


Component({
    mixins: [mixins_checkAccessShow],
    data: function () {
        return {
        }
    },
    props: {
        items:[],
    },
    didMount() {
      console.log(this.props)
    },
    didUpdate() {
        
       
    },
    didUnmount() {

    }
    ,
    methods: {
    }
})