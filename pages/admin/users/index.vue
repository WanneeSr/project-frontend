<!-- <script setup lang="ts">
definePageMeta({
  layout: "admin",
})
// เพิ่มในส่วนของ script setup ใน index.vue
import { onMounted, ref } from 'vue';
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
const UBadge = resolveComponent('UBadge')

type User = {
  id: number;
  name: string;
  email: string;
  role: number;
  status: string;
};

// สร้าง ref เพื่อเก็บข้อมูลผู้ใช้
const users = ref([]);
const loading = ref(false);
const error = ref();

const getUsers = async () => {
  

    const { status, data } = await getUsers();
    console.log(data);
   
};
const columns: TableColumn<User>[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render(row) {
      return h(UBadge, { type: row.status }, () => row.status);
    },
  },
];

// เรียกใช้ฟังก์ชันเมื่อ component ถูกโหลด
onMounted(() => {
  getUsers();
});
</script>

<template>
  <UTable :data="data" class="flex-1" />
</template> -->

<!-- <script setup>
definePageMeta({
  layout: "admin",
})
const user = checkToken()
const route = useRoute();
const router = useRouter();


const links = [{
  label: 'Dashboard',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'course',
  icon: 'i-heroicons-square-3-stack-3d'
}]
const categories = ref([])
const categories_selected = ref(0)

const status_list = ref([
  {
    id: 0,
    name: 'all'
  },
  { 
    id: 1, 
    name: 'active_course' 
  },
  { 
    id: 2, 
    name: 'private_course' 
  },
  { 
    id: 3,
    name: 'upcoming_course' 
  }
])
const status_selected = ref(0)

const instructor = ref([])
const instructor_selected = ref(0)

const price = ref([{ id: null, name: 'all' }, { id: 0, name: 'free' }, { id: 1, name: 'paid' }])
const price_selected = ref(null);


const course_list = ref([]);
const hold_course_list = ref([])
const course_info = ref({});
const page = ref(1);
const pageCount = ref(10);

// const getCourses = async () => {
//   if (user?.user_status == 3) {
//     const { status, data } = await getCourse();
//     if (status === 200) {
//       hold_course_list.value = data;
//       course_list.value = data;
//     } else {
//       console.error('Failed to fetch data. Status:', status);
//     }
//   } else {
//     const { status, data } = await getCourseFromInstructor();

//     if (status == 200) {
//       hold_course_list.value = data;
//       course_list.value = data;
//     } else {
//       console.error('Failed to fetch data. Status:', status);
//     }
//   }
// }

const getUsers = async () => {
  const { status, data } = await getUsers();
  if (status === 200) {
   user.value = data;
  } else {
    console.error('Failed to fetch data. Status:', status);
  }
}
// const getTeachers = async () => {
//   const { status, data } = await getTeacher();
//   if (status === 200) {
//     let set_all_Teach = { user_id: 0, name:'all'};
//     for (const item of data) {
//       item.name = item.first_name + ' ' + item.last_name
//     }
//     data.unshift(set_all_Teach)
//     instructor.value = data;
//   } else {
//     console.error('Failed to fetch data. Status:', status);
//   }


onMounted(() => {
  
  getUsers();
})
</script>

