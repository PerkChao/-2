 <template>
    <div class="customerlist">
        <div class="top-search"> 
            <p style="padding-left:9px;">搜索</p>
            <i-input  placeholder="请输入搜索内容" style="width: 400px;margin-left:10px;" ></i-input>
           
            <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">查询</i-button>
            <i-button type="ghost" style="color:black;margin-left:20px;height:37px;margin-top:10px">取消</i-button>
        </div>
        <div class="add-delete">
            <i-button type="primary" style="background-color:#003C78;margin-left:6px;height:37px;margin-top:20px">+新增</i-button>
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
           columns4: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                     {
                        title: '序号',  
                        type: 'index',
                        width: 80,
                        align: 'center',
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '单位名称',
                        key: 'entity'
                    },
                     {
                        title: '职位',
                        key: 'position'
                    },
                    {
                        title: '国家',
                        key: 'country'
                    },
                     {
                        title: '地区',
                        key: 'region'
                    },
                     {
                        title: '手机号',
                        key: 'telephone'
                    },
                      {
                        title: '座机号',
                        key: 'Machine'
                    },
                      {
                        title: '地址',
                        key: 'address'
                    },
                      {
                        title: '客户类型',
                        key: 'paystyle'
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
                        name: '孙二娘',
                        entity: '重庆中国课学院有线责任公司',
                        position:'对厕所的清洁和空气保鲜',
                        country:'牙买加',
                        region:'番茄区',
                        telephone:'13102386377',
                        Machine:'45621110',
                        address:'重庆市渝北区',
                        paystyle:'现金'
                    },
                    {
                        name: '孙二娘',
                        entity: '重庆中国课学院有线责任公司',
                        position:'对厕所的清洁和空气保鲜',
                        country:'牙买加',
                        region:'番茄区',
                        telephone:'13102386377',
                        Machine:'45621110',
                        address:'重庆市渝北区',
                        paystyle:'现金'
                    },
                    {
                         name: '孙二娘',
                        entity: '重庆中国课学院有线责任公司',
                        position:'对厕所的清洁和空气保鲜',
                        country:'牙买加',
                        region:'番茄区',
                        telephone:'13102386377',
                        Machine:'45621110',
                        address:'重庆市渝北区',
                        paystyle:'现金'
                    },
                    {
                        name: '孙二娘',
                        entity: '重庆中国课学院有线责任公司',
                        position:'对厕所的清洁和空气保鲜',
                        country:'牙买加',
                        region:'番茄区',
                        telephone:'13102386377',
                        Machine:'45621110',
                        address:'重庆市渝北区',
                        paystyle:'现金'
                    },
                    
                ]
        }

   }
 }

 </script>
 <style lang="less">
.customerlist{
   .top-search{
    display: flex;
    background-color: #fff;
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
   .customerlist .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
 </style>
 