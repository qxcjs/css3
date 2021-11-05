<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" class="login-form">
            <h2 class="login-title">管理系统</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="false"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    username: "",
                    password: ""
                },
                loginRules: {
                    username: [
                        {required: true, message: "用户名不能为空", trigger: ['blur', 'change']},
                        {min: 5, max: 16, message: "用户名5-16位", trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 6, max: 15, message: "密码6-15位", trigger: 'blur'}
                    ]

                }
            };
        },
        methods: {
            login() {
                console.log(`submit : ${JSON.stringify(this.loginForm)}`);
                this.$refs["loginForm"].validate(valid => { // 验证通过为true，有一个不通过就是false
                    if (valid) {
                        this.$ajax.post(
                            this.$api.Login.login,
                            this.loginForm
                        ).then((resp) => {
                            let user = resp.data.data;
                            console.log(`resp : ${JSON.stringify(user)}`);
                            localStorage.setItem("user", JSON.stringify(user))
                            this.$router.push("/")
                        }).catch((resp) => {
                            console.log(resp);
                            this.$message({ // 使用elementui的消息提示
                                message: resp.msg,
                                type: "warning"
                            })
                        })
                    } else {
                        this.$message.error('验证未通过'); // 使用elementui的消息提示
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    /* 背景 */
    .login-container {
        /*
            加了绝对定位后 height 100% 才生效，
            绝对定位后的子元素宽高也是参考父元素，默认会被内容撑开，如果父元素没有设置宽高且没有内容，则看不到
        */
        position: absolute;
        width: 100%;
        height: 100%;
        background: #666666;
    }

    .login-form {
        width: 350px;
        margin: 160px auto;
        background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
        padding: 30px;
        border-radius: 20px; /* 圆角 */
    }

    /* 标题 */
    .login-title {
        color: #303133;
        text-align: center;
    }
</style>