<template>
  <div class="text-[#747B88] ">
    <div class="flex justify-center gap-4">
      <UCard class=" w-1/5 h-[157px] ">
        <div class="flex flex-col justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1664 1664">
            <path fill="currentColor"
              d="M1456 1216q0-40-28-68l-208-208q-28-28-68-28q-42 0-72 32q3 3 19 18.5t21.5 21.5t15 19t13 25.5t3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13t-19-15t-21.5-21.5t-18.5-19q-33 31-33 73q0 40 28 68l206 207q27 27 68 27q40 0 68-26l147-146q28-28 28-67M753 511q0-40-28-68L519 236q-28-28-68-28q-39 0-68 27L236 381q-28 28-28 67q0 40 28 68l208 208q27 27 68 27q42 0 72-31q-3-3-19-18.5T543.5 680t-15-19t-13-25.5T512 608q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13t19 15t21.5 21.5t18.5 19q33-31 33-73m895 705q0 120-85 203l-147 146q-83 83-203 83q-121 0-204-85l-206-207q-83-83-83-203q0-123 88-209l-88-88q-86 88-208 88q-120 0-204-84L100 652q-84-84-84-204t85-203L248 99q83-83 203-83q121 0 204 85l206 207q83 83 83 203q0 123-88 209l88 88q86-88 208-88q120 0 204 84l208 208q84 84 84 204" />
          </svg>
          <p class="text-[24px] font-bold">{{ course_info.active_course }}</p>
          <p class="text-[14px]">{{ 'active_course' }}</p>
        </div>
      </UCard>
      <UCard class=" w-1/5 h-[157px] ">
        <div class="flex flex-col justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1664 1664">
            <path fill="currentColor"
              d="m439 1271l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23m169 41v320q0 14-9 23t-23 9t-23-9t-9-23v-320q0-14 9-23t23-9t23 9t9 23m-224-224q0 14-9 23t-23 9H32q-14 0-23-9t-9-23t9-23t23-9h320q14 0 23 9t9 23m1264 128q0 120-85 203l-147 146q-83 83-203 83q-121 0-204-85l-334-335q-21-21-42-56l239-18l273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67q0-40-28-68l-274-275l18-239q35 21 56 42l336 336q84 86 84 204m-617-724l-239 18l-273-274q-28-28-68-28q-39 0-68 27L236 381q-28 28-28 67q0 40 28 68l274 274l-18 240q-35-21-56-42L100 652q-84-86-84-204q0-120 85-203L248 99q83-83 203-83q121 0 204 85l334 335q21 21 42 56m633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23t9-23t23-9h320q14 0 23 9t9 23M1120 32v320q0 14-9 23t-23 9t-23-9t-9-23V32q0-14 9-23t23-9t23 9t9 23m407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23" />
          </svg>
          <p class="text-[24px] font-bold">{{ course_info.upcoming_course }}</p>
          <p class="text-[14px]">{{ 'upcoming_course' }}</p>
        </div>
      </UCard>
      <UCard class=" w-1/5 h-[157px] ">
        <div class="flex flex-col justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1664 1664">
            <path fill="currentColor"
              d="m439 1271l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23m169 41v320q0 14-9 23t-23 9t-23-9t-9-23v-320q0-14 9-23t23-9t23 9t9 23m-224-224q0 14-9 23t-23 9H32q-14 0-23-9t-9-23t9-23t23-9h320q14 0 23 9t9 23m1264 128q0 120-85 203l-147 146q-83 83-203 83q-121 0-204-85l-334-335q-21-21-42-56l239-18l273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67q0-40-28-68l-274-275l18-239q35 21 56 42l336 336q84 86 84 204m-617-724l-239 18l-273-274q-28-28-68-28q-39 0-68 27L236 381q-28 28-28 67q0 40 28 68l274 274l-18 240q-35-21-56-42L100 652q-84-86-84-204q0-120 85-203L248 99q83-83 203-83q121 0 204 85l334 335q21 21 42 56m633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23t9-23t23-9h320q14 0 23 9t9 23M1120 32v320q0 14-9 23t-23 9t-23-9t-9-23V32q0-14 9-23t23-9t23 9t9 23m407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23" />
          </svg>
          <p class="text-[24px] font-bold">{{ course_info.private_course }}</p>
          <p class="text-[14px]">{{ 'private_course' }}</p>
        </div>
      </UCard>
      <UCard class=" w-1/5 h-[157px] ">
        <div class="flex flex-col justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
            <path fill="currentColor"
              d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" />
          </svg>
          <p class="text-[24px] font-bold">{{ course_info.free_course }}</p>
          <p class="text-[14px]">{{ 'free_course' }}</p>
        </div>
      </UCard>
      <UCard class=" w-1/5 h-[157px] ">
        <div class="flex flex-col justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M5.5 9A1.5 1.5 0 0 0 7 7.5A1.5 1.5 0 0 0 5.5 6A1.5 1.5 0 0 0 4 7.5A1.5 1.5 0 0 0 5.5 9m11.91 2.58c.36.36.59.86.59 1.42c0 .55-.22 1.05-.59 1.41l-5 5a1.996 1.996 0 0 1-2.83 0l-6.99-6.99C2.22 12.05 2 11.55 2 11V6c0-1.11.89-2 2-2h5c.55 0 1.05.22 1.41.58zm-3.87-5.87l1-1l6.87 6.87c.37.36.59.87.59 1.42c0 .55-.22 1.05-.58 1.41l-5.38 5.38l-1-1L20.75 13z" />
          </svg>
          <p class="text-[24px] font-bold">{{ course_info.pending_course }}</p>
          <p class="text-[14px]">{{ 'active_course' }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template> -->
<script setup>
definePageMeta({
  layout: "admin",
})
import { ref, onMounted } from 'vue'


const users = ref([]); // กำหนด ref สำหรับเก็บข้อมูลผู้ใช้

// เปลี่ยนชื่อฟังก์ชันเพื่อไม่ให้ชนกับฟังก์ชันที่นำเข้า
const fetchUsers = async () => {
  try {
    const response = await getUsers();
    if (response.status === 200) {
      users.value = response.data; // สมมุติว่า response.data เป็น array ของผู้ใช้
      console.log(users.value);    // Log ข้อมูลผู้ใช้
    } else {
      console.log('Error fetching users:', response.status);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in users" :key="index">
          <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>