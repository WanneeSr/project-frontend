<script setup>
const user = checkToken();
const route = useRoute();

const items = ref([{
    label: 'course',
    icon: 'i-heroicons-book-open',
    slot: 'getting-Courses',
    defaultOpen: true,
    path: [
        "/admin/courses",
        '/admin/courses/bundle',
        '/admin/courses/category',
        '/admin/courses/tags'
    ]
}, {
    label: 'Users',
    icon: 'i-heroicons-user-circle',
    slot: 'getting-Users',
    path: [
        '/admin/students',
        '/admin/teachers'
    ]

}, {
    label: 'settings',
    icon: 'i-heroicons-wrench-screwdriver',
    slot: 'getting-started',
    path: [
        '/admin/settings/certification',
        '/admin/settings/system',
        '/admin/settings/bundle-show'
    ],
    // disabled: user?.user_status !== 3 ? true : false,
}]);
const is_selected = ref('');
const is_expanded = ref(false);
const saveSelected = (label) => {
    is_selected.value = label;
};
// const updateDefaultOpen = computed(() => {
//     items.value.forEach(item => {
//         if (item.label === 'course') {
//             item.defaultOpen = route.path === '/admin/courses' || route.path === '/admin/courses/bundle' || route.path === '/admin/courses/category' || route.path === '/admin/courses/tags';
//         } else if (item.label === 'Users') {
//             item.defaultOpen = route.path === '/admin/students' || route.path === '/admin/teachers';
//         } else if (item.label === 'settings') {
//             item.defaultOpen = route.path === '/admin/settings/certiiCate' || route.path === '/admin/settings/system';
//         }
//     });
//     if (user?.user_status !== 3) {
//         items.value = items.value.filter(x => x.label === 'course')
//     }
// });
const checkSideBar = (path, arr) => arr.includes(path);
// defineShortcuts({
//     o: is_selected.value = ''
// });

onMounted(() => {
    if (user?.user_status !== 3) {
        items.value = items.value.filter(x => x.label === 'course')
    }
})
</script>
<template>
    <div class="min-w-[250px] h-[100vh] bg-white border-r-2 pt-5 px-2">
        <div class="flex w-[250px] flex-col ">
            <nuxt-link to="/admin" class="px-4 py-2 flex items-center hover:bg-gray-200 text-black ali"
                :class="{ 'is_expanded': $route.path === '/admin' }">
                <u-icon name="i-heroicons-home" class="w-5 h-5 text-gray-800"></u-icon>
                <span class="px-3">
                    Dashboard
                </span>
            </nuxt-link>
            <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                <template #default="{ item, open }">
                    <UButton color="gray" variant="ghost" class="border-none hover:bg-gray-200"
                        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                        :class="checkSideBar($route.path, item.path) || item.label == is_selected ? 'is_expanded' : ''"
                        @click="saveSelected(item.label)">
                        <template #leading>
                            <div class="w-7 h-7 rounded-full flex items-center justify-center -my-1">
                                <UIcon :name="item.icon" class="w-5 h-5 text-gray-800 dark:text-gray-900" />
                            </div>
                        </template>

                        <span class="text-base font-normal">{{ item.label }}</span>

                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']" />
                        </template>
                    </UButton>
                </template>
                <template #getting-Courses>
                    <nuxt-link to="/admin/courses" class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/courses' }">
                       course
                    </nuxt-link>
                    <nuxt-link to="/admin/courses/bundle"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/courses/bundle' }">
                        coursesBundles
                    </nuxt-link>
                    <nuxt-link v-if="user?.user_status === 3" to="/admin/courses/category"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/courses/category' }">
                        category
                    </nuxt-link>
                    <nuxt-link to="/admin/courses/tags"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/courses/tags' }">
                        Tags
                    </nuxt-link>
                </template>
                <template #getting-Users v-if="user?.user_status === 3">
                    <nuxt-link to="/admin/students" class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/students' }">
                        User
                    </nuxt-link>
                    <nuxt-link to="/admin/teachers" class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/teachers' }">
                        instructor
                    </nuxt-link>
                </template>
                <template #getting-started v-if="user?.user_status === 3">
                    <nuxt-link to="/admin/settings/certification"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/settings/certification' }">
                        Setup_certificate
                    </nuxt-link>
                    <nuxt-link to="/admin/settings/system"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/settings/system' }">
                        Setup_educational_institution
                    </nuxt-link>
                    <nuxt-link to="/admin/settings/bundle-show"
                        class="px-11 py-2 flex items-center hover:bg-gray-200 text-black"
                        :class="{ 'is_expanded': $route.path === '/admin/settings/bundle-show' }">
                        setup_bundle_show
                    </nuxt-link>
                </template>

            </UAccordion>
        </div>
    </div>
</template>

<style scoped>
.is_expanded {
    color: orangered;
}

.is_expanded span {
    color: orangered;
}
</style>