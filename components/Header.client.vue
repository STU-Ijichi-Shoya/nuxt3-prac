<script setup>
    const loginStore=useLoginStore();
    console.log(loginStore.state.value);
</script>

<template>
<div class="header">
    <div class="header1">
        <div class="logo">
            <img src="https://img.travel.rakuten.co.jp/share/common/images/travel-logo-pc.png"/>
        </div>
        <div class="welcom">
            <div v-if="loginStore.state.value.isLogin">
                <div class="welcom-item"><NuxtLink to="/private">ようこそ、{{loginStore.state.value.name}}さん</NuxtLink></div>
                <div class="welcom-item"><NuxtLink to="/logout">ログアウト</NuxtLink></div>
            </div>
            <div v-else>
                <div class="welcom-item">ようこそ、ゲストさん</div>
                <div class="welcom-item"><NuxtLink to="/login">ログイン</NuxtLink></div>
            </div>
        </div>
    </div>
    <div class="menu">
        <div class="menu-item">旅行</div>
        <div class="menu-item">ツアー</div>
        <div class="menu-item">レンタカー</div>
        <div class="menu-item">海外</div>
    </div>
</div>

</template>

<style scoped>
.header{
    width:100%;
    height:100px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header1{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo{
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.logo img{
    width: 100%;
    height: 100%;
}
.welcom{
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.welcom-item{
    /* width: 100px; */
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.menu{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.menu-item{
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
