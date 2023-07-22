const loginNeeded=[{path:"/private.*",roles:["user"]},{path:"/admin/.*",roles:["user"]}].map(o=>{return {reg : new RegExp(o.path),path:o.path,roles:o.roles}});
// import { useLoginStore } from "../composables/loginStore";
export default defineNuxtRouteMiddleware(to=>{
    const uri=to.path.replace(/\/$/,"");;
    console.log("uri",uri);
    // remove last slash
    const isNeedLogin=loginNeeded.find(o=>o.reg.test(uri))
    if(isNeedLogin!=undefined){
        const loginStore=useLoginStore();
        const isLogin=loginStore.state.value.isLogin;
        //role check
        const isRoleMatch=isNeedLogin.roles.includes(loginStore.state.value.role);
        console.log("isLogin",isLogin);
        console.log("isRoleMatch",isRoleMatch);

        if(!isLogin||!isRoleMatch){
            return navigateTo({
                path:"/login",
                query:{
                    notloginRedirect:1,
                    redirectFrom:uri,
                    message:"ログインが必要です"
                }

            });
        }
    }
    
})


// export default function ({ store, redirect, route }) {
//     // If the user is not authenticated
//     if (!store.state.authenticated) {
//         return redirect('/login')
//     }
// }