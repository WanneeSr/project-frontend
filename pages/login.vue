<script setup>
import Swal from 'sweetalert2';
definePageMeta({
    layout: '',
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        });
        console.log('Login successful:', response);
        // ตรวจสอบว่าลงทะเบียนสำเร็จ
        if (response.status === 200) {
            // เก็บ token ใน localStorage หรือ cookie ตามที่คุณต้องการ
            localStorage.setItem('token', response.data.token);
            // หรือใช้ cookie
            // document.cookie = `token=${response.data.token}; path=/`;

            // แสดงข้อความสำเร็จ
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                text: 'Welcome back!',
                confirmButtonText: 'OK'
            }).then(() => {
                router.push('/'); // เปลี่ยนเส้นทางไปยังหน้าแรกหรือหน้าอื่น ๆ ที่คุณต้องการ
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: response.message || 'Unknown error occurred.',
                confirmButtonText: 'OK'
            });
        }

        // ทำอะไรต่อเมื่อ login สำเร็จ
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: ' + (error.data?.message || error.message));
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

                <UButton type="submit" color="primary" block :loading="isLoading" >
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