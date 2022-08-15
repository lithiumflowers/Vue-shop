<template lang="">
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="50" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const squareUrl = ref(
  'https://wx1.sinaimg.cn/mw2000/0061bGKWgy1h4zbhdghyej30cl0ge76r.jpg'
)
const logout = () => {
  store.dispatch('app/logout')
}
</script>
<style lang=""></style>
