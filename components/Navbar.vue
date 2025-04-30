<template>
    <div class="bg-[#181818] p-4 ">
        <div class="flex justify-between items-center ">
            <div class="w-1/3 flex justify-start items-center gap-4">
                Logo
            </div>
            <div class="w-1/3 flex justify-center items-center gap-4">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/">Course</nuxt-link>
                <nuxt-link to="/">Overviews</nuxt-link>
            </div>
            <div class="w-1/3 flex justify-end items-center ">
                <div class="w-1/6 flex justify-center items-center ">
                    <nuxt-link to="/register">Register</nuxt-link>
                </div>
                <div class="w-1/6 flex justify-center items-center ">
                    <UButton to="login">Button</UButton>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
