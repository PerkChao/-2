<template>
  <div class="order-list">
    <div class="title">生产计划列表</div>
    <div class="search">
      <div class="common">
        <h3>搜索：</h3>
        <Input
          placeholder="输入搜索内容"
          style="width: 250px; margin-left: 10px"
          v-model="projectQuery.project"
        />
      </div>
      <div class="common">
        <h3>起止日期：</h3>
        <Col span="12">
          <DatePicker
            :value="value2"
            format="yyyy/MM/dd"
            type="daterange"
            placement="bottom-end"
            placeholder="请选择起止时间"
            style="width: 300px"
          ></DatePicker>
        </Col>
      </div>
      <div class="common">
        <h3>订单状态：</h3>
        <Select
          v-model="projectQuery.orderName"
          style="width:110px;margin-left: 10px"
        >
          <Option
            v-for="(item,index) in languageList"
            :value="item.value"
            :key="index"
          >{{ item.label }}</Option>
        </Select>
      </div>
      <div class="btn-double">
        <Button
          class="btn-first"
          type="primary"
          @click="sendTo"
        >确认</Button>
        <Button
          class="btn-cancal"
          type="default"
          @click="cancal"
        >取消</Button>
      </div>
    </div>
    <div class="add-del">
      <Button
        class="btn-first"
        type="primary"
        @click="addTo"
      >+  新增</Button>
      <Button
        class="btn-cancal"
        type="default"
        @click="delMore"
      >批量删除</Button>
    </div>
    <div class="cell">
      <Table
        border
        center
        size="small"
        class="mt-10"
        ref="selection"
        :columns="columns"
        :data="data"
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
  export default {
    name: "plan",
    methods: {
      //搜索取消
      cancal() {

      },
      //搜索查询
      sendTo() {

      },
      //增加
      addTo() {

      },
      //批量删除
      delMore() {

      },
      //分页器
      changePage(value) {
        this.projectQuery.page = value;
        this.getProjectList();
      },
      changePagesize(value) {
        this.projectQuery.pageSize = value;
        this.getProjectList();
      },
      //更多操作
      doActions(data, index) {
        console.log(data, index);
      },
    },
    data() {
      return {
        projectQuery: {
          project: '',
          orderName: '',
        },
        languageList: [],
        value2: '',


        //分页器
        totalNum: 0,
        //表格数据
        columns: [
          {
            type: 'selection',
            minWidth: 10,
            align: 'center',
          },
          {
            title: '序号',
            minWidth: 10,
            align: 'center',
            key: 'number'
          },
          {
            title: '订单编号',
            minWidth: 60,
            align: 'center',
            key: 'orderNum'
          },
          {
            title: '工序名称',
            minWidth: 60,
            align: 'center',
            key: 'name'
          },
          {
            title: '数量',
            minWidth: 40,
            align: 'center',
            key: 'payNum'
          },
          {
            title: '执行人',
            minWidth: 60,
            align: 'center',
            key: 'keepPerson'
          },
          {
            title: '车间',
            minWidth: 60,
            align: 'center',
            key: 'factory'
          },
          {
            title: '工序号',
            minWidth: 60,
            align: 'center',
            key: 'factoryNum'
          },
          {
            title: '预计耗时',
            minWidth: 40,
            align: 'center',
            key: 'time',
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
                  h('DropdownItem', '编辑'),
                ])
              ])
            }
          }
        ],
        data: [
          {
            number: 1,
            orderNum: 12138,
            name: '工序名称',
            payNum: 1,
            keepPerson: '执行人',
            factory: '车间',
            factoryNum: '工序号',
            time: 40,
          },
        ],
      };
    },
  }
</script>

<style scoped lang="less">
  .order-list{
    background-color: #fff;
    .title{
      color: #003C78;
      font-size: 14px;
      margin: 8px;
      padding: 6px;
      background-color: #ccc;
    }
    .search{
      margin: 6px;
      padding: 20px 12px;
      border: 1px solid #d9d9d9;
      display: flex;
      flex-wrap: wrap;
      .btn-double{

      }
    }
    .add-del{
      padding: 20px 8px;
    }
    .pagination{
      text-align: center;
      padding: 30px 0;
    }
  }
  .common{
    margin-right: 40px;
    display: flex;
    align-items: center;
  }
  h3{
    font-size: 12px;
  }
  .btn-first{
    background-color: #003C78;
    border-color: #003C78;
    margin-right: 10px;
  }
  //表格样式

</style>
