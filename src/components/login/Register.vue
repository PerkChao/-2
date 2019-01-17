<template>
  <div class="register">
    <div class="register-box">
      <Card :bordered="false" dis-hover class="register-content">
        <div slot="title" class="register-content-subtitle">
          <span>注册</span>
          <span class="register-to-login cursor" @click="turnLogin">
              <span style="color: #999">已有账号，</span>
              <span>立即登陆</span>
          </span>
        </div>
        <Tabs :animated="false" class="register-tabs" @on-click="changeTab">
          <TabPane label="企业成员注册">
            <Form class="login-content-main" :model="corporateMembersData" :rules="corporateMembersRules" ref="corporateMembersData">
              <FormItem prop="name">
                <Input placeholder="请输入真实姓名" v-model="corporateMembersData.name">
                <span slot="prepend">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                </Input>
              </FormItem>
              <FormItem prop="phone">
                <Input placeholder="请输入个人手机" v-model="corporateMembersData.phone">
                <span slot="prepend">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</span>
                </Input>
              </FormItem>
              <FormItem prop="account">
                <Input placeholder="请设定账号汉字与字母组合" v-model="corporateMembersData.account">
                <span slot="prepend">登陆账号：</span>
                </Input>
              </FormItem>
              <FormItem prop="email">
                <Input placeholder="请输入邮箱，用于找回密码" v-model="corporateMembersData.email">
                <span slot="prepend">账号邮箱：</span>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input placeholder="请输入登陆密码" type="password" v-model="corporateMembersData.password">
                <span slot="prepend">输入密码：</span>
                </Input>
              </FormItem>
              <FormItem prop="confirmPassword">
                <Input placeholder="请再次输入登陆密码" type="password" v-model="corporateMembersData.confirmPassword">
                <span slot="prepend">确认密码：</span>
                </Input>
              </FormItem>
              <FormItem prop="inviteCode">
                <Input placeholder="请联系企业管理员获取企业邀请码" v-model="corporateMembersData.inviteCode">
                <span slot="prepend">邀&nbsp;&nbsp;请&nbsp;&nbsp;码：</span>
                </Input>
              </FormItem>
              <FormItem prop="verifyCode">
                <Row :gutter="16">
                  <Col span="16">
                    <Input placeholder="请输入验证码" v-model="corporateMembersData.verifyCode">
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
                <Button class="submit-btn" @click="checkBeforeSubmit('corporateMembersData')">提交企业管理员审核</Button>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="企业注册">
            <Form class="login-content-main" :model="corporateData" :rules="corporateRules" ref="corporateData">
              <FormItem prop="tenantName">
                <Input placeholder="请输入企业名称" v-model="corporateData.tenantName">
                <span slot="prepend">企业名称：</span>
                </Input>
              </FormItem>
              <FormItem prop="name">
                <Input placeholder="请输入真实姓名" v-model="corporateData.name">
                <span slot="prepend">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                </Input>
              </FormItem>
              <FormItem prop="phone">
                <Input placeholder="请输入个人手机" v-model="corporateData.phone">
                <span slot="prepend">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</span>
                </Input>
              </FormItem>
              <FormItem prop="account">
                <Input placeholder="请设定账号汉字与字母组合" v-model="corporateData.account">
                <span slot="prepend">登陆账号：</span>
                </Input>
              </FormItem>
              <FormItem prop="email">
                <Input placeholder="请输入邮箱，用于找回密码" v-model="corporateData.email">
                <span slot="prepend">账号邮箱：</span>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input placeholder="请输入登陆密码" type="password" v-model="corporateData.password">
                <span slot="prepend">输入密码：</span>
                </Input>
              </FormItem>
              <FormItem prop="confirmPassword">
                <Input placeholder="请再次输入登陆密码" type="password" v-model="corporateData.confirmPassword">
                <span slot="prepend">确认密码：</span>
                </Input>
              </FormItem>
              <FormItem prop="verifyCode">
                <Row :gutter="16">
                  <Col span="16">
                    <Input placeholder="请输入验证码" v-model="corporateData.verifyCode">
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
                <Button class="submit-btn" @click="checkBeforeSubmit('corporateData')">提交运营管理员审核</Button>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    let isMobile = value => /^[1][3,4,5,7,8][0-9]{9}$/i.test(value);
    let isAccount = value => /^(?=.*[a-zA-Z])(?=.*[\u4e00-\u9fa5]).{0,}$/.test(value);
    let isEmail = value => /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
    let isPwd = value => /^[a-zA-Z](?=.*[a-zA-Z0-9_]).{5,19}$/.test(value);

    let nameValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('姓名不能为空'));
      else callback();
    };
    let phoneValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('手机号码不能为空'));
      else if (!isMobile(value)) return callback(new Error('请检查手机号码格式是否正确'));
      else callback();
    };
    let accountValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('登陆账号不能为空'));
      else if (!isAccount(value)) return callback(new Error('登陆账号必须为汉字与字母组合'));
      else callback();
    };
    let emailValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('邮箱不能为空'));
      else if (!isEmail(value)) return callback(new Error('请检查邮箱格式是否正确'));
      else callback();
    };
    let passwordValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('密码不能为空'));
      else if (!isPwd(value)) return callback(new Error('密码只能以字母开头，长度在6~20之间，只能包含字母、数字和下划线'));
      else {
        if (this.activeTab === 0 && this.corporateMembersData.confirmPassword !== '') this.$refs.corporateMembersData.validateField('confirmPassword');
        else if (this.activeTab === 1 && this.corporateData.confirmPassword !== '') this.$refs.corporateData.validateField('confirmPassword');
        callback();
      }
    };
    let confirmPasswordValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('确认密码不能为空'));
      else if (!isPwd(value)) return callback(new Error('密码只能以字母开头，长度在6~20之间，只能包含字母、数字和下划线'));
      else if (this.activeTab === 0 && value !== this.corporateMembersData.password) return callback(new Error('密码不一致'));
      else if (this.activeTab === 1 && value !== this.corporateData.password) return callback(new Error('密码不一致'));
      else callback();
    };
    let inviteCodeValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('邀请码不能为空'));
      else callback();
    };
    let verifyCodeValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('验证码不能为空'));
      else if (value.length !== 4) return callback(new Error('验证码必须为4位'));
      else callback();
    };
    let tenantNameValidator = (rule, value, callback) => {
      if (!value) return callback(new Error('企业名称不能为空'));
      else callback();
    };
    return {
      imgCodeURL: '',
      activeTab: 0,
      // 企业成员
      corporateMembersData: {
        name: '',
        phone: '',
        account: '',
        email: '',
        password: '',
        confirmPassword: '',
        inviteCode: '',
        verifyCode: ''
      },
      corporateMembersRules: {
        name: [{ required: true, validator: nameValidator, trigger: 'blur' }],
        phone: [{ required: true, validator: phoneValidator, trigger: 'blur' }],
        account: [{ required: true, validator: accountValidator, trigger: 'blur' }],
        email: [{ required: true, validator: emailValidator, trigger: 'blur' }],
        password: [{ required: true, validator: passwordValidator, trigger: 'blur' }],
        confirmPassword: [{ required: true, validator: confirmPasswordValidator, trigger: 'blur' }],
        inviteCode: [{ required: true, validator: inviteCodeValidator, trigger: 'blur' }],
        verifyCode: [{ required: true, validator: verifyCodeValidator, trigger: 'blur' }]
      },
      // 企业
      corporateData: {
        tenantName: '',
        name: '',
        phone: '',
        account: '',
        email: '',
        password: '',
        confirmPassword: '',
        verifyCode: ''
      },
      corporateRules: {
        tenantName: [{ required: true, validator: tenantNameValidator, trigger: 'blur' }],
        name: [{ required: true, validator: nameValidator, trigger: 'blur' }],
        phone: [{ required: true, validator: phoneValidator, trigger: 'blur' }],
        account: [{ required: true, validator: accountValidator, trigger: 'blur' }],
        email: [{ required: true, validator: emailValidator, trigger: 'blur' }],
        password: [{ required: true, validator: passwordValidator, trigger: 'blur' }],
        confirmPassword: [{ required: true, validator: confirmPasswordValidator, trigger: 'blur' }],
        verifyCode: [{ required: true, validator: verifyCodeValidator, trigger: 'blur' }]
      }
    }
  },
  methods: {
    turnLogin() {
      this.$router.push({ name: 'Login' })
    },
    changeImgCode() {
      let afterImgCodeURL = new Date().getTime();
      // this.imgCodeURL = `http://10.150.81.69:11000/user/getVerifyCode?${afterImgCodeURL}`;
      this.imgCodeURL = `http://zuul-server-test.obaymax.com/user/getVerifyCode?${afterImgCodeURL}`;
    },
    changeTab(name) {
      this.activeTab = name;
      this.changeImgCode();
    },
    checkBeforeSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) this.register();
      });
    },
    register() {
      this.$http.post(`/user/${this.activeTab === 0 ? 'staffSignUp' : 'companySignUp'}`, this.activeTab === 0 ? this.corporateMembersData : this.corporateData).then(res => {
        if (res.data.code === 0) {
          this.$Message.success(`${this.activeTab === 0 ? '企业成员' : '企业'}注册成功`);
          this.$router.push({ name: 'Login' });
        } else {
          this.activeTab === 0 ? this.corporateMembersData.verifyCode = '' : this.corporateData.verifyCode = '';
          this.$Message.warning(res.data.description);
          this.changeImgCode();
        }
      });
    }
  },
  created() {
    this.changeImgCode();
  }
}
</script>

<style lang="less" scoped>
  .register {
    /deep/.ivu-input-group-prepend {
      background-color: transparent;
      width: 85px;
      span {
        display: inline-block;
        width: 70px;
      }
    }
    /deep/.ivu-form-item-content {
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
    .register-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .register-content {
        box-shadow: 2px 4px 20px #ccc;
        border-radius: 8px;
        width: 500px;
        padding: 20px 30px;
        border-radius: 8px;
        background: #fff;
        /deep/.ivu-card-head {
          border-bottom-width: 2px;
        }
        .register-content-subtitle {
          font-size: 26px;
          font-weight: 400;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .register-to-login {
            font-size: 14px;
            font-weight: 300;
            color: #2c3e50;
            &:hover {
              color: rgba(0, 60, 120, 1);
            }
          }
        }
        /deep/.ivu-card-body {
          padding: 10px 0 0 0;
          .register-tabs {
            .ivu-tabs-bar {
              border-bottom-width: 0;
              .ivu-tabs-ink-bar {
                display: none;
              }
              .ivu-tabs-tab {
                color: #d7d7d7;
              }
              .ivu-tabs-tab-active {
                color: #2c3e50;
                font-size: 26px;
              }
            }
            .ivu-tabs-tabpane {
              padding: 0 20px;
            }
          }
        }
      }
    }
  }
</style>
