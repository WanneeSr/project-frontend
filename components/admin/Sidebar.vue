<!-- <template>
    <div class="bg-slate-700 w-64 h-full flex flex-col justify-between p-4 text-white">
        <div>
            <div v-for="(item_user, index_user) in users" :key="index_user" class="flex items-center gap-3 mb-4">
                <UAvatar src="" size="3xl" />
                <div>
                    <div class="flex flex-rows items-center gap-2">
                        <p class="font-semibold">{{ item_user.first_name }}</p>
                        <p class="font-semibold">{{ item_user.last_name }}</p>
                    </div>
                    <UBadge color="info" variant="outline">{{ item_user.user_role }}</UBadge>
                </div>
            </div>

            <nav class="space-y-2">
                <NuxtLink v-for="(item, index) in items" :key="index" :to="item.to"
                    class="flex items-center gap-3 cursor-pointer hover:bg-slate-600 p-2 rounded">
                    <UIcon :name="item.icon" />
                    <span>{{ item.value }}</span>
                </NuxtLink>
            </nav>
        </div>
    </div>
</template> -->

<template>
    <div class="bg-slate-700 w-64 h-full flex flex-col justify-between p-4 text-white">
        ff
    </div>
</template>


<script setup>
const items = [
    {
        name: 'Dashboard',
        icon: 'i-heroicons-outline-home',
        value: 'Dashboard',
        to: '/admin/',
    },
    {
        name: 'Users',
        icon: 'i-heroicons-outline-user-group',
        value: 'Users',
        to: '/admin/users',
    },
    {
        name: 'Courses',
        icon: 'i-heroicons-outline-book-open',
        value: 'Courses',
        to: '/admin/courses',
    },
    {
        name: 'Students',
        icon: 'i-heroicons-outline-user-circle',
        value: 'Students',
        to: '/admin/students',
    },
    {
        name: 'Instructors',
        icon: 'i-heroicons-outline-user-circle',
        value: 'Instructors',
        to: '/admin/instructors',
    },
    {
        name: 'Logs',
        icon: 'i-heroicons-outline-user-group',
        value: 'logs',
        to: '/admin/logs',
    },
    {
        name: 'Settings',
        icon: 'i-heroicons-outline-cog-6-tooth',
        value: 'Settings',
        to: '/admin/settings',
    },
]

const users = [
    {
        user_id: 1,
        first_name:'Lookthor',
        last_name:'Sullivan',
        user_role:'admin',
    }
]
</script>