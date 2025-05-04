<template>
    <ViewsHeader />
    <div class="flex w-full">
        <ViewsSidbar />
        <div class="w-full p-5 bg-[#F5F5F5]">
            <slot></slot>
        </div>
    </div>
</template>