<template>
  <div>
    <el-form size="medium">
      <el-form-item label="请输入手机号">
        <el-input/>
      </el-form-item>

      <el-form-item label="验证码">
        <el-input/>
      </el-form-item>

      <el-form-item label="新密码">
        <el-input/>
      </el-form-item>

      <el-form-item label="确认密码" v-model="test">
        <el-input/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">确定</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: '123'
    }
  }
}
</script>

