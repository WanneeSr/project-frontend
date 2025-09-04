<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  
})
const user= checkToken();
console.log(user);



</script>
<template>
    <div class="bg-gray-300  rounded-2xl text-gray-700">
      <!-- <div class="flex flex-rows items-center justify-center gap-6 p-4">
        <div class="w-1/3 flex flex-col items-center bg-gray-300 dark:bg-gray-900 p-4 rounded-lg dark:text-white ">
          <img src="/assets/img/user.png" alt="user" class="w-24 h-24 mx-auto mb-4">
          <p class="text-xl font-extrabold">Users</p>
          <p class="font-extrabold">32</p>
        </div>
        <div class="w-1/3 flex flex-col items-center bg-gray-300 dark:bg-gray-900 p-4 rounded-lg dark:text-white">
          <img src="/assets/img/courses.png" alt="user" class="w-24 h-24 mx-auto mb-4">
          <p>Courses</p>
          <p class="">20</p>
        </div>
        <div class="w-1/3 flex flex-col items-center bg-gray-300 dark:bg-gray-900 p-4 rounded-lg dark:text-white">
          <img src="/assets/img/excercise.png" alt="user" class="w-24 h-24 mx-auto mb-4">
          <p>Exercise</p>
          <p class="">75</p>
        </div>
      </div>
      <div class="flex flex-rows items-center justify-center gap-6 p-4 dark:text-white">
        <div class="w-1/2 dark:bg-gray-900 rounded-lg p-4">
          <p>Actions Logs</p>
        <UTable :data="_action_logs" class="flex-1" />
        </div>
        <div class="w-1/2 dark:bg-gray-900 rounded-lg p-4">
          <p>Events Logs</p>
        <UTable :data="_event_logs" class="flex-1" />
        </div>
      </div>
 -->

    </div>
</template>