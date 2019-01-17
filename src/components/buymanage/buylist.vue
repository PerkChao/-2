<template>
    <div class="buy-manage">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入产品名称" style="width: 300px;margin-left:10px;" ></i-input>
            <p style="margin-left:30px">商品编号</p>
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
            title="新建采购商品"
            width="700"
            ok-text="保存"
            :mask-closable="false"
            v-model="isShowAddNew"
            @on-ok="ok"
            :loading="true"
            class-name="vertical-center-modal">
            <div class="pro-name" style="display:flex;"><p style="margin-top:10px;">商品名称</p><i-input placeholder="请输入商品名称" style="width:251px;margin-left:10px;"></i-input></div>
            <div class="pro-number" style="display:flex;margin-top:10px;"><p style="margin-top:10px;">商品编号</p><i-input placeholder="请输入商品编号"  style="width:251px;margin-left:10px;"></i-input></div>
            <div class="pro-number" style="display:flex;margin-top:10px;"><p style="margin-top:10px;">库存预警</p><i-input placeholder="请输入该采购商品的库存预警数量"  style="width:251px;margin-left:10px;"></i-input></div>
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
                        title: '商品名称',
                        key: 'name'
                    },
                    {
                        title: '商品编号',
                        key: 'number'
                    },
                     {
                        title: '库存',
                        key: 'remaining'
                    },
                    {
                        title: '预警值',
                        key: 'warnming'
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
                                    h('DropdownItem', '编辑'),
                                    h('DropdownItem', '删除'),
                                   
                                ])
                           ])
                        }
                   }
                ],
                data1: [
                    {
                        name: '表盘',
                        number: '3.1415926',
                        remaining:'1201',
                        warnming:'100'
                    },
                    {
                       name: '表盘',
                        number: '3.1415926',
                        remaining:'1201',
                        warnming:'100'
                    },
                    {
                         name: '表盘',
                        number: '3.1415926',
                        remaining:'1201',
                        warnming:'100'
                    },
                    {
                       name: '表盘',
                        number: '3.1415926',
                        remaining:'1201',
                        warnming:'100'
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
 .buy-manage{
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
   .buy-manage .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
   
</style>



