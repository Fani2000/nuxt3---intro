<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <div class="container flex-1 mx-auto p-4">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
