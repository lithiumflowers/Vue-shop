<template lang="">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRediect(item.path)">
        {{ $t(`menus.${item.name}`) }}</span
      >
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter
const breadcrumbList = ref([])

const initBreadcurmList = () => {
  breadcrumbList.value = route.matched
}
const handleRediect = (path) => {
  router.push(path)
}
watch(
  route,
  () => {
    initBreadcurmList()
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
