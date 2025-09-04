<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;

// กำหนด type ของ course
interface Course {
  course_id: number;
  course_title: string;
  course_detail: string;
  course_status: number;
  create_by: number;
  created_at: string;
  updated_at: string;
}

// ดึงข้อมูล (API ส่ง array กลับมา)
const { data: courses, pending, error } = await useFetch<Course[]>(`http://localhost:3001/get/course/${id}`, {
  method: "GET"
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-violet-50 p-6">
    <!-- Loading -->
    <p v-if="pending" class="text-violet-700 text-lg font-semibold">⏳ กำลังโหลด...</p>

    <!-- Error -->
    <p v-else-if="error" class="text-red-600 text-lg font-semibold">❌ {{ error.message }}</p>

    <!-- Data -->
    <div v-else class="grid gap-6 max-w-3xl w-full">
      <div
        v-for="course in courses"
        :key="course.course_id"
        class="bg-white rounded-2xl shadow-xl p-6 border border-violet-200"
      >
        <h2 class="text-2xl font-bold text-violet-700 mb-2">
          {{ course.course_title }}
        </h2>
        <p class="text-gray-700 mb-4">
          {{ course.course_detail }}
        </p>

        <div class="flex justify-between text-sm text-gray-600 mt-4 border-t pt-3">
          <span>👩‍🏫 ผู้สอน ID: 
            <span class="font-medium text-violet-700">{{ course.create_by }}</span>
          </span>
          <span>📅 {{ new Date(course.created_at).toLocaleDateString("th-TH") }}</span>
        </div>

        <button 
          class="mt-6 w-full py-2 px-4 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-xl shadow-md transition"
        >
          สมัครเรียน
        </button>
      </div>
    </div>
  </div>
</template>
