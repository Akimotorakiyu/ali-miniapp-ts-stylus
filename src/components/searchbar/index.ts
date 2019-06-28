Component({
    mixins: [],
    data: function () {
        return {
        }
    },
    props: {
        onChange(info) {
            console.log("inputChange",info)
        },
        value:"",
        name:"",
        onSearch(){
            console.log("search")
        }
    },
    didMount() {
      
    },
    didUpdate() {
        
    },
    didUnmount() {

    }
    ,
    methods: {
        onblur(event: tinyapp.ICustomEvent) {
            console.log(event)
            this.props.onChange({
                name: event.target.dataset.name,
                value: event.detail.value||""
            })
        },
        onSearch(){
            this.props.onSearch()
        }
    }
})