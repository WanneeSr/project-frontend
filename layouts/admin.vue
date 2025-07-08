<template>
    <div class="h-screen flex flex-col">
        <ViewsHeader />
        <div class="flex w-full h-full">
            <ViewsSidebar />
            <div class="w-full h-full px-4 py-3 bg-[#F5F5F5]">
                <slot />
            </div>
        </div>
    </div>

</template>