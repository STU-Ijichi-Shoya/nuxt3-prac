<template>
    <div>
        <div>
    <h1>ユーザ登録</h1>
    <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4">
      <v-form @submit.prevent="submit" class="d-flex justify-center align-center justify-center flex-wrap text-center mx-auto px-4">
        <v-row align-content="center">
          <!-- <v-col cols="2" align-self="center" > -->
        <!-- <v-list-subheader>
              ユーザ名
        </v-list-subheader> -->
          <!-- </v-col> -->
          <!-- <v-col cols="10"> -->
            <v-text-field
              v-model="name"
              label="ユーザ名"
              rules="required|max:20"
              :counter="20"

            >
            </v-text-field>
          <!-- </v-col> -->
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-list-subheader>
              メールアドレス
            </v-list-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="email"
              label="メールアドレス"
              type="email"
              rules="required|email"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-btn color="light-blue-accent-4" type="submit" class="mt-4 w-20">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
    </div>

</template>

<script setup>
 const name = ref('')
  const email = ref('')
  const submit = () => {
    // 後ほどバリデーション処理を追記
    console.log(name.value)
  }
    
</script>