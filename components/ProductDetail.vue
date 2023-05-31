<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="my-7 text-4xl">
          {{ product.title }}
        </h2>
        <p class="my-7 text-xl">Price - ${{ product.price }}</p>
        <h3 class="mb-4 border-b-2 pb-2 font-bold">Product description:</h3>
        <p class="mb-7">
          {{ product.description }}
        </p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
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

const props = defineProps<{
  product: Product
}>()
const { product } = toRefs(props)
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
