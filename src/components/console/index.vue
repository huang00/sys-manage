<template>
    <el-container>
        <el-aside width="200px">
          <app-menu :menuName = '"console"'></app-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import AppMenu from '@/components/public/Menu'

export default {
    components: {
        AppMenu
    },
    created() {}
}
</script>