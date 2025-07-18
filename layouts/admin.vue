<template>
    <div class="h-screen flex flex-col">
        <ViewsHeader />
        <div class="flex w-full h-full">
            <ViewsSidebar />
            <div class="w-full h-full px-2 py-2 bg-[#F5F5F5]">
                
                    <slot/>
                
            </div>
        </div>
    </div>

</template>