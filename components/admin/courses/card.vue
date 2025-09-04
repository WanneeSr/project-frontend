<script setup lang="ts">
const route = useRoute()
console.log(route.params.id)
const is_selected = ref([])
console.log(is_selected.value);

const courses = ref<Course[]>([]);

interface Course {
    course_id: number;
    course_title: string;
    course_detail: string;
    course_status: number;
}

const courseData = async () => {
    const { data, status } = await getCourses();
    courses.value = data
    console.log(courses.value);

}
onMounted(() => {
    courseData()
})

</script>


<template>
    <div class="bg-white text-slate-600 w-full max-w-md mx-auto p-4 rounded-lg space-y-4 flex flex-col">
        <div v-for="(item, index) in courses" :key="index"
            class="border border-gray-200 rounded-md shadow-sm p-4 bg-gray-50 hover:shadow-md transition">
            <h2 class="text-lg font-semibold text-slate-800 mb-2">
                {{ item.course_title }}
            </h2>
            <p class="text-sm text-gray-600">
                {{ item.course_detail || 'ไม่มีรายละเอียดเพิ่มเติม' }}
            </p>
            <p class="text-xs text-gray-400 mt-2">
                สถานะ:
                <span v-if="item.course_status === 1">เผยแพร่</span>
                <span v-else-if="item.course_status === 2">ถูกลบ</span>
                <span v-else-if="item.course_status === 3">ซ่อน</span>
            </p>
        </div>
    </div>
</template>