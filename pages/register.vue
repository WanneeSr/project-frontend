<script setup>
definePageMeta({
    layout: '',
})
const router = useRouter()
const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
})

const register = async () => {
    if (form.password !== form.confirm_password) {
        alert('รหัสผ่านไม่ตรงกัน')
        return
    }

    try {
        const response = await $fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                password: form.password,
                confirmpassword: form.confirm_password
            })
        })

        // ตรวจสอบว่าลงทะเบียนสำเร็จ
        if (response.status === 201) {
            alert('สมัครสำเร็จ! ไปที่หน้า Login')
            router.push('/login')
        } else {
            alert('เกิดข้อผิดพลาด: ' + (response.message || 'ไม่ทราบสาเหตุ'))
        }

    } catch (error) {
        alert('เกิดข้อผิดพลาด: ' + (error.data?.message || error.message))
    }
}




</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
            <div class="p-4 w-full flex flex-col gap-6">
                <UForm :state="form" @submit.prevent="register" class="flex flex-col gap-2">
                    <UFormGroup label="First Name" name="first_name">
                        <p>First Name</p>
                        <UInput v-model="form.first_name" placeholder="Enter your first name" class="w-full " />
                    </UFormGroup>

                    <UFormGroup label="Last Name" name="last_name">
                        <p>Last Name</p>
                        <UInput v-model="form.last_name" placeholder="Enter your last name" class="w-full" />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email">
                        <p>E-mail</p>
                        <UInput v-model="form.email" type="email" placeholder="you@example.com" class="w-full" />
                    </UFormGroup>

                    <UFormGroup label="Password" name="password">
                        <p>Password</p>
                        <UInput v-model="form.password" type="password" placeholder="••••••••" class="w-full" />
                    </UFormGroup>

                    <UFormGroup label="Confirm Password" name="confirm_password">
                        <p>Confirm Password</p>
                        <UInput v-model="form.confirm_password" type="password" placeholder="••••••••" class="w-full" />
                    </UFormGroup>

                </UForm>
                <UButton  @click="register()" type="submit" color="secondary" block>
                    Register
                </UButton>
            </div>
            <div class="flex items-center justify-between p-4 gap-2">
                <UButton color="secondary" variant="outline" block>
                    <div>
                        <img src="../assets/img/google.png" alt="" class="w-6 h-6" />
                    </div>
                    Google
                </UButton>
                <UButton color="secondary" variant="outline" block>
                    <div>
                        <img src="../assets/img/github-mark.png" alt="" class="w-6 h-6" />
                    </div>
                    Github
                </UButton>
            </div>
            <div>
                <p class="text-sm text-center text-gray-600">
                    Already have an account?
                    <NuxtLink to="/login" class="text-indigo-600 hover:underline ml-1">Log in</NuxtLink>
                </p>
            </div>
        </div>
    </div>

</template>