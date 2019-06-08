<template>
  <div class="">
	  <div class="content">
	          <div class="training-content coach-page" style="margin-top: 120px;">
	                  <div class="aboutus-header display-flex-row justify-content-between">
	                          <div class="aboutus-header-left display-flex-row align-items-center">
	                                  <img src="/images/ball.png" alt="">
	                                  <div class="aboutus-title">
	                                          <div class="title">INSTITUTION<span>ENTRY</span></div>
	                                          <p>球员注册</p>
	                                  </div>
	                          </div>
	                          <div class="aboutus-crumb display-flex-row align-items-bottom">
	                                  当前位置：<router-link to="/">首页></router-link><a href="">球员注册</a>
	                          </div> 
	                  </div>
	                  <div class="about-box">
				 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="球员姓名" prop="name">
						<el-input v-model="ruleForm.nikename" placeholder="请输入球员名称"></el-input>
					</el-form-item>

					<el-form-item label="照片" prop="imgsA">
								<el-upload
									action="https://jsonplaceholder.typicode.com/posts/"
									list-type="picture-card"
									:on-preview="handlePictureCardPreview1"
									:on-remove="handleRemove">
									<i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog :visible.sync="ruleForm.dialogVisible1">
									<img width="100%" :src="ruleForm.dialogIhomeImgs1" alt="">
								</el-dialog>
								<div>(仅支持JPG格式，图片仅支持5M大小)</div>
						</el-form-item>
            
						<el-form-item label="年龄" prop="age">
							<el-input v-model="ruleForm.age" placeholder="请输入年龄"></el-input>
						</el-form-item>

						<el-form-item label="在读学校" prop="school">
							<el-input v-model="ruleForm.school" placeholder="请输入毕业院校"></el-input>
						</el-form-item>

						<el-form-item label="在读年级" prop="clas">
					    <el-select v-model="ruleForm.value2" placeholder="请选择">
								<el-option
									v-for="item in ruleForm.clas"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</el-form-item>
				
					
					
					
					
					<el-form-item label="负责人" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item label="证件号码" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item label="微信" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					
					
					<el-form-item label="设置密码" prop="password">
						<el-input type="password" v-model="ruleForm.password"></el-input>
					</el-form-item>
		 			<el-form-item label="重复密码" prop="name">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="phone">
						<el-input v-model="ruleForm.phone"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button class="btn-color-red" type="primary" @click="submitForm('ruleForm')">申请入驻</el-button>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
	                  </div>
	  
	          </div>
	  </div>
  </div>
</template>

<script>
import {userAddQY} from "../../../api/api/reg.js"
	export default {
		data() {
			return {
				ruleForm: {
					//球员名称
					name:'',
					//照片
					dialogIhomeImgs1:[],
					dialogVisible1:false,
					//年龄
					age:'',
					//在读学校
					school:'',
					//在读年级
					value1:'',
					clas:[{
              value: '2',
							label: '六年级' 
					}],
					"nikename": "",
					"password": "",
					"phone": ""
				},
				rules: {
          name: [
            { required: true, message: '请输入球员名称', trigger: 'blur' },
					],
					age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
					],
					school: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
          ],
					password: [
					  { required: true, message: '请输入密码', trigger: 'blur' },
					   { max: 6, message: '长度在6个字符以上', trigger: 'blur' }
					],
					phone: [
					  { required: true, message: '请输入手机号码', trigger: 'blur' },
					   { min: 11, max: 11, message: '请输入符合格式的手机号码', trigger: 'blur' }
					],
					}
			}
		},
		 methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
						userAddQY(this.ruleForm).then((res)=>{
							this.$message({
							  message: "创建成功",
							  type: 'error',
							  duration: 5 * 1000
							});
							this.router.push("/")
						}).catch((res)=>{
							this.$message({
							  message: res.message,
							  type: 'error',
							  duration: 5 * 1000
							});
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
			},
			//照片
			handleRemove(file, fileList) {
        console.log(file, fileList);
      },
			handlePictureCardPreview1(file) {
        this.ruleForm.dialogIhomeImgs1 = file.url;
        this.ruleForm.dialogVisible1 = true;
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>
<style>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    width: 100px;
	    height: 100px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
</style>
<style scoped>
	
	@import url("../css/D-coach-training.css");
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 100px;
	    height: 100px;
	    line-height: 100px;
	    text-align: center;
	  }
	  .avatar {
	    width: 100px;
	    height: 100px;
	    display: block;
	  }
</style>
