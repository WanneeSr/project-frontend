<template>
    <div class="bg-white w-full  min-h-screen ">
       <div class="bg-gray-700 text-2xl text-white">
            <div class="flex justify-between items-center p-5">
                <div>
                    <nuxt-link to="/">Project</nuxt-link>
                </div>
                <div></div>
                <div class="flex gap-2">  
                    <UButton variant="outline" color="info" to="/register">Register</UButton>
                    <UButton to="/login">Login</UButton>
                </div>
            </div>
       </div>
       <div class="flex-grow flex items-center justify-center bg-gray-100">
        <slot></slot>
       </div>
        
    </div>
</template>