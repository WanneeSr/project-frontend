<script setup lang="ts">
import { UIcon } from '#components';


const items = [
    {
        label: 'Dashbord',
        icon:'i-heroicons-home',
        to:'/admin'
    },
    {
        label: 'Courses',
        icon: 'i-heroicons-book-open',
        to: '/admin/courses'
        // slot: '',
        // defaultOpen: true,
        // path: '',
    },
    {
        label: 'Users',
        icon:'i-heroicons-user',
        to:'/admin/users'
    },
    {
        label: 'ChatGPT',
        icon:'i-heroicons-cog-8-tooth',
        to:'/admin/chatgpt'
    },
    {
        label: 'Logs',
        icon:'i-heroicons-cog-8-tooth',
        to:'/admin/logs'
    },
    {
        label: 'Setting',
        icon:'i-heroicons-cog-8-tooth',
        to:'/admin/setting'
    }
    
]



const router = useRouter();
const user = checkToken();
const isLoggedIn = ref();

const logout = () => {
    console.log(user);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isLoggedIn.value = false;
    router.push('/login') // redirect ไปหน้า login
    
}


</script>
<template>
    <div class="bg-violet-500 h-screen">
        <div class="">
                <p class="text-2xl font-bold p-2 text-center py-5">Admin panel</p>
        </div>
        <div v-for="item in items"  class="w-[200px] bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold has-checked:text-violet-600">
            
            <nuxt-link :to="item.to" class=" py-3 flex flex-rows items-center justify-start px-7 ">
                <UIcon :name="item.icon" class="py-2"/>
                <p class="p-3">{{ item.label }}</p>
            </nuxt-link>
        </div>
       <div class="w-[200px] bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold has-checked:text-violet-600">
         <nuxt-link to="/" @click="logout()" class=" py-3 flex flex-rows items-center justify-start px-7 ">
            <UIcon name="i-lucide-lightbulb" class="size-5" />
            <p>Logout</p>
         </nuxt-link>
       </div>

    </div>
</template>


