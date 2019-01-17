<template>
   <div class="customerinput">
      <div class="name">
        <p style="padding-left:9px;">姓名</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:33px;" ></i-input>
      </div>
      <div class="name">
        <p style="padding-left:9px;">单位名称</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:10px;" ></i-input>
        <p style="margin-left:30px">职务</p>
        <i-input  placeholder="" style="width:300px;margin-left:10px;" ></i-input>
      </div>
        <div class="name">
        <p style="padding-left:9px;">国家</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:33px;" ></i-input>
        <p style="margin-left:30px">地区</p>
        <i-input  placeholder="" style="width:120px;margin-left:10px;" ></i-input>
      </div> 
        <div class="name">
        <p style="padding-left:9px;">手机</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:10px;" ></i-input>
        <p style="margin-left:30px">座机</p>
        <i-input  placeholder="" style="width:120px;margin-left:10px;" ></i-input>
      </div>  
        <div class="name">
        <p style="padding-left:9px;">地址</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:10px;" ></i-input>
      </div>  
        <div class="name">
        <p style="padding-left:9px;">客户类型</p>  
        <i-input  placeholder="请输入客户姓名" style="width: 300px;margin-left:10px;" ></i-input>
      </div>
      <div class="Button">
         <i-button type="ghost" style="color:black;margin-left:20px;height:37px;margin-top:10px">取消</i-button>
         <i-button type="primary" style="background-color:#003C78;margin-left:30px;height:37px;margin-top:10px">保存</i-button>    
      </div>     
   </div>  
</template>

          
<script>
export default {
    data(){
        return{
          
    
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
    border: 1px solid black; 
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