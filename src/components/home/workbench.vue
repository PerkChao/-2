<template>
  <div class="show-first">
    <div class="img-show">
      <div
        class="li"
        v-for="item in orderList"
        :key="item.id"
        @click="toPage(item.id)"
      >
        <img src="">
        <p>{{item.name}}18</p>
      </div>
    </div>
    <div class="nav">
      <div
        class="li"
        v-for="item in orderList"
        :key="item.id"
        @click="tabChange(item.id)"
      >
        <span :class="{active: item.id === tabData}">{{item.nav}}</span>
      </div>
    </div>
    <div class="list">
      <Table
        :columns="projectTable"
        :data="projectData"
        center
        size="small"
        class="mt-10"
        ref="table"
      ></Table>
    </div>
    <div class="pagination">
      <Page
        :total="totalNum"
        class="block"
        show-elevator
        show-total
        show-sizer
        @on-change="changePage"
        @on-page-size-change="changePagesize"
      />
    </div>
  </div>
</template>

<script>
import {login} from "../../api/common";
export default {
  name: "workbench",
  methods: {
    //列表切换
    tabChange(id) {
      this.tabData = id;
    },
    //展示还是走对应页面
    toPage(id) {

    },
    //
    changePage(value) {
      this.projectQuery.page = value;
      this.getProjectList();
    },
    changePagesize(value) {
      this.projectQuery.pageSize = value;
      this.getProjectList();
    },
    //多选触发
    doActions() {

    },
    //分页触发后执行加载
    getProjectList() {
      // this.$http.post('/devops/projectManage/projectList',this.projectQuery).then(res=>{
      //   console.log(res);
      //   this.projectData = res.data.data.records.map((item, index) => {
      //     var currentpage = this.projectQuery.page - 1 ? this.projectQuery.page - 1 : '';
      //     var number = index + 1;
      //     number = currentpage + '' + number;
      //     return Object.assign({}, item, {number: number})
      //   });
      //   this.totalNum = res.data.data.total;
      // })
    },
  },
  created() {
    // login().then(res => {
    //   console.log(res);
    // });
  },
  data() {
    return {

      //订单分类
      tabData: 1,
      orderList: [
        {
          id: 1,
          name: '预警订单',
          nav: '工时预警订单',
        },
        {
          id: 2,
          name: '未订生产计划订单',
          nav: '未定生产计划订单',
        },
        {
          id: 3,
          name: '当日订单数量',
          nav: '当日正在进行的订单',
        },
        {
          id: 4,
          name: '紧急订单数量',
          nav: '紧急订单',
        },
      ],
      //上传参数
      projectQuery: {
        project: '',
        name: '',
        language: '',
        auditStatus: '',
        serviceState: '',
        page: 1,
        pageSize: 10
      },
      //页面表格参数
      projectData: [
        {
          id: 1,
          number: 1,                     //序号
          name: '这是姓名',              //客户名称
          orderNum: '123987',            //产品编号
          payNum: '1',                   //购买数量
          productName: '产品名称',       //产品名称
          sendTime: '2018-09-12',        //交货日期
          orderType: '普通',             //订单类型
          orderState: '开胚',            //订单状态
          orderRemark: '备注内容备注内容备注内容备注内容备注内容备注内容备注内容',  //跟单备注
          timeWarn: '1',                 //工时预警
        }
      ],
      //表格预定义
      projectTable: [
        {
          title: '序号',
          minWidth: 10,
          align: 'center',
          key: 'number'
        },
        {
          title: '客户名称',
          minWidth: 30,
          align: 'center',
          key: 'name'
        },
        {
          title: '产品编号',
          minWidth: 30,
          align: 'center',
          key: 'orderNum'
        },
        {
          title: '购买数量',
          minWidth: 30,
          align: 'center',
          key: 'payNum'
        },
        {
          title: '产品名称',
          minWidth: 30,
          align: 'center',
          key: 'productName'
        },
        {
          title: '交货日期',
          minWidth: 50,
          align: 'center',
          key: 'sendTime'
        },
        {
          title: '订单类型',
          minWidth: 30,
          align: 'center',
          key: 'orderType'
        },
        {
          title: '订单状态',
          minWidth: 30,
          align: 'center',
          key: 'orderState'
        },
        {
          title: '跟单备注',
          minWidth: 120,
          align: 'center',
          key: 'orderRemark'
        },
        {
          title: '工时预警',
          minWidth: 30,
          align: 'center',
          key: 'timeWarn'
        },
        {
          title: '操作',
          minWidth: 60,
          align: 'center',
          key: 'applyAction',
          render: (h, params) => {
            let index = params.index;
            return h('Dropdown', {
              on: {
                'on-click': () => {
                  this.doActions(event.target.innerText, index)
                }
              },
              style: {
                marginRight: '5px',
                marginTop: '2px'
              }
            }, [
              h('Button', [
                h('span', '选择操作'),
                h('Icon', {
                  props: {
                    type: 'ios-arrow-down'
                  }
                })
              ]),
              h('DropdownMenu', {
                slot: 'list'
              }, [
                h('DropdownItem', '查看详情'),
                h('DropdownItem', '财务录入'),
                h('DropdownItem', '生产计划'),
              ])
            ])
          }
        }
      ],
      //表格数据总量
      totalNum: 0,
    };
  },
}
</script>

<style scoped lang="less">
  .show-first{
    padding: 10px 12px 30px;
    .img-show{
      display: flex;
      flex-wrap: wrap;
      .li{
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        display: flex;
        align-items: center;
        margin: 10px 20px;
        img{
          width: 64px;
          height: 64px;
        }
        p{
          font-size: 14px;
          padding: 0 16px;
        }
      }
    }
    .nav{
      margin: 46px 0;
      padding: 16px 0;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      .li{
        margin: 0 12px;
        span{
          padding: 16px;
          cursor: pointer;
        }
        .active{
          border-bottom: 2px solid #014583;
        }
      }
    }
    .block{
      margin-top: 30px;
      width: 100%;
      text-align: center;
    }
  }
</style>
