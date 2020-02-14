import router from '../router/index';

let Storage = window.localStorage;

router.beforeEach((to,from,next) => {
    if(to.path == "/Login"){
       next()
    }else{
        if(JSON.parse(Storage.getItem('SaveAccount'))){
            next()
        }else{
            next({
                path:"/Login"
            })
        }
    }
})