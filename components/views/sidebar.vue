<script setup>
        
        </script>
<template>
    <div>
        <UAccordion type="multiple" :items="items" >
        <template #header="{ item }">
          <div class="flex items-center gap-2">
            <UIcon :icon="item.icon" size="lg" />
            <span class="text-lg font-semibold">{{ item.title }}</span>
          </div>
        </template>
        <template #content="{ item }">
          <div class="p-4 bg-gray-100 rounded-md shadow-md">
            <p>{{ item.content }}</p>
          </div>
        </template>
      </UAccordion>
    </div>
</template>
