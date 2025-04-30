<template>
    <div>
        <UTabs
            :tabs="tabs1"
            :selected="selectedTab"
            @update:selected="selectedTab = $event"
        >
        <div>
            <AdminStudentsBasic/>
        </div>
        </UTabs>
        <UTabs
            :tabs="tabs2"
            :selected="selectedTab"
            @update:selected="selectedTab = $event"
        >
        <div>
            <AdminStudentsBasic/>
        </div>
        </UTabs>
        <UTabs
            :tabs="tabs3"
            :selected="selectedTab"
            @update:selected="selectedTab = $event"
        >
        <div>
            <AdminStudentsFinish/>
        </div>
        </UTabs>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
})
</script>
