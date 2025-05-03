<script setup lang="ts">
import { jwtDecode } from "jwt-decode";
import { ref, onMounted } from 'vue';
import { useRouter } from 'nuxt/app';
import type { DropdownMenuItem } from '@nuxt/ui';

const router = useRouter()

const user = ref(null)
const role_name = ref('')

const items = ref<DropdownMenuItem[][]>([
    [
        {
            label: 'Benjamin',
            avatar: {
                src: 'https://github.com/benjamincanac.png'
            },
            type: 'label'
        }
    ],
    [
        {
            label: 'Profile',
            icon: 'i-lucide-user'
        },
        {
            label: 'Overviews',
            icon: 'i-lucide-credit-card'
        },
        {
            label: 'Score',
            icon: 'i-lucide-credit-card'
        },
        {
            label: 'Settings',
            icon: 'i-lucide-cog',
            kbds: [',']
        }
    ],
    [
        {
            label: 'Logout',
            icon: 'i-lucide-log-out',
            kbds: ['shift', 'meta', 'q'],
            onSelect: async () => {
                localStorage.removeItem("token");
                await router.push("/login");
            }
        }
    ]
])



onMounted(() => {
    const token = localStorage.getItem('token')
    if (token) {
        const decoded = jwtDecode(token)
        user.value = decoded
        const roleMap = { 1: 'นักเรียน', 2: 'อาจารย์', 3: 'แอดมิน' }
        role_name.value = roleMap[decoded.user_role] || 'ไม่ทราบ'
    }
})
</script>

<template>
    <div class="w-full bg-gray-700 flex p-4 justify-between">
        <div class="flex gap-5 items-center">
            <div class="flex items-center border-r-2 border-white pr-5">
                <img width="130" src="" alt="">
            </div>
            <div class="flex items-center">
                <nuxt-link to="/admin" class="text-white text-4xl font-bold drop-shadow-md">Admin Panel</nuxt-link>
            </div>
        </div>
        <div class="flex gap-5 items-center">
            <nuxt-link to="/" class="text-white font-bold drop-shadow-md">home</nuxt-link>
            <!-- <nuxt-link to="/user/profile" class="text-white font-bold drop-shadow-md">profileinfo</nuxt-link> -->
        </div>
        <div class="flex gap-5 items-center">
            <UDropdownMenu :items="items" :ui="{ content: '' }">
                <UButton icon="i-lucide-menu" color="" variant="outline" />
            </UDropdownMenu>
            <!-- <button @click="log_out()" class="text-white rounded-md px-2 py-1 bg-gray-500">Logout</button> -->
        </div>
    </div>
</template>
