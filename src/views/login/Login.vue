<template>
  <div id="login_box">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h3>vue-admin</h3>
      <el-form-item label="用户名" prop="username">
        <el-input name="username" type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input name="password" type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="checkLogin">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
     data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        } else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loading:false,

        ruleForm: {
          username: 'admin',
          password: 'admin',
          checkPass:'admin',
        },
        rules: {
          username: [
            { required: true, validator: checkName, trigger: 'blur' }
          ],
          password: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      checkLogin() {
        // console.log(this.$refs.ruleForm)
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.loading=true
            console.log('--------------')
            this.$store.dispatch('Login', this.ruleForm).then( ()=> {
              console.log(this.ruleForm)
              this.loading=false
              console.log(111)
              this.$router.push({path:'/'})
           }).catch( ()=>{  //发生错误时的回调
             this.loading = false
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.loginForm.resetFields();
      }
    }
  }


</script>

<style>
h3{
  text-align: center;
}
  #login_box{
    width: 50%;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }

</style>
