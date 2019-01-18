<template>
  <Menu
    theme="light"
    :active-name="$route.name"
    :open-names="openNames"
    @on-select="navigateTo"
    accordion
  >
    <div
      v-for="(item,index) in menuList"
      :key="index"
    >
      <menuItem
        v-show="!item.list"
        :name="!!item.name?item.name:item.index.toString()"
        :to="item.path"
        @click.native="isOnlyIndex('null',index)"
      >
        <Icon :type="item.icon" />
        {{item.title}}
      </menuItem>
      <Submenu
        v-show="!!item.list"
        :name="!!item.name?item.name:item.index.toString()"
      >
        <template slot="title">
          <Icon :type="item.icon" />
          {{item.title}}
        </template>
        <MenuItem
          :name="!!itemm.name?itemm.name:itemm.index"
          :to="itemm.path"
          v-for="(itemm,idx) in item.list"
          :key="idx"
          v-if="!!item.list"
          @click.native="isOnlyIndex(index,idx)"
        >{{itemm.title}}</MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      menuList: [{
        index: 0,
        title: '工作台',
        icon: 'ios-list-box-outline',
        path: '/home/workbench',
        name: 'Workbench'
      },
        {
          index: 1,
          title: '产品管理',
          icon: 'ios-desktop-outline',
          list: [
            {
              index: 0,
              title: '产品列表',
              path: '/testProject_manage/addProject'
            }
          ]
        },
        {
          index: 2,
          title: '采购商品管理',
          icon: 'ios-basket',
          list: [
            {
              index: 0,
              title: '采购商品列表',
              path: '/project_manage/projectList'
            }
          ]
        },
        {
          index: 3,
          title: '客户管理',
          icon: 'ios-help-buoy-outline',
          list: [
            {
              index: 0,
              title: '客户录入',
              path: '/build_manage/build'
            },
            {
              index: 1,
              title: '客户列表',
              path: '/build_manage/auditHistory'
            }
          ]
        },
        {
          index: 4,
          title: '订单管理',
          icon: 'md-reorder',
          list: [
            {
              index: 0,
              title: '订单录入',
              path: '/orderadd'
            },
            {
              index: 1,
              title: '订单列表',
              path: '/orderlist'
            },
          ]
        },

        {
          index: 5,
          title: '财务管理',
          icon: 'logo-bitcoin',
          list: [
            {
              index: 0,
              title: '财务录入',
              path: '/build_manage/build'
            },
            {
              index: 1,
              title: '财务列表',
              path: '/build_manage/build'
            },
          ]
        },
        {
          index: 6,
          title: '采购管理',
          icon: 'md-people',
          list: [
            {
              index: 0,
              title: '采购录入',
              path: '/purchaseadd'
            },
            {
              index: 1,
              title: '采购列表',
              path: '/purchaselist'
            },
          ]
        },
        {
          index: 7,
          title: '生产计划',
          icon: 'ios-paper-plane',
          list: [
            {
              index: 0,
              title: '生产计划表',
              path: '/plan'
            },
          ]
        },
        {
          index: 8,
          title: '财务报表',
          icon: 'md-list-box',
          list: [
            {
              index: 0,
              title: '客户统计',
              path: '/build_manage/build'
            },
            {
              index: 1,
              title: '销售统计报表',
              path: '/build_manage/build'
            },
            {
              index: 2,
              title: '车间统计报表',
              path: '/build_manage/build'
            },
          ]
        },
        {
          index: 9,
          title: '权限管理',
          icon: 'md-people',
          list: [
            {
              index: 0,
              title: '角色权限',
              path: '/build_manage/build'
            },
            {
              index: 1,
              title: '权限管理列表',
              path: '/build_manage/build'
            },
          ]
        },
        {
          index: 10,
          title: '系统配置',
          icon: 'md-construct',
          path: '',
        }
      ],
      firstArr: [],
      secondArr: [],
      talkArr: [],
      openNames: []
    }
  },
  watch: {
    $route(val) {
      // console.log(val)
    }
  },
  methods: {
    saveMenu() {
      // let self = this;
      // localStorage.setItem('MENULIST',JSON.stringify(self.menuList))
    },
    isOnlyIndex(type, idx) {
      let self = this;
      self.talkArr = []
      if (type == 'null') {
        self.firstArr = [];
        self.menuList.forEach((val, index) => {
          if (index == idx) {
            self.firstArr.push({ name: val.title })
          }
        })
        // localStorage.setItem('NAVIBREAD',JSON.stringify(self.firstArr))
        // self.talkArr = self.firstArr;
        self.$emit('sendArr', self.firstArr)
      } else {
        self.secondArr = [];
        self.menuList.forEach((val, index) => {
          if (type == index) {
            self.secondArr.push({ name: val.title })
          }
        })
        self.menuList[type].list.forEach((val, index) => {
          if (index == idx) {
            self.secondArr.push({
              name: val.title,
              path: val.path
            })
          }
        })
        // localStorage.setItem('NAVIBREAD',JSON.stringify(self.secondArr))
        self.$emit('sendArr', self.secondArr)
      }
    },
    navigateTo(name) {
      // this.$router.push({name: name});
      // console.log(name)
    }
  },
  created() {
    // this.saveMenu();
  }
}
</script>

<style scoped>

</style>
