<template>
   <div class="customerinput">
      <div class="name">
        <p style="padding-left:9px;">姓名</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:33px;" ></i-input>
      </div>
      <div class="name">
        <p style="padding-left:9px;">单位名称</p>  
        <i-input  placeholder="请输入客户单位名称" style="width: 300px;margin-left:10px;" ></i-input>
        <p style="margin-left:30px">职务</p>
        <i-input  placeholder="请输入客户职务" style="width:300px;margin-left:10px;" ></i-input>
      </div>
        <div class="name">
        <p style="padding-left:9px;">国家</p>  
        <i-select v-model="model2" size="large" style="width:300px;margin-top:10px;margin-left:30px;">
             <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
        <p style="margin-left:30px">地区</p>
        <i-select v-model="model2" size="large" style="width:120px;margin-top:10px;margin-left:12px;">
             <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
         <i-select :model.sync="model2" size="large" style="width:120px;margin-top:10px;margin-left:60px;">
             <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
       </i-select>
      </div> 
        <div class="name">
        <p style="padding-left:9px;">手机</p>  
        <i-input  placeholder="请输入客户手机" style="width: 300px;margin-left:30px;" ></i-input>
        <p style="margin-left:30px">座机</p>
        <i-input  placeholder="请输入客户座机" style="width:300px;margin-left:10px;" ></i-input>
      </div>  
        <div class="name">
        <p style="padding-left:9px;">地址</p>  
        <i-input  placeholder="请输入客户地址" style="width: 300px;margin-left:30px;" ></i-input>
      </div>  
        <div class="name">
        <p style="padding-left:9px;">客户类型</p>  
       <i-select :model.sync="model2" size="large" style="width:300px;margin-left:5px;margin-top:10px;">
            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
       </i-select>
      </div>
      <div class="Button">
         <i-button type="ghost" style="color:grey;margin-left:50px;height:37px;width:80px;margin-top:20px">取消</i-button>
         <i-button type="primary" style="background-color:#003C78;margin-left:5px;height:37px;width:80px;margin-top:20px">保存</i-button>    
      </div>     
   </div>  
</template>

          
<script>
export default {
    data(){
        return{
           cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
    
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
 .customerinput{
    width:1000px;
    height:500px;
    // border: 1px solid black; 
    background-color: white;
   .name{
    display: flex;
    height: 59px;
    padding-left: 40px;
       P{
           line-height: 4.5;
       }
       .ivu-input{
        top: 10px;
     }
    }
    .entity{
        display: flex;
        height: 59px;
        padding-left: 40px;
    }
   }
   .ivu-table-wrapper{
       margin-top: 20px;
   }
   .customerinput .page{
      margin-top: 20px;
     .ivu-page-disabled{
        margin-left: 220px;
     }
   }
   
</style>