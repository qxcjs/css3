<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>

<script>
    import AppHeader from "./AppHeader";
    import AppMain from "./AppMain";
    import AppNavbar from "./AppNavbar";

    export default {
        name: "Layout",
        components: {AppHeader, AppMain, AppNavbar}
    }
</script>

<style scoped lang="less">
    .header {
        position: absolute;
        line-height: 50px;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: #2d3a4b;
    }

    /* 左侧样式 */
    .navbar {
        position: absolute;
        width: 230px;
        top: 50px; /* 距离上面50像素 */
        left: 0px;
        bottom: 0px;
        overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
        background-color: #545c64;
    }

    /* 主区域 */
    .main {
        position: absolute;
        top: 50px;
        left: 230px;
        bottom: 0px;
        right: 0px; /* 距离右边0像素 */
        padding: 10px;
        overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    }

</style>