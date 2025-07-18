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


</script>
<template>
    <div class="min-w-[250px] h-[100vh] bg-white   ">
        <div v-for="item in items"  class="bg-white w-full text-gray-700 font-medium  hover:bg-slate-200 ">
            <nuxt-link :to="item.to" class="py-3 flex flex-rows items-center justify-start px-7 ">
                <UIcon :name="item.icon" class="py-2"/>
                <p class="p-3">{{ item.label }}</p>
            </nuxt-link>
        </div>
       

    </div>
</template>


<!-- 
<style scoped>
.is_expanded {
    color: orangered;
}

.is_expanded span {
    color: orangered;
}
</style> -->