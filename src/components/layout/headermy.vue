<template>
  <div class="header">
    <div class="home-header">
      <div class="logo visibility">精锐钟表配件厂生产管理系统</div>
      <!--<div class="header-btn fl">-->
        <!--<ul class="clearfix">-->
          <!--<li class="fl" :class="{'is-active':putClass==1}" @click="setChooseType(1)">测评服务</li>-->
          <!--<li class="fl" :class="{'is-active':putClass==2}" @click="setChooseType(2)">自测管理</li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="header-navi">-->
        <!--<ul>-->
          <!--<li>资源管理</li>-->
          <!--<li>工程管理</li>-->
          <!--<li @click="turnOms">运营管理中心</li>-->
        <!--</ul>-->
      <!--</div>-->
      <div class="header-user">
        <!--<div class="header-theme color-white" @click="changeTheme = true">换肤</div>-->
        <Poptip trigger="hover" class="header-msg" placement="bottom-end">
          <Badge :count="10">
            <Icon type="ios-notifications" class="color-white" />
          </Badge>
          <div slot="content" class="header-msg-box">
            <ul>
              <li class="clearfix clearfix-box">
                <p class="fl single-p">全部消息</p>
                <p class="fr single-p">全部已读</p>
              </li>
              <li>
                <div class="clearfix-box">
                  <div>
                    <p>需要做一些简单设置，以便您后期登录</p>
                  </div>
                  <div class="clearfix">
                    <p class="fl">2018-10-26</p>
                    <p class="fr">李四</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="clearfix-box">
                  <div>
                    <p>需要做一些简单设置，以便您后期登录</p>
                  </div>
                  <div class="clearfix">
                    <p class="fl">2018-10-26</p>
                    <p class="fr">李四</p>
                  </div>
                </div>
              </li>
              <li class="textcenter" @click="turnNewList">
                <p class="single-p">查看更多</p>
              </li>
            </ul>
          </div>
        </Poptip>
        <Poptip trigger="hover" class="header-info" placement="bottom-end" @click.native="turnPersonalCenter('Information')">
          <Icon type="md-person" class="color-white"  />
          <div slot="content" class="header-info-box">
            <ul class="textcenter">
              <li @click="turnPersonalCenter('Information')">
                <p v-if="userInfo" v-html="userInfo.name"></p>
                <p v-if="userInfo" v-show="!!userInfo.email">{{userInfo.email}}</p>
              </li>
              <li v-for="(item, index) in menuList" :key="index" @click="turnPersonalCenter(item.name)">
                {{ item.title }}
              </li>
              <li @click="turnLogin">退出登录</li>
            </ul>
          </div>
        </Poptip>
      </div>
    </div>
    <!--<Drawer title="更换主题" :closable="false" v-model="changeTheme">-->
      <!--<RadioGroup @on-change="changeColor">-->
        <!--<Radio label="1">深蓝</Radio>-->
        <!--<Radio label="2">酷黑</Radio>-->
        <!--<Radio label="3">纯白</Radio>-->
      <!--</RadioGroup>-->
    <!--</Drawer>-->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "header",
  data() {
    return {
      // changeTheme: false,
      menuList: [
        { title: '个人资料', name: 'Information' },
        { title: '修改密码', name: 'VirtualTeam' },
      ]
    }
  },
  computed: {
    // putClass(val) {
    //   return !!this.$store.state.isChooseType?this.$store.state.isChooseType:1
    // },
    userInfo(val) {
      return !!this.$store.state.user?JSON.parse(this.$store.state.user):JSON.parse(localStorage.getItem('USER_INFO'))
    }
  },
  methods: {
    ...mapMutations([
      // 'setChooseType',
      'setPCenterActiveName'
    ]),
    turnLogin() {
      // this.$fetch.get('/signOut').then(res => {
      //     if (res.data.code == 0) {
      this.$router.push({ name: 'Login' })
      //     }
      // })
    },
    // turnOms() {
    //   window.open('http://grid-fe-oms-test.obaymax.com/oms/')
    // },
    turnPersonalCenter(activeName) {
      this.$router.push({ name: 'PersonalCenter' });
      this.setPCenterActiveName(activeName);
    },
    turnNewList() {
      this.$router.push({ name: 'NewsList' })
    },
    changeColor(num) {
      document.getElementById('app').className ='theme'+num ;
    }
  },
  created() {
  }
}
</script>
<style lang="less" scoped>
  .color-white {
    color: white;
  }
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 65px;
    margin: 0;
    background: rgba(250, 250, 250, 1);
    z-index: 99;

    .home-header {
      height: 65px;
      background-color: rgba(0, 60, 120, 1);
      overflow: hidden;

      .logo {
        position: absolute;
        left: 30px;
        top: 0;
        /*width: 134px;*/
        height: 24px;
        border-width: 0;
        line-height: 70px;
        color: #fff;
        font-size: 16px;
      }

      .header-btn {
        font-size: 16px;
        margin-left: 200px;
        color: white;
        height: 45px;
        line-height: 45px;
        margin-top: 10px;
        background: #00499f;
        border-radius: 50px;

        ul {
          li {
            padding: 0 10px;
            cursor: pointer;

          }
        }
      }

      .is-active {
        background: white;
        color: black;
        padding: 0 10px;
        border-radius: 50px;
        transition: .3s cubic-bezier(0, 0, 0, 1);
      }

      .header-navi {
        float: left;

        ul {
          list-style-type: none;
          overflow: hidden;
          line-height: 65px;

          li {
            float: left;
            color: white;
            padding: 0 20px;
            font-size: 16px;
            cursor: pointer;

            &:hover {
              color: #409EFF;
              background: #00356d;
            }
          }
        }
      }

      .header-user {
        cursor: pointer;
        color: white;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);

        .header-theme {
          float: left;
          padding: 0 20px;
          font-size: 16px;
          &:hover {
            background: #00356d;
          }
        }
        .header-msg {
          float: left;
          padding: 0 20px;

          &:hover {
            background: #00356d;
          }
        }
        .header-info {
          float: left;
          padding: 0 20px;

          &:hover {
            background: #00356d;
          }
        }
        i {
          font-size: 30px;
        }
      }
    }
  }
</style>
