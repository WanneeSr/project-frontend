<script setup lang="ts">
import AdminDashboard from '../components/admin/dashboard'
// import AdminUsersInfo from '~/components/AdminUsersInfo.vue'
// import AdminCoursesInfo from '~/components/AdminCoursesInfo.vue'
</script>

<template>
  <UAccordion type="multiple">
    <UAccordionItem label="Dashboard" icon="i-lucide-smile">
      <AdminDashboard />
    </UAccordionItem>
    <!-- <UAccordionItem label="User Management" icon="i-lucide-users">
      <AdminUsersInfo />
    </UAccordionItem>
    <UAccordionItem label="Course Management" icon="i-lucide-book">
      <AdminCoursesInfo />
    </UAccordionItem> -->
  </UAccordion>
</template>
