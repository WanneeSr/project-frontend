<template>
  <div class="w-full bg-gradient-to-r from-violet-700 to-violet-500 text-white">
    <div class="flex flex-rows justify-between items-center p-4">
      <!-- Left: Logo -->
      <div class="w-1/3 flex flex-rows justify-center">
        <div class="font-bold text-3xl">Project</div>
      </div>

      <!-- Center: Navigation -->
      <div class="w-1/3 flex gap-2 font-semibold h-12 items-center justify-center">
        <nuxt-link to="/" class="w-1/3 rounded-xl text-center p-2 hover:bg-violet-400">Home</nuxt-link>
        <nuxt-link to="/users/overview" class="w-1/3 rounded-xl text-center p-2 hover:bg-violet-400">Overview</nuxt-link>
        <nuxt-link to="/users/courses" class="w-1/3 rounded-xl text-center p-2 hover:bg-violet-400">Course</nuxt-link>
      </div>

      <!-- Right: Actions -->
      <div class="w-1/3 flex flex-rows justify-center gap-4">
        <ColorModeButton />

        <div class="flex flex-rows items-center gap-4">
          <!-- ถ้าไม่ได้ล็อกอิน -->
          <template v-if="!isLoggedIn">
            <UButton to="/register" color="primary" variant="solid" :ui="{ base: 'bg-violet-700 text-white hover:bg-violet-800 active:bg-violet-900' }">
              Register
            </UButton>

            <UButton to="/login" color="neutral" variant="outline" :ui="{ base: 'border border-gray-400 text-gray-700 hover:bg-gray-100 active:bg-gray-200' }">
              Login
            </UButton>
          </template>

          <!-- ถ้าล็อกอินแล้ว -->
          <template v-else>
            <nuxt-link to="/" @click.native="logout">
              <li
                class="w-full h-[40px] border-l-4 border-l-transparent flex items-center justify-start transition delay-50 hover:bg-slate-50 hover:border-orange-400 hover:border-l-4 hover:text-[#F36E32] hover:fill-[#F36E32]"
              >
                <p class="flex items-center gap-1 pl-4 text-[16px] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="#303030" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" />
                  </svg>
                  Logout
                </p>
              </li>
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const router = useRouter();
const user = checkToken();
const isLoggedIn = ref();

const logout = () => {
    console.log(user);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isLoggedIn.value = false;
    router.push('/login') // redirect ไปหน้า login
    
}
</script>