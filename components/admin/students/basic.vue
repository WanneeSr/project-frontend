<template>
    <div>
        <div class="bg-slate-200 p-4 rounded-lg shadow-md mb-4">
            <p>
                <strong>Student Basic Information</strong>
            </p>
            <p>Firstname :</p>
            <UInput v-model="student.first_name" placeholder="First Name" class="mb-2" />
            <p>Lastname :</p>
            <UInput v-model="student.last_name" placeholder="Last Name" class="mb-2" />
            <p>Email :</p>
            <UInput v-model="student.email" placeholder="Email" class="mb-2" />
            <p>Phone :</p>
            <UInput v-model="student.phone" placeholder="Phone" class="mb-2" />            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>