<script setup>
import Swal from 'sweetalert2';
definePageMeta({
    layout: '',
    middleware: 'auth',
})
const router = useRouter()

const form = reactive({
    email: '',
    password: '',
    rememberMe: false
})

const login = async () => {
    try {
        const response = await $fetch('http://localhost:3001/login', {
            method: 'POST',
            body: {
                email: form.email,
                password: form.password, // ยังไม่ใช้งานฝั่ง backend
            }
        });

        // ตรวจสอบว่า response มี token
        if (response.token) {
            localStorage.setItem('token', response.token);

            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                text: 'Welcome back!',
                confirmButtonText: 'OK'
            }).then(() => {
                router.push('/users');
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Invalid response from server.',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        console.error('Login failed:', error);
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: error.data?.error || error.message || 'Unknown error occurred.',
            confirmButtonText: 'OK'
        });
    }
};



</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>

            <UForm :state="form" @submit.prevent="login" class="flex flex-col gap-4 ">
                <UFormGroup label="Email" name="email" class="">
                    <p>E-mail</p>
                    <UInput v-model="form.email" type="email" placeholder="you@example.com" class="w-full" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <p>Password</p>
                    <UInput v-model="form.password" type="password" placeholder="••••••••" class="w-full" />
                </UFormGroup>

                <UButton type="submit" color="primary" block :loading="isLoading">
                    Login
                </UButton>
            </UForm>

            <div class="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-300">
                <label class="inline-flex items-center">
                    <input type="checkbox" v-model="rememberMe" class="form-checkbox text-indigo-600" />
                    <span class="ml-2">Remember me</span>
                </label>
                <a href="#" class="text-indigo-600 hover:underline">Forgot password?</a>
            </div>

            <div class="flex items-center justify-between mt-6 gap-2">
                <UButton color="secondary" variant="outline" block>
                    <img src="../assets/img/google.png" alt="Google" class="w-5 h-5 mr-2" />
                    Google
                </UButton>
                <UButton color="secondary" variant="outline" block>
                    <img src="../assets/img/github-mark.png" alt="GitHub" class="w-5 h-5 mr-2" />
                    GitHub
                </UButton>
            </div>

            <p class="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                Don't have an account?
                <NuxtLink to="/register" class="text-indigo-600 hover:underline ml-1">Register</NuxtLink>
            </p>
        </div>
    </div>
</template>