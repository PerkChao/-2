<template>
  <div class="write-plan">
    <div class="title">制定生产计划</div>
    <div class="mid">
      <div class="message">
        <span class="span">订单编号：1234567890</span>
        <span class="span">客户名称：这是姓名</span>
        <span class="span">产品名称：这是名称</span>
        <span class="span">件数：122</span>
      </div>
      <div class="step">
        <Timeline>
          <TimelineItem>
            <p class="time">开胚</p>
            <div class="common-input">
              <h3><span>*</span>车间</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="车间名称"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>执行人</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="请输入执行人"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>开始日期</h3>
              <Row>
                <Col span="12">
                  <DatePicker
                    size="small"
                    type="date"
                    v-model="projectQuery.time"
                    placeholder="Select date"
                    style="width: 200px"
                  ></DatePicker>
                </Col>
              </Row>
            </div>
            <!--<p class="content">Apple I 问世</p>-->
          </TimelineItem>
          <TimelineItem>
            <p class="time">cnc 雕铣</p>
            <div class="common-input">
              <h3><span>*</span>车间</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="车间名称"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>执行人</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="请输入执行人"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>开始日期</h3>
              <Row>
                <Col span="12">
                  <DatePicker
                    size="small"
                    type="date"
                    v-model="projectQuery.time"
                    placeholder="Select date"
                    style="width: 200px"
                  ></DatePicker>
                </Col>
              </Row>
            </div>
          </TimelineItem>
          <TimelineItem>
            <p class="time">二次加工</p>
            <div class="common-input">
              <h3><span>*</span>车间</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="车间名称"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>执行人</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="请输入执行人"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>开始日期</h3>
              <Row>
                <Col span="12">
                  <DatePicker
                    size="small"
                    type="date"
                    v-model="projectQuery.time"
                    placeholder="Select date"
                    style="width: 200px"
                  ></DatePicker>
                </Col>
              </Row>
            </div>
          </TimelineItem>
          <TimelineItem>
            <p class="time">Qc 包装</p>
            <div class="common-input">
              <h3><span>*</span>车间</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="车间名称"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>执行人</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="请输入执行人"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>开始日期</h3>
              <Row>
                <Col span="12">
                  <DatePicker
                    size="small"
                    type="date"
                    v-model="projectQuery.time"
                    placeholder="Select date"
                    style="width: 200px"
                  ></DatePicker>
                </Col>
              </Row>
            </div>
          </TimelineItem>
          <TimelineItem>
            <p class="time">产品交付</p>
            <div class="common-input">
              <h3><span>*</span>车间</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="车间名称"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>执行人</h3>
              <Select
                v-model="projectQuery.orderType"
                placeholder="请输入执行人"
                size="small"
                style="width:200px;"
              >
                <Option
                  v-for="(item,index) in languageList"
                  :value="item.value"
                  :key="index"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="common-input">
              <h3><span>*</span>开始日期</h3>
              <Row>
                <Col span="12">
                  <DatePicker
                    size="small"
                    type="date"
                    v-model="projectQuery.time"
                    placeholder="Select date"
                    style="width: 200px"
                  ></DatePicker>
                </Col>
              </Row>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="double-btn">
        <Button
          class="btn-first"
          type="primary"
          @click="sendTo"
        >确认</Button>
        <Button
          class="btn-cancal"
          type="default"
          @click="cancal"
        >取消</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "writeplan",
  methods: {
    cancal() {

    },
    sendTo() {

    },
  },
  data() {
    return {
      projectQuery: {
        orderType: '',
        time: '',
      },
      languageList: [],
    };
  },
}
</script>

<style scoped lang="less">
  .write-plan{
    background-color: #fff;
    .title{
      color: #003C78;
      font-size: 14px;
      margin: 8px 8px 0;
      padding: 6px;
      background-color: #ccc;
    }
    .mid{
      margin: 0 8px;
      padding: 10px 0 180px;
      border: 1px solid #d9d9d9;
      .message{
        margin: 10px 6px;
        padding: 10px 8px;
        border: 1px solid #d9d9d9;
        .span{
          margin: 0 24px;
          font-size: 14px;
        }
      }
      .step{
        padding: 16px;
      }
      .double-btn{
        margin-left: 30px;
        .btn-first{
          background-color: #003c78;
          border-color: #003c78;
        }
        .btn-cancal{
          margin: 0 20px;
        }
      }
    }
  }

  .common-input{
    padding: 8px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  h3 {
    min-width: 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    margin-right: 10px;
    span{
      color: red;
      margin-right: 2px;
      font-size: 12px;
    }
  }

</style>
