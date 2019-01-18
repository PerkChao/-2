<template>
  <div class="moneyinput">
    <div class="name">  
        <p>客户名称</p>
        <i-select  style="width:300px;margin-top:2px;margin-left:20px;">
            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
    </div>
    <div class="name">  
        <p>订单编号</p>
        <i-select  style="width:300px;margin-top:2px;margin-left:20px;">
            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
    </div>
    <div class="name">  
        <p>收款金额</p>
         <i-input style="width:300px;margin-left:20px;">
            <span slot="prepend">￥</span>
         </i-input>
    </div>
     <div class="name">  
        <p>付款方式</p>
        <i-select  style="width:300px;margin-top:2px;margin-left:20px;">
            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
    </div>
     <div class="name">  
        <p>收款凭证编号</p>
         <i-input style="width:300px;margin-left:10px;"></i-input>
    </div>
    <div class="name">  
        <p>收款日期</p>
         <row style="margin-left:20px;">
            <i-col span="12">
                <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </i-col>
        </row>
    </div>
      <div class="Button" style="margin-left:10px;margin-top:20px;">
         <i-button type="primary" style="background-color:#003C78;margin-left:5px;height:37px;width:80px;margin-top:20px">确定</i-button>  
         <i-button type="ghost" style="color:grey;margin-left:20px;height:37px;width:80px;margin-top:20px">取消</i-button>
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
   margin-top: 20px;
    P{
        margin-left: 20px;
        margin-top: 10px;
    }
 }
</style>
