<template>
    <div class="customerstate">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入搜索内容" style="width: 200px;margin-left:10px;" ></i-input>
           
            <i-select  style="width:100px;margin-top:10px;margin-left:20px;">
               <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
            </i-select>
            <i-select  style="width:100px;margin-top:10px;margin-left:20px;">
               <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
            </i-select>
            <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">查询</i-button>
           
        </div>
        <div class="add-delete">
            <i-button type="ghost" style="color:grey;margin-left:10px;height:37px;margin-top:20px">批量删除</i-button>
        </div>
        <div class="daochu" style="position:relative;top:-35px;left:120px;width:80px;border:1px solid #DCDEE2;height:35px;border-radius:4px;cursor:pointer;">
            <img src="./daochu.png" alt="" style="width:30%;position:absolute;top:5px;left:5px;">
            <li style="list-style:none;position:absolute;top:8px;left:42px;">导出</li>
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
                        title: '产品名称',
                        key: 'name'
                    },
                    {
                        title: '销售量',
                        key: 'count'
                    },
                     {
                        title: '销售额',
                        key: 'sales'
                    },
                    {
                        title: '最大销售客户',
                        key: 'maxcustomer'
                    },
                    {
                       title: '最高销售单价',
                        key: 'maxprice',
                        width: 150,
                        align: 'center',
                    },
                     {
                       title: '最低销售单价',
                        key: 'minprice',
                        width: 150,
                        align: 'center',
                     }
                        
                   
                ],
                data1: [
                   {
                        name: '万宝龙',
                        count:'1000',
                        sales:'200000',
                        maxcustomer:'齐齐有限公司',
                        maxprice:'2000',
                        minprice:'800'
                    },
                    {
                       name: '万宝龙',
                        count:'1000',
                        sales:'200000',
                        maxcustomer:'齐齐有限公司',
                        maxprice:'2000',
                        minprice:'800'
                    },
                    {
                       name: '万宝龙',
                        count:'1000',
                        sales:'200000',
                        maxcustomer:'齐齐有限公司',
                        maxprice:'2000',
                        minprice:'800'
                    },
                    {
                      name: '万宝龙',
                        count:'1000',
                        sales:'200000',
                        maxcustomer:'齐齐有限公司',
                        maxprice:'2000',
                        minprice:'800'
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


