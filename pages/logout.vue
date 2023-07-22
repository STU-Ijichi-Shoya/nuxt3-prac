<script setup>

    const loginStore=useLoginStore();
    loginStore.setLogout();

    const timer=ref(10);
    let timerId=setInterval(() => {
        timer.value--;
    }, 1000);
    let timeoutId=setTimeout(() => {
        useRouter().push("/")
    }, 10000);

    onUnmounted(()=>{
        clearInterval(timerId);
        clearTimeout(timeoutId);
    })
</script>

<template>
    <div>
        <div>ログアウトしました。</div>
        {{timer}}秒後にホーム画面に戻ります。
    </div>
</template>
