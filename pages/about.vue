<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<template>
  <div>
    <h2>about</h2>
    <p>Server Side Rendering 測試</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
