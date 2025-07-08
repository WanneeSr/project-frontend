<template>
    <div class="h-96">
        <MonacoEditor v-model="value" lang="python" :options="{ theme: 'vs-dark' }" :style="{ width: '100%', height: '100%' }"/>
        <p>{{ value }}</p>

    </div>
</template>

<script lang="ts" setup>
const value = ref('')
</script>