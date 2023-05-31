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
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam aut quod ad
      explicabo harum optio tempore ratione delectus nostrum?
    </p>
    <div>
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <div class="light-green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
        <n-gi>
          <div class="light-green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
      </n-grid>
    </div>
    <div>
      <n-button class="mt-4" @click="loading"> Start Loading </n-button>
    </div>
    <div>
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-card class="mt-4 max-w-xs">
            <template #header>
              <n-skeleton v-if="loading" text width="60%" />
              <template v-else> I'm OK </template>
            </template>
            <n-skeleton v-if="loading" text :repeat="3" />
            <template v-else>
              <p>Hello World</p>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
    <div class="mt-4">
      <Icon name="uil:github" color="black" size="40" />
      <Icon name="majesticons:airplane-flight-2-line" size="40" />
    </div>
    <div class="mt-4 flex gap-4">
      <n-alert title="Back in the U.S.S.R.">
        <template #icon>
          <Icon name="zondicons:headphones" />
        </template>
        Well the Ukraine girls really knock me out<br />
        They leave the West behind<br />
        And Moscow girls make me sing and shout<br />
        That Georgia's always on my mind<br />
        Aw come on!
      </n-alert>
      <n-collapse accordion>
        <n-collapse-item title="right" name="1">
          <div>good</div>
        </n-collapse-item>
        <n-collapse-item title="right" name="2">
          <div>good</div>
        </n-collapse-item>
      </n-collapse>
    </div>
    <FooterItem class="mt-6" />
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
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
