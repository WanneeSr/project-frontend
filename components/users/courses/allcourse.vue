<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const route = useRoute();

const item_course = ref();

async function getCourse() {
  try {
    const data = await $fetch('http://localhost:3001/get/courses')
    console.log("Raw data from API:", data)
    item_course.value = data;
    // console.log("item_course =>", item_course.value)

  } catch (error) {
    console.error("Error in getCourse functions at CardCourse:", error)
  }
}

onMounted(() => {
  getCourse()
})
</script>

<template>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div v-for="(course, index) in item_course" :key="index"
      class="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col">
      <!-- รูปคอร์ส -->
      <img :src="course.course_image || 'https://via.placeholder.com/300x200?text=No+Image'" alt="Course image"
        class="rounded-xl w-full h-40 object-cover mb-4" />

      <!-- ข้อมูลคอร์ส -->
      <h3 class="text-lg font-semibold text-gray-800 mb-2">
        {{ course.course_title || 'Untitled Course' }}
      </h3>
      <p class="text-sm text-gray-600 flex-grow">
        {{ course.course_detail || 'No description available.' }}
      </p>

      <!-- ปุ่ม -->
      <NuxtLink :to="`/users/courses/${course.course_id}`"
        class="mt-4 bg-violet-700 text-white px-4 py-2 rounded-xl hover:bg-violet-800 transition">
        ดูรายละเอียด
      </NuxtLink>
    </div>
  </div>
</template>