<template>
  <div class="login">
    <div class="login-box">
      <p class="login-title">生产管理系统</p>
      <div class="login-content">
        <p class="login-content-subtitle">登录账号</p>
        <Form class="login-content-main" :model="loginData" :rules="loginRules" ref="loginData">
          <FormItem prop="username">
            <Input placeholder="请输入登陆账号" v-model="loginData.username">
            <span slot="prepend">登陆账号：</span>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input placeholder="请输入登陆密码" type="password" v-model="loginData.password">
            <span slot="prepend">登陆密码：</span>
            </Input>
          </FormItem>
          <FormItem prop="code" class="code">
            <Row :gutter="16">
              <Col span="16">
                <Input placeholder="请输入验证码" v-model="loginData.code">
                <span slot="prepend">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</span>
                </Input>
              </Col>
              <Col span="8">
                <img
                  :src="imgCodeURL"
                  @click="changeImgCode"
                  alt="无法加载"
                  class="codeImg cursor">
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button class="submit-btn" @click="login('loginData')">立即登录</Button>
          </FormItem>
        </Form>
        <Row class="login-content-footer">
          <Col :span="12">
            <span class="left cursor register" @click="turnRegister">立即注册</span>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    let isMobile = function(value) {
      return /^[1][3,4,5,7,8][0-9]{9}$/i.test(value);
    }

    let usernameValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      } /*else if (!isMobile(value)) {
              return callback(new Error('请检查账号格式是否正确'));
          }*/ else {
        callback();
      }
    }

    let passwordValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    }

    let codeValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      } else if (value.length !== 4) {
        return callback(new Error('验证码必须为4位'));
      } else {
        callback();
      }
    }
    return {
      loginData: {
        username: 'admin',
        password: '123456',
        code: '',
        encodeCode: '',
      },
      imgCodeURL: '',
      loginRules: {
        username: [
          { required: true, validator: usernameValidator, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: passwordValidator, trigger: 'blur' }
        ],
        code: [
          { required: true, validator: codeValidator, trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let loginData = new FormData();
          loginData.append('username', this.loginData.username);
          loginData.append('password', this.loginData.password);
          loginData.append('code', this.loginData.code);
          loginData.append('encodeCode', this.loginData.encodeCode);
          console.log(loginData)
          // this.$router.push({ name: 'Workbench' });
          this.$fetch.post('/user/login', loginData).then(res => {
            if (res.data.code === 0) {
              this.$Message.success('登录成功');
              this.$store.commit('setToken', JSON.stringify(res.data.data));
              // this.getRole();
              this.$router.push({ name: 'Workbench' });
            } else {
              this.$Message.warning(res.data.description);
              this.loginData.code = '';
              this.changeImgCode();
            }
          });
        }
      });
    },

    changeImgCode() {
      // let afterImgCodeURL = new Date().getTime();
      // this.$fetch.get('/user/getVerifyCode').then(res => {
      //   console.log(res)
      //   this.imgCodeURL = res.data.picture
      //   this.loginData.encodeCode = res.data.encodeCode
      // })
    },
    turnRegister() {
      this.$router.push({ name: 'Register' })
    },
    removeToken() {
      localStorage.removeItem('LOGIN_TOKEN')
    },
    removeTabs() {
      localStorage.removeItem('tagNaveList')
    }
  },
  created() {
    this.changeImgCode();
    this.removeToken();
    this.removeTabs();
  }
};

</script>

<style lang="less" scoped>
  .login {

    /deep/.ivu-input-group-prepend {
      background-color: transparent;
      width: 85px;
      span {
        display: inline-block;
        width: 70px;
      }
    }

    /deep/.code>.ivu-form-item-content {
      height: 36px;
    }

    .submit-btn {
      width: 100%;
      border: 1px solid rgba(0, 60, 120, 1);
      font-size: 12px;
      color: #fff;
      background-color: rgba(0, 60, 120, 1);
    }

    .codeImg {
      width: 100%;
      height: 36px;
      border-radius: 4px;
    }

    .login-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .login-title {
        margin-bottom: 20px;
        text-align: center;
        font-size: 30px;
      }

      .login-content {
        width: 450px;
        padding: 20px 30px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 2px 4px 20px #ccc;

        .login-content-subtitle {
          float: left;
          font-size: 26px;
          line-height: 70px;
          font-weight: 400;
        }

        .login-content-footer {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 30px;

          .register,
          .forget {
            &:hover {
              color: rgba(0, 60, 120, 1);
            }
          }
        }
      }
    }
  }
</style>
