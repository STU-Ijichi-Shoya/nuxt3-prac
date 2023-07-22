export default defineNuxtRouteMiddleware((to,from)=>{
    const requiredRoles=to.meta?.roles as string[]|undefined;

    const loginState=useLoginStore().state.value;
    const isLogin=loginState.isLogin;
    const role=loginState.role;

    console.log("loginState",loginState);
    console.log("isLogin",isLogin);
    console.log("requiredRoles",requiredRoles);



    
    if(!isLogin){
        return navigateTo({
            path:"/login",
            query:{
                notloginRedirect:1,
                redirectFrom:to.path,
                message:"ログインが必要です"
            }

        });
    }
    if(!requiredRoles){
        return 
    }
    //roleが指定されていたらrole check
    if(requiredRoles.includes(role)){
        return 
    }
    //権限なしの場合は404
    return navigateTo({
            path:"/404",
    });
    
})