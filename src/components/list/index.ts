Component({
    mixins: [],
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
      
    },
    didUpdate() {
        
    },
    didUnmount() {

    }
    ,
    methods: {

    }
})