<template>
    <div class="moneylist">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入搜索内容" style="width: 300px;margin-left:10px;" ></i-input>
          
            <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">查询</i-button>
            <i-button type="ghost" style="color:black;margin-left:20px;height:37px;margin-top:10px">取消</i-button>
        </div>
        <div class="add-delete">
            <i-button type="primary" style="background-color:#003C78;margin-left:6px;height:37px;margin-top:10px">+新增</i-button>
            <i-button type="ghost" style="color:grey;margin-left:10px;height:37px;margin-top:10px">批量删除</i-button>
        </div>
         <i-table  :columns="columns4" :data="data1"></i-table>
         <div class="page">
              <Page :total="100" show-elevator show-total></Page>
         </div>
    </div>   
</template>
<script>
export default {
    data(){
         return{
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
                        title: '客户名称',
                        key: 'name',
                          align: 'center',
                    },
                    {
                        title: '订单编号',
                        key: 'ordernumber',
                          align: 'center',
                    },
                     {
                        title: '购买数量',
                        key: 'buycount',
                          align: 'center',
                    },
                    {
                        title: '产品名称',
                        key: 'procuctionname',
                          align: 'center',
                    },
                      {
                        title: '订单金额',
                        key: 'ordermoney',
                          align: 'center',
                    },
                     {
                        title: '收款金额',
                        key: 'receivedmoney',
                          align: 'center',
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
                        name: '张四',
                        ordernumber: '3.1415826',
                        buycount:'222',
                        procuctionname:'西西米亚钟表',
                        ordermoney:'50000',
                        receivedmoney:'45000'
                    },
                    {
                       name: '张四',
                        ordernumber: '3.1415826',
                        buycount:'222',
                        procuctionname:'西西米亚钟表',
                        ordermoney:'50000',
                        receivedmoney:'45000'
                    },
                 
                ]
         }     
    }
}
</script>
<style lang="less">
.moneylist{
   .top-search{
    display: flex;
    background-color: #fff;
    border: 1px solid #eee;
    height: 59px;
    margin-top: 20px;
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
  .moneylist .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
</style>
