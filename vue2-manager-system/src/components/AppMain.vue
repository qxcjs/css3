<template>
    <div class="main">
        <!-- v-show='$route.path !== "/home" 不显示首页的导航 ，不等于/home才显示-->
        <el-breadcrumb v-show='$route.path !== "/home"' separator="/">
            <!--
                $route.meta.title 是我们在路由里定义的meta里的title值，$route.path 路由，点击会跳转到对应的路由上 ，这里我们也动态的获取
            -->
            <el-breadcrumb-item class="line" :to="{ path:  $route.path }">{{ $route.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
        <website-record></website-record>
    </div>
</template>

<script>
    import WebsiteRecord from "../views/WebsiteRecord";

    export default {
        name: "AppMain",
        components: {WebsiteRecord}
    }
</script>

<style scoped lang="less">
    .el-breadcrumb {
        height: 10px;
        padding: 20px;
        border-radius: 4px; /* 圆角 */
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* element提供的边框 */
    }

    /* 左边的那条绿线 */
    .line {
        border-left: 3px solid #31c17b;
        padding-left: 10px;
    }
</style>