<script setup>
definePageMeta({
    layout: 'home',
    middleware: 'auth',
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
            <div class="bg-slate-600 dark:bg-gray-900 w-full h-72 py-24">
                <p class="text-white text-2xl font-semibold text-center ">Wellcome to My Project!</p>
            </div>
            <div v-for="(item, index) in data" :key="index">
                <p>{{ item.detail }}</p>
            </div>
        </div>
        <div class="">
            <div>
        
            </div>
            <div class="flex flex-rows items-center justify-between p-5 gap-4  text-gray-900">
                <div class="w-1/4 border-2 border-gray-900 rounded-3xl p-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tempora veniam repudiandae alias provident iusto, minima eum laudantium fugit praesentium natus et aut sunt. Amet sunt omnis ad aperiam at.</div>
                <div class="w-1/4 border-2 border-gray-900 rounded-3xl p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ad quasi unde soluta saepe nesciunt, eos harum aliquid sit omnis porro. Repellendus unde dignissimos alias minus assumenda labore, dolorem atque.</div>
                <div class="w-1/4 border-2 border-gray-900 rounded-3xl p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores odit adipisci dolor perspiciatis quam error repellat iure sequi recusandae dignissimos consectetur. Recusandae ipsa cum eligendi voluptates fuga in repellat.</div>
                <div class="w-1/4 border-2 border-gray-900 rounded-3xl p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore aspernatur veniam beatae optio laborum, cupiditate dolorum iste commodi, tenetur aliquam autem saepe tempore quisquam expedita! Itaque quae exercitationem voluptatem.</div>
               
            </div>
        </div>
        <div>

        </div>
    </div>
</template>