const lazyRouter={
    routes:[],
    add(route,name,meta,viewpath){
        this.routes.push({
            path:route,
            name:name,
            meta:meta,
            component:viewpath
        })
    }
}
export default lazyRouter;