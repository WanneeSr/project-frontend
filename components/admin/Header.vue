<template>
    <div class="bg-[#ffffff] text-rose-400 px-6 py-4 w-full shadow-md border-b border-rose-200 flex items-center justify-between">
        <div>
            <h1 class="text-2xl font-bold">Admin Panel</h1>
        </div>
        <div class="flex items-center gap-4">
            <UButton   variant="outline" class="items-center" @click="$router.push('/')">
                Log out
            </UButton>
        </div>
    </div>
</template>  