import { Ref } from "nuxt/dist/app/compat/capi";


export type loginStore = {
    isLogin: boolean;
    name:string;
    token:string;
    role:'Employee'|'user';
};


export const useLoginStore = ()=>{
    let data=null;
    let jdata: loginStore | null=null;
    let state=null;
    if(typeof window!='undefined'&&window.localStorage){
      data=localStorage.getItem("loginStore");
      jdata=data?JSON.parse(data):null;
      // console.log("localStorage read",jdata);
      state=useState("loginStore",()=>({
          isLogin:jdata?.isLogin||false,
          name:jdata?.name||'',
          token:jdata?.token||'',
          role:jdata?.role||''
      }));
    }else{
      console.log("Serverside");
      state=useState("loginStore",()=>({
          isLogin:false,
          name:"",
          token:"",
          role:""
      }));
    }


    // console.log("loginStore",state.value);
    
    const setLogin=(state:Ref<loginStore>)=>((name:string,token:string,role:'Employee'|'user',)=>{
        // console.log("setLogin",name,token);
        state.value.isLogin=true;
        state.value.name=name;
        state.value.token=token;
        state.value.role=role;
        localStorage.setItem("loginStore",JSON.stringify(state.value));
    })
    
    const setLogout=(state:Ref<loginStore>)=>(()=>{
        // console.log("setLogout");
        state.value.isLogin=false;
        state.value.name="";
        state.value.token="";
        localStorage.removeItem("loginStore");
    })
    return {
        state:readonly(state),
        setLogin:setLogin(state),
        setLogout:setLogout(state),
    }
}
