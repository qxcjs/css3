<template>
    <div class="login-container">
        <el-form ref="loginForm" :inline="false" :model="loginForm" :rules="loginRules" label-width="80px"
                 class="login-form">
            <h2 class="login-title">管理系统</h2>
            <el-form-item label="用户名" prop="username">
                <el-input class="login-input" v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input class="login-input" type="password" v-model="loginForm.password" placeholder="密码"
                          autocomplete="false"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
        <website-record></website-record>
    </div>
</template>

<script>
    import WebsiteRecord from "./WebsiteRecord";

    export default {
        name: "login",
        components: {WebsiteRecord},
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
        background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
    }

    .login-form {
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -175px;
        width: 350px;
        //background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
        background-color: #E4E4E1;
        background-image: radial-gradient(at top center, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.03) 100%), linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(143, 152, 157, 0.60) 100%);
        background-blend-mode: normal, multiply;
        //background-color: rgb(255, 255, 255, 0.6); /* 透明背景色 */
        border-radius: 20px; /* 圆角 */
    }

    .el-form-item {
        margin-right: 25px;
    }

    .el-input {
        //padding: 30px 30px 30px 0;
        //box-shadow: inset 0 0 10px 15px #9bc5c3;
    }

    /* 如果你修改不成功，那么可能是，style标签上加上scoped属性，表示它的样式作用于当下模块，.el-inout__inner是一个全局属性。
        可以通过自定义全局属性修改 */
    /*
        .el-input__inner {
            background-color: #9bc5c3 !important;
        }
    */

    /* 标题 */
    .login-title {
        color: #3B3535;
        text-align: center;
        padding-bottom: 10px;
    }

    .website-record {
        position: absolute;
        bottom: 10px;
    }

</style>