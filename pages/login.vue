<script setup lang="ts">
import { loginStore } from 'composables/loginStore.client';

    const loginStore=useLoginStore();
    const loginState=loginStore.state;
    
    
    const loginStart=ref(false);
    const login=async (id:string,password:string)=>{
        loginStart.value=true;
        useAuthFetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                password: password,
                token:"AKOAAAAAAAAAAAAAAAAAAAA",
                name:"test",
                role:"Employee"
            })
        }).then(({ data, error }) => {
            if(data.value){
                const json=data.value as loginStore;
                console.log(json);
                loginStore.setLogin(json.name,json.token,json.role);
                let redirectUri=useRoute().redirectedFrom?.path || '/';
                redirectUri=redirectUri=="/logout"?"/":redirectUri;
                console.log("Will redirect to "+redirectUri);
                //get back uri
                useRouter().push(redirectUri);
                
            }else{
                console.log(error.value);
            }
        })
        
    }
    const id=ref("");
    const password=ref("");

</script>
<template>
    <div v-if="!loginStart">
        <div><label>ID</label><input type="text" v-model="id"/></div>
        <div><label>password</label><input type="text" v-model="password"/></div>
        <button @click="login(id,password)">Login</button>
        <div v-if="$route.query.message">
            {{ $route.query.message }}
        </div>
    </div>

    <div v-else-if="loginState.isLogin">
        <h1>Login</h1>
        <p>Logged in: {{loginState.isLogin}}</p>
        <p>Username: {{loginState.name}}</p>
        <p>Token: {{loginState.token}}</p>
    </div>

    <div v-else>
        Loading ...
    </div>
</template>