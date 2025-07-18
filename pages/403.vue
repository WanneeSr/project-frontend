<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div class="text-center p-8">
            <h1 class="text-6xl font-bold text-red-600">403</h1>
            <h2 class="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">Access Denied</h2>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
                You don't have permission to access this page.
            </p>
            <NuxtLink to="/"
                class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Go Home
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
// ไม่จำเป็นต้องใส่อะไรหากไม่มี logic พิเศษ
</script>
