<template>
    <div class="customerstate">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入搜索内容" style="width: 200px;margin-left:10px;" ></i-input>
            <p style="margin-left:20px;">交货日期：</p>
           <row style="margin-left:5px;">
                <i-col span="12">
                    <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
                </i-col>
           </row>
           <p style="margin-left:50px;">客户类型</p>
            <i-select  style="width:100px;margin-top:10px;margin-left:20px;">
               <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
            </i-select>

            <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">查询</i-button>
           
        </div>
        <div class="add-delete">
            <i-button type="ghost" style="color:grey;margin-left:10px;height:37px;margin-top:20px">批量删除</i-button>
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
            cityList:[
                {
                    value:'1',
                    label:'现金'
                },
                 {
                    value:'2',
                    label:'月结'
                },
            ],
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
                        title: '客户姓名',
                        key: 'name'
                    },
                    {
                        title: '交货日期',
                        key: 'date'
                    },
                     {
                        title: '累计交易',
                        key: 'trade'
                    },
                    {
                        title: '未收帐款',
                        key: 'notreceivedmoney'
                    },
                    {
                       title: '联系方式',
                        key: 'contact',
                        width: 150,
                        align: 'center',
                        }
                   
                ],
                data1: [
                    {
                        name: '王五',
                        date:'1996-01-02',
                        trade:'100',
                        notreceivedmoney:'123',
                        contact:'136456789',
                    },
                    {
                        name: '王五',
                        date:'1996-01-02',
                        trade:'100',
                        notreceivedmoney:'123',
                        contact:'136456789',
                    },
                    {
                        name: '王五',
                        date:'1996-01-02',
                        trade:'100',
                        notreceivedmoney:'123',
                        contact:'136456789',
                    },
                    {
                        name: '王五',
                        date:'1996-01-02',
                        trade:'100',
                        notreceivedmoney:'123',
                        contact:'136456789',
                    }
                ]

        }
    }
}
</script>
<style lang="less">
.customerstate{
   .top-search{
    display: flex;
    background-color: #fff;
    border: 1px solid #eee;
    height: 59px;
    margin-top: 25px;
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
   .customerstate .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
</style>


