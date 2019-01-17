<template>
  <div id="app">
    <router-view v-if="isSingle"/>
    <Layout class="main-container" v-else>
      <Header>
        <Head></Head>
      </Header>
      <Layout>
        <Sider>
          <Sidebar @sendArr="getArr"></Sidebar>
        </Sider>
        <Layout>
          <Content class="p-20">
            <div class="tag-nav-wrapper mb-10">
              <TagsNav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag" />
            </div>
            <!-- <Navi :pushArr="postNaviArr"></Navi> -->
            <keep-alive :include="cacheList">
              <router-view />
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Head from './components/layout/headermy'
import Sidebar from './components/layout/sidebar'
import TagsNav from './components/layout/TagsNav'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, getNextRoute, routeEqual } from '@/libs/utils'
export default {
  name: 'App',
  methods: {
    ...mapMutations([
      'setTagNavList',
      'addTag'
    ]),
    //判断当前路由是否单组件页面，如登录、找回密码
    getPageType(name) {
      console.log(name)
      this.isSingle = this.singlePage.indexOf(name) != -1;
    },
    getArr(data) {
      this.postNaviArr = data;
    },
    handleClick(item) {
      this.turnToPage(item)
    },
    handleCloseTag(res, type, route) {
      if (type === 'all') {
        this.turnToPage(this.$config.homeName)
      } else if (routeEqual(this.$route, route)) {
        if (type !== 'others') {
          const nextRoute = getNextRoute(this.tagNavList, route)
          this.$router.push(nextRoute)
        }
      }
      this.setTagNavList(res)
    },
    turnToPage(route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
  },
  created() {
    this.getPageType(this.$route.name);
  },
  mounted() {
    this.setTagNavList()
  },
  computed: {
    tagNavList() {
      return this.$store.state.tagNavList
    },
    cacheList() {
      // console.log(this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name))
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
    }
  },
  watch: {
    '$route'(newRoute,from) {
      this.getPageType(newRoute.name);
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      if(from.name == 'Login' && newRoute.name !== 'Register' && newRoute.name !== 'ForgetPwd') {
        let home = [{
          name: 'Workbench',
          meta: {
            title: '工作台'
          },
          params: {},
          query: {}
        }]
        this.handleCloseTag(home,'all')
      }else {
        this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      }
    }
  },
  data() {
    return {
      isSingle: true,
      singlePage: ['Login', 'Register', 'ForgetPwd'],
      postNaviArr: []
    }
  },
  components: {
    Head,
    Sidebar,
    // Navi,
    TagsNav
  },
}
</script>

<style lang="less">
  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    .main-container {
      height: 100vh;
    }
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .cursor {
    cursor: pointer;
  }

  .el-main {
    background-color: #E9EEF3;
    padding: 0 20px;
  }

  .ivu-menu {
    height: 100% !important;
    overflow: auto;
    background: white;
    width: 200px !important;
  }

  .el-header {
    height: 65px !important;
  }

  .header {
    .ivu-badge-count {
      top: 10px !important;
    }
  }

  .ivu-poptip-body {
    padding: 0 !important;
    margin: 0 !important;
  }

  .header-msg-box {
    ul {
      font-size: 14px;

      li {
        padding: 5px 10px;

        .single-p {
          line-height: 40px;
        }

        .clearfix-box {}

        cursor: pointer;

        &:hover {
          background: #E9EEF3;
          color: #2d8cf0;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .header-info-box {
    ul {
      font-size: 14px;

      li {
        padding: 5px;
        cursor: pointer;

        &:hover {
          background: #E9EEF3;
          color: #2d8cf0;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .ivu-menu-item {
    &:hover {
      background: #E9EEF3
    }
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #f0faff !important;
  }
  .tag-nav-wrapper {
    padding: 0;
    height: 40px;
    background: #f5f7f9;
  }
  .ivu-form-item-required .ivu-form-item-label:before {
    content: '*';
    display: inline-block;
    margin-right: 4px;
    line-height: 1;
    font-family: SimSun;
    font-size: 12px;
    color: white;
  }
</style>
