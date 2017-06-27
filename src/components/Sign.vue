<template>
  <el-row :gutter="10">
    <el-col :span="6" :offset="9">
      <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <el-form :model="signForm" ref="signForm" label-width="0px" class="demo-ruleForm">
       <el-form-item label="" prop="email">
            <el-input type="email" v-model="signForm.email" auto-complete="off" name="email" placeholder="email" style="width:100%;margin-bottom:22px"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
            <el-input type="password" v-model="signForm.password" auto-complete="off" name="password" placeholder="password" style="width:100%;margin-bottom:22px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" style="width:100%;margin-bottom:22px" @click.native.prevent="submitForm('signForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text">忘记密码</el-button>
          <el-button type="text">免费注册</el-button>
          <el-checkbox v-model="signForm.checked"  style="padding-left: 35px;">记住密码</el-checkbox>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      msg: 'Welcome to interface test',
      signForm: {
        email: '',
        password: '',
        checked: true
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/main')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
