<template>
  <div class="bg-gray-200 h-screen ">
    <div>
      <UModal title="Modal with title">
        <UButton label="Open" color="neutral" variant="subtle" />

        <template #content>
          <Placeholder class="h-48 m-4"/>
          <div>
            <p>heloow</p>
          </div>
        </template>
      </UModal>
    </div>


  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
})
</script>

<style lang="scss" scoped></style>