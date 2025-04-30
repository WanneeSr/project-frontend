<template>
    <div class="w-[550px] h-[400px] bg-white shadow-lg rounded-lg p-4">
        <div class="flex flex-col justify-center items-center h-full ">
            <div>
                <p>Login</p>
            </div>
            <div class="flex flex-row justify-between items-center  ">
                <div class="w-1/3 h-full flex flex-col justify-center items-center">
                    <div>
                        <p>E-mail</p>
                        <UInput v-model="email" placeholder="Enter your email" type="text" />
                    </div>
                    <div>
                        <p>Password</p>
                        <UInput v-model="password" placeholder="Enter your password" type="password" />
                    </div>
                    <div>
                        <UButton @click="login">Login</UButton>
                    </div>
                </div>
                <div class="w-1/3 h-full flex flex-col justify-center items-center">
                    <USeparator orientation="vertical" class="h-48" />
                </div>
                <div class="w-1/3 h-full flex flex-col justify-center items-center">
                    <div v-for="(item, index) in another_login" :key="index" class="">
                        <UAvatar :src="item.avatar" :alt="item.name" size="lg" class="mb-2" />
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const another_login = [
   
    {
        avatar:'./assets/img/google.png',
        name:'Google',
    },
    {
        avatar:'./assets/img/github-mark.png',
        name:'Github',
    }
]
</script>