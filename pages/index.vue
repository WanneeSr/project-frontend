<script setup>
definePageMeta({
    layout: 'home'
})
let data = [
    {
        id: 1,
        label: 'data1',
        detail: 'dffffaaa',
    }
]
</script>

<template>
    <div class="bg-[#e9e9e9] w-full min-h-screen ">

        <div class="flex flex-col justify-center items-center gap-8 ">
            <div class="bg-slate-600 w-full h-72 py-24">
                <p class="text-white text-2xl font-semibold text-center ">Wellcome to My Project!</p>
            </div>
            <div v-for="(item, index) in data" :key="index">
                <p>{{ item.detail }}</p>
            </div>
        </div>
    </div>
</template>