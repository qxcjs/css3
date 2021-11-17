<template>
    <div class="website-record">
        <el-link :underline="false" href="https://beian.miit.gov.cn/" target="_blank"><span
            style="color: black">备案号:</span>
            粤ICP备2021134253号-1
        </el-link>
        <el-link :underline="false"
                 href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602006261" target="_blank">
            <img src="../assets/beian.png" style="vertical-align: middle"/>
            粤公网安备 44030602006261号
        </el-link>
    </div>
</template>

<script>
    export default {
        name: "WebsiteRecord"
    }
</script>

<style scoped lang="less">
    .website-record {
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    .el-link {
        margin: 0 15px;
        vertical-align: middle;
        color: black !important;
    }

</style>