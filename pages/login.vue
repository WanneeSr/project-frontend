<script setup>

const router = useRouter()

const data = ref({
    email: '',
    password: '',
    rememberMe: false
})

const login = async () => {
    try {
        // Mock authentication - replace with your actual API call
        if (data.value.email === 'wannee@gmail.com' && data.value.password === '1234') {
            // Store token or user data in localStorage if remember me is checked
            if (data.value.rememberMe) {
                localStorage.setItem('user', JSON.stringify({
                    email: data.value.email,
                    isAuthenticated: true
                }))
            }

            // Navigate to dashboard after successful login
            router.push('/students/')
        } else {
            error.value = 'Invalid email or password'
        }
    } catch (e) {
        error.value = 'An error occurred during login'
        console.error('Login error:', e)
    }
}


</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <input id="remember-me" type="checkbox" v-model="rememberMe"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>
                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                </div>
                <button type="submit"
                    class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                </button>
            </form>
            <div class="mt-4 text-center">
                <span class="text-sm text-gray-600">Don't have an account?</span>
                <a href="#" class="ml-1 font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
            </div>
        </div>
    </div>
</template>
