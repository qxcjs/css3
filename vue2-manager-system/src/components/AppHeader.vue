<template>
    <div class="header">
        <a href="#/">
            <i class="el-icon-menu logo"></i>
            <span class="title">管理系统</span>
        </a>
        <el-dropdown @command="handleCommand"><!--  绑定指令,在methods里定义-->
            <span class="el-dropdown-link">
                您好<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <!-- icon是修改图标 ，command是点击后传给方法的值-->
                <el-dropdown-item icon="el-icon-edit" command="edit">>修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-operation" command="quit">>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        methods: {
            handleCommand(command) {
                this.$message(`点击了${command}`)
                switch (command) {
                    case 'edit':
                        console.log('修改密码!')
                        break;
                    case 'quit': {
                        console.log('退出登录!')
                        // 退出成功，清除本地数据
                        localStorage.removeItem('user')
                        // 回到登录页面，重新登录
                        this.$router.push('/login')
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    a {
        vertical-align: middle; /* 居中 */
        padding-left: 20px;
    }

    .logo {
        color: white;
        padding: 0px 10px 0px 40px;
    }

    .title {
        color: white;
    }

    .el-dropdown {
        float: right; /* 浮动在右边 */
        margin-right: 40px; /* 靠右40px */
    }

    .el-dropdown-link {
        color: white;
        cursor: pointer; /* 鼠标放上去是手的形状 */
    }
</style>