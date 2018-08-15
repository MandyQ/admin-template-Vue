<template>
  <div class="inte_container">
    <div class="block">
      <span class="demonstration"></span>
      <el-cascader
        expand-trigger="hover"
        :options="options"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    </div>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Merchant">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Type">
        <el-select v-model="form.region" placeholder="Select type">
          <el-option label="B2B" value="B2B"></el-option>
          <el-option label="B2C" value="B2C"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item> -->
      <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->
      <!-- <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->
      <el-form-item label="Protocal">
        <el-radio-group v-model="form.resource">
          <el-radio label="STTP"></el-radio>
          <el-radio label="HTTP"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="NOTICE">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Add</el-button>
        <el-button>取消</el-button>
      </el-form-item>
</el-form>

</div>




</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: 'booking',
          children: [{
            value: 'shejiyuanze',
            label: 'B2B',
            children: [{
              value: 'yizhi',
              label: 'STTP'
            }, {
              value: 'fankui',
              label: 'HTTP'
            }]
          }, {
            value: 'daohang',
            label: 'B2C',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: 'JPMC',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout '
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],

         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
       onSubmit() {
        console.log('submit!');
      }
    }
  };







</script>

<style lang="scss" scoped>
.inte_container {
  padding:20px;

  form {
    margin-top:30px;
    width: 60%;
    // margin: 20px auto;

    .el-button--primary {
      color: #fff;
      background-color: #ff6600;
      border-color: #ff6600;
    }

    // .el-radio__input.is-checked .el-radio__inner{
    //   border-color:#f60 !important;
    //   background: #f60 !important;

    // }
}

}



</style>
