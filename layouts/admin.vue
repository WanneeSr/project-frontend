<template>
    <div class="flex flex-col h-screen">
        <!-- Header -->
        <Header />

        <!-- Body: Sidebar + Main Content -->
        <div class="flex flex-1 overflow-hidden">
            <!-- Sidebar -->
            <Sidebar />

            <!-- Main Content -->
            <div class="flex-1  p-6 bg-white text-gray-600">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '~/components/admin/Header.vue'
import Sidebar from '~/components/admin/Sidebar.vue'
</script>