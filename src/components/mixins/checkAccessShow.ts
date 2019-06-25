export default {
    data: function () {
        return {
            show:true
        }
    },
    methods:{
        checkAccessShow(){
            if (this.props.accessControl) {
                let show=(this.props.items as [{accessId:string}]).some(ele => {
                    
                    if (ele.accessId) {
                        
                        return this.props.access[ele.accessId]?true:false
                    } else {
                        return true
                    }
                })
                this.setData({
                    show
                })
            }
        }
    }
}