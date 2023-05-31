<script setup>
import { useLoadingBar } from 'naive-ui'
const loadingBar = useLoadingBar()
const loading = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 1000)
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto flex justify-between p-4">
      <NuxtLink to="/" class="font-bold"> Nuxt Dojo </NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/" @click="loading"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="loading"> About </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" @click="loading"> Products </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/naiveui" @click="loading">NaiveUI Demo</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
