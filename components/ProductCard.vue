<template>
  <!-- <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="m-4 truncate font-bold text-gray-500">
      {{ product.title }}
    </p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div> -->

  <n-card hoverable>
    <template #cover>
      <n-skeleton v-if="isLoading" text width="30%" />
      <img v-else :src="product.image" alt="product thumb" class="thumb" />
    </template>
    <n-skeleton v-if="isLoading" text :repeat="3" />
    <div v-else>
      <p class="m-4 truncate font-bold text-gray-500">
        {{ product.title }}
      </p>
      <NuxtLink :to="`/products/${product.id}`">
        <n-button strong type="tertiary" class="my-2"> View Details </n-button>
      </NuxtLink>
    </div>
  </n-card>
</template>

<script setup lang="ts">
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: object
}

// const { product } = defineProps(['product']);
const props = defineProps<{
  product: Product
}>()

const { product } = toRefs(props)

const isLoading = ref(true)
watchEffect(() => {
  if (product.value.id) {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  }
})
</script>

<style scoped>
.thumb {
  max-height: 120px;
  object-fit: cover;
  max-width: 100%;
  margin: 0 auto;
}
</style>
