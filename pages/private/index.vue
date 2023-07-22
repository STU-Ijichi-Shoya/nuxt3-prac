<template>
    <div>
        <div v-if="pending">Loading...</div>
        <div v-else-if="!error">
            <v-table fixed-header height="60vh">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr>
                    <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr> <tr v-for="item in data" :key="item.id">
                        <!-- <tr> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.body}}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
        <v-alert v-else color="error" title="Connection Error" text="通信に失敗しました">
            <!-- <div>エラーが発生しました。</div> -->
            <!-- <div>{{error.message}}</div> -->
        </v-alert>
    </div>

</template>

<script setup>
    const {data,pending,error}=useFetch("https://jsonplaceholder.typicode.com/posts/1/comments/error")
    definePageMeta({
        middleware:"auth",
        roles:["Employee"]
    })

</script>