<template>
  <div class="">
    <h2>添加项目</h2>
    欢迎使用{{this.$store.state.siteName}}，在这里您可以创建项目、接口，通过简单操作便可以完成对接口管理。
    <el-row>
      <el-col :span="8">
        <el-form label-position="right" label-width="0" :model="projectForm">
          <el-form-item>
            <el-input v-model="projectForm.name" placeholder="请输入项目名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="textarea" v-model="projectForm.des" placeholder="请输入项目描述"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="">创建项目</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'addProject',
  data () {
    return {
      projectForm: {
        name: '',
        des: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
