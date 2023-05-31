<script setup></script>
<template>
  <NLoadingBarProvider>
    <div>
      <NavBar />
      <!-- output the page content -->
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </NLoadingBarProvider>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
