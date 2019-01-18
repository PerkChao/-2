<template>
  <div class="moneyinput">
    <div class="name">  
        <p>加工工艺：</p>
         <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;width:80px;">开胚</i-button>
          <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;width:80px;">cnc雕洗</i-button>
           <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;width:80px;">二次加工</i-button>      
    </div>
    <div class="name">  
        <p>添加工艺：</p>
        <i-input placeholder="请输入工艺名称" style="width:300px;margin-left:20px;"></i-input>
    </div>
    <div class="name">  
        <p>车间：</p>
        <i-button type="primary" style="background-color:#003C78;margin-left:46px;height:35px;">车间名称</i-button>
        <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;">车间名称2</i-button>     
    </div>
     <div class="name">  
        <p>添加车间名称：</p>
        <i-input  placeholder="请输入车间名称" style="width:300px;"></i-input>
    </div>
     <div class="name">  
        <p>生产计划工序：</p>
          <i-button type="primary" style="background-color:#003C78;margin-left:2px;height:35px;">开胚</i-button>
          <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;">cnc雕刻</i-button>
          <i-button type="primary" style="background-color:#003C78;margin-left:20px;height:35px;">二次加工</i-button>
    </div>
    <div class="name">  
        <p>添加工序：</p>
        <i-input style="width:300px;margin-left:20px;" placeholder="请输入工序名称"></i-input>
    </div>
      <div class="Button" style="margin-left:10px;margin-top:20px;">
         <i-button type="ghost"  style="color:grey;margin-left:20px;height:37px;width:80px;margin-top:20px">取消</i-button>
         <i-button type="primary" style="background-color:#003C78;margin-left:5px;height:37px;width:80px;margin-top:20px">确定</i-button>  
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
            ]
        }  
    }
}
</script>
<style lang="less">
 .moneyinput .name{
   display: flex;
   margin-top: 40px;
    P{
        margin-left: 20px;
        margin-top: 10px;
    }
 }
</style>