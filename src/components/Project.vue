<template>
  <div class="project">
    <el-row>
      <el-col :span="24">
        <el-collapse :accordion="false">
          <el-collapse-item>
            <template slot="title">
              </i>access
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              </i>users
            </template>
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              </i>sync
            </template>
            <div>简化流程：设计简洁直观的操作流程；</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              </i>photos
            </template>
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  margin: -50px 0 0 -70px;
}
</style>
