<template>
  <div>
    <div class="left">
      <div class="left-log">
        <img src="../assets/logo.png">
      </div>
      <div class="dbl-project">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open=" " @close="" :router="true" :unique-opened="false">
            <el-menu-item index=""><i class="el-icon-search"></i><input type="text" placeholder="快速查找项目" value=""></el-menu-item>
            <div class="line"></div>
            <el-menu-item index="/main/add_project"><i class="el-icon-plus"></i>创建项目</el-menu-item>
            <div class="line"></div>
            <el-menu-item index="/main/test"><i class="el-icon-plus"></i>test</el-menu-item>
            <div class="line"></div>
        </el-menu>

        <el-menu default-active="2" class="el-menu-vertical-demo" @open=" " @close="" :router="true" :unique-opened="false">

            <el-menu-item index="/main/project"><i class="el-icon-information"></i>项目1</el-menu-item>
            <div class="line"></div>
        </el-menu>

      </div>
    </div>
    <div class="right">
      <div class="nav">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
      <div class="main-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is a main page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  position: fixed;
  z-index: 1000;
  width: 250px;
  height: 100%;
  box-shadow: 1px 0 13px 0 #A3A3A3;
  top: 0;
  left: 0;
}

.right {
  margin-left: 250px;
}

.line {
  width: 100%;
  height: 1px;
  background: #ddd;
}

.nav {
  border-bottom: 1px solid #e1e1e1;
}

.main-view {
  padding: 60px 0 0 80px;
}
</style>
