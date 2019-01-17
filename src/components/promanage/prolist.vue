<template>
  <div class="box">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入产品名称" style="width: 300px;margin-left:10px;" ></i-input>
            <p style="margin-left:30px">产品编号</p>
            <i-input  placeholder="" style="width:120px;margin-left:10px;" ></i-input>
            <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">查询</i-button>
            <i-button type="ghost" style="color:black;margin-left:20px;height:37px;margin-top:10px">取消</i-button>
        </div>
        <div class="add-delete">
            <i-button type="primary" style="background-color:#003C78;margin-left:6px;height:37px;margin-top:10px" @click="ShowAddNew">+新增</i-button>
            <i-button type="ghost" style="color:grey;margin-left:10px;height:37px;margin-top:10px">批量删除</i-button>
        </div>
         <i-table  :columns="columns4" :data="data1"></i-table>
         <div class="page">
              <Page :total="100" show-elevator show-total></Page>
         </div>
           <Modal
            title="新建产品"
            width="700"
            ok-text="保存"
            :mask-closable="false"
            v-model="isShowAddNew"
            @on-ok="ok"
            :loading="true"
            class-name="vertical-center-modal">
            <div class="pro-name" style="display:flex;"><p style="margin-top:10px;">产品名称</p><i-input placeholder="请输入产品名称" style="width:251px;margin-left:10px;"></i-input></div>
            <div class="pro-number" style="display:flex;margin-top:10px;"><p style="margin-top:10px;">产品编号</p><i-input placeholder="请输入产品编号"  style="width:251px;margin-left:10px;"></i-input></div>
            <div class="pro-order">
                <div class="order-add" style="display:flex;margin-top:40px;">
                    <p  style="margin-top:5px;">编辑工序</p>
                    <i-button type="primary"  style="margin-left:10px;height:30px;">+添加</i-button>
                </div>
                <div class="order-process" style="display:flex;margin-top:20px;">
                    <p  style="margin-top:10px;">工序名称</p><i-input style="width:250px;margin-left:10px;"  placeholder="请输入产品名称"></i-input><i-button style="margin-left:10px;">删除</i-button><span style="display:block;margin-top:10px;margin-left:20px;">每件预计工时</span><i-input  style="width:100px;margin-left:15px;" value="10分钟"></i-input>
                </div>
                 <div class="order-process" style="display:flex;margin-top:20px;">
                    <p  style="margin-top:10px;">工序名称</p><i-input style="width:250px;margin-left:10px;"  placeholder="请输入产品名称"></i-input><i-button style="margin-left:10px;">删除</i-button><span style="display:block;margin-top:10px;margin-left:20px;">每件预计工时</span><i-input  style="width:100px;margin-left:15px;" value="10分钟"></i-input>
                </div>
            </div>
        </Modal>
          
   </div>  
</template>

<script>

export default {
    data(){
        return{
                isShowAddNew: false,
                loading: true,
             columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                     {
                        title: '序号',  
                        type: 'index',
                        width: 80,
                        align: 'center',
                    },
                    {
                        title: '产品名称',
                        key: 'name'
                    },
                    {
                        title: '产品编号',
                        key: 'number'
                    },
                    {
                       title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h,params)=>{
                          let index = params.index;
                          return h('Dropdown',{
                            on:{

                            },
                            style:{
                               
                               } 
                            },[
                                h('i-button',[
                                    h('span','选择操作'),
                                    h('Icon',{
                                        props:{
                                            type:'ios-arrow-down'
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
                data1: [
                    {
                        name: '卡西欧',
                        age: 18,
                        number: '3.1415926'
                    },
                    {
                        name: '卡东欧',
                        age: 25,
                        number: '3.1415927'
                    },
                    {
                        name: '卡北欧',
                        age: 30,
                        number: '3.1415928'
                    },
                    {
                        name: '卡南欧',
                        age: 26,
                        number: '3.1415929'
                    }
                ]
        }
    },
    methods:{
          ok(){
                this.$Message.info('点击了确定');
            },
            cancel(){
                this.$Message.info('点击了取消');
          },
          ShowAddNew(){
            this.isShowAddNew = true;
          },
        
    }
}
</script>
<style lang="less" >
 .box{
   .top-search{
    display: flex;
    background-color: #fff;
    border: 1px solid #eee;
    height: 59px;
       P{
           line-height: 4.5;
        }
        .ivu-input{
            top: 10px;
        }
     }
   }
   .ivu-table-wrapper{
       margin-top: 20px;
   }
   .box .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
   
</style>
