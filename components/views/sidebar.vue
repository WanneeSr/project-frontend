<script setup lang="ts">

const items = [
   
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
        label: 'Setting',
        icon:'i-heroicons-cog-8-tooth',
        to:'/admin/setting'
    }
    
]


</script>
<template>
    <div class="min-w-[250px] h-[100vh] bg-white border-r-2 pt-5 ">
        <div v-for="item in items"  class="bg-slate-200 w-full text-gray-700 font-medium pt-3 pb-3">
            <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
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