<template>
  <div class="purchase-add">
    <div class="title">采购录入</div>
    <div class="mid">
      <div class="add-btn">
        <h3><span>*</span>采购商品录入：</h3>
        <Button
          class="add"
          type="primary"
          size="small"
          @click="addMaterial"
        >+添加</Button>
      </div>
      <div class="ul">
        <div
          class="li"
          v-for="(data, index) in list"
          :key="index"
        >
          <div class="top">
            <div class="common-input">
              <h3><span>*</span>商品：</h3>
              <Select
                v-model="projectQuery.orderType"
                style="width:250px;margin-left: 10px"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <Button
              class="btn"
              type="default"
              @click="delMaterial(data)"
            >删除</Button>
          </div>
          <div class="bottom">
            <div class="number-list">
              <h3><span>*</span>数量：</h3>
              <InputNumber
                :max="10000"
                v-model="data.number"
                :formatter="value => `${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/$s?|(,*)/g, '')"
              ></InputNumber>
            </div>
            <div class="number-list">
              <h3><span>*</span>单价：</h3>
              <InputNumber
                :max="10000"
                v-model="data.price"
                :formatter="value => `￥ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/$s?|(,*)/g, '')"
              ></InputNumber>
            </div>
            <div class="number-list">
              <h3><span>*</span>采购金额：</h3>
              <InputNumber
                :max="10000"
                disabled="disabled"
                v-model="data.combine"
                :formatter="value => `￥ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/$s?|(,*)/g, '')"
              ></InputNumber>
            </div>
            <div class="common">
              <h3><span>*</span>单位：</h3>
              <Input
                placeholder="单位"
                style="width: 100px; margin-left: 10px"
                v-model="data.unit"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="message">
        <h3>总计：</h3>
      </div>
      <div class="number-list">
        <h3><span>*</span>采购总额：</h3>
        <InputNumber
          :max="10000"
          disabled="disabled"
          v-model="sendData.total"
          :formatter="value => `￥ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
          :parser="value => value.replace(/$s?|(,*)/g, '')"
        ></InputNumber>
      </div>
      <div class="common">
        <h3><span>*</span>商家名称：</h3>
        <Input
          placeholder="请输入商家名称"
          style="width: 240px; margin-left: 10px"
          v-model="sendData.name"
        />
      </div>
      <div class="common">
        <h3><span>*</span>商家联系电话 ：</h3>
        <Input
          placeholder="请输入联系电话"
          style="width: 240px; margin-left: 10px"
          v-model="sendData.phone"
        />
      </div>
      <div class="date">
        <h3><span>*</span>采购日期：</h3>
        <Row>
          <Col span="12">
            <DatePicker
              type="date"
              placeholder="2018-03-30"
              style="width: 300px"
              v-model="projectQuery.date"
            ></DatePicker>
          </Col>
        </Row>
      </div>
      <div class="double-btn">
        <Button
          class="btn-cancal"
          type="default"
          @click="cancal"
        >取消</Button>
        <Button
          class="btn-keep"
          type="primary"
          @click="sendTo"
        >保存</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "purchaseadd",
  methods: {
    addMaterial() {
      const data = {
        number: 0,
        price: 0,
        combine: 0,
        unit: '',
      };
      this.list.push(data);
    },
    delMaterial(data) {
      this.list = this.list.filter(item => {
        return data != item;
      });
    },
    //取消
    cancal() {

    },
    //保存
    sendTo() {

    },
  },
  computed: {

  },
  data() {
    return {

      sendData: {
        total: 0,         //总金额
        name: '',         //商家名称
        phone: '',        //商家联系方式
      },


      projectQuery: {
        orderType: '',
      },
      languageList: [],


      list: [
        {
          number: 0,
          price: 0,
          combine: 0,
          unit: '',
        },
      ],
    };
  },
}
</script>

<style scoped lang="less">
  .purchase-add{
    background-color: #fff;
    .title{
      color: #003C78;
      font-size: 14px;
      margin: 8px 8px 0;
      padding: 6px 6px 0;
      background-color: #ccc;
    }
    .mid{
      margin: 0 8px;
      padding: 10px 0 180px;
      border: 1px solid #d9d9d9;
      .add-btn{
        padding: 20px;
        display: flex;
        .add{
          background-color: #003C78;
          border-color: #003C78;
        }
      }
      .ul{
        .li{
          .top{
            display: flex;
            .btn{
              margin: 10px 20px;
            }
          }
          .bottom{
            display: flex;
          }
        }
      }
      .message{
        margin: 20px 0 20px 26px;
      }
      .double-btn{
        margin-top: 20px;
        .btn-cancal{
          margin-left: 40px;
          margin-right: 20px;
        }
        .btn-keep{
          background-color: #003C78;
          border-color: #003C78;
        }
      }
    }
  }
  .common{
    margin: 10px 40px 10px 20px;
    display: flex;
    align-items: center;
  }
  .common-input{
    margin-left: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .number-list{
    display: flex;
    margin-left: 20px;
    padding: 10px 0;
    justify-content: flex-start;
    align-items: center;
  }
  .date{
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 10px 0;
  }
  h3 {
    font-size: 14px;
    margin: 0 10px;
    span{
      color: red;
      margin-right: 2px;
      font-size: 16px;
    }
  }
</style>
