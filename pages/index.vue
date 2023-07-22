<script setup lang="ts">
// import { useCounterStore } from '../composables/loginStore';
// import { useLoginStore } from '../composables/loginStore';
    const loginStore=useLoginStore();
    console.log(loginStore);
    const loginState=loginStore.state;

    // const counterStore = useCounterStore();
// const { state } = counterStore;
</script>

<template>
    <div>
        <h1>Index</h1>
        <p>Logged in: {{loginState.isLogin}}</p>
        <p>Username: {{loginState.name}}</p>
        <p>Token: {{loginState.token}}</p>
        <p>Role: {{loginState.role}}</p>
    </div>

    <!-- <div> -->
    <!-- <div>{{ state.count }}</div>
    <button @click="counterStore.countUp">countUp</button>

    <button @click="counterStore.setCount(0)">reset</button>
  </div> -->
</template>
        