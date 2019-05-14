declare namespace wefetch{
    function get(url:string):Promise<any>;
    function post(url:string,data:any):Promise<any>;
}

export default  wefetch
