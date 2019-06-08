<template>
		<div class="login-page page">
			<div class="login-image-box">
				<div class="login-image" style="background-image: url(/images/loginbg.jpg);">
					<div class="login-con">
						<div class="login-con-tab display-flex-row">
							<span @click="changtype(1)" :class="{active:ruleForm.type==1}">我是教练员</span>
							<span @click="changtype(2)" :class="{active:ruleForm.type==2}">我是家长/球员</span>
							<span @click="changtype(3)" :class="{active:ruleForm.type==3}">我是管理员</span>
						</div>
						<!--登录-->
							<div class="display-flex-row logon-input">
								<div class="iconbox">
									<img src="/images/usericon.png"/>
								</div>
								<input type="text"  v-model="ruleForm.name" placeholder="手机号"/>
							</div>
							<div class="display-flex-row logon-input">
								<div class="iconbox">
									<img src="/images/keyicon.png"/>
								</div>
								<input type="password" v-model="ruleForm.pasword" placeholder="密码"/>
							</div>
							
							<button  @click="submitForm()">登录</button>
							<div class="display-flex-row login-href">
								<a href="#" class="login-admin">平台管理登录</a>
								<a href="#" class="forgetPassword">忘记密码</a>
								<a href="#">微信扫一扫</a>
							</div>
							
						<!--微信扫一扫
						<div class="login-wx-scan display-flex-column">
							<img src="/images/loginewm.jpg" />
							<span>账户密码登录</span>
						</div>-->

					</div>
				</div>
			</div>

		</div>

</template>

<script>
	import {
		userLogin
	} from "../../../api/api/index.js"
	export default {
		data() {
			return {
				ruleForm: {
					"name": "",
					"pasword": "",
					type: 1
				},
			}
		},
		methods: {
			submitForm(formName) {
					if (this.ruleForm.name==""){
						this.$message({
							message: "请输入用户名或手机号",
							type: 'error',
							duration: 5 * 1000
						});
					} else if (this.ruleForm.pasword==""){
						this.$message({
							message: "请输入密码",
							type: 'error',
							duration: 5 * 1000
						});
					}
					else{
						//alert('submit!');
						userLogin(this.ruleForm).then((res) => {
							this.$message({
								message: "登录成功",
								type: 'success',
								duration: 5 * 1000
							});
							let _data=res.data;
							
							if (this.type==1) {
								_data.userView.relos="jl"
							} else if (this.type==2) {
								_data.userView.relos="qy"
							} else{
								_data.userView.relos="jg"
							}
							localStorage.userData = JSON.stringify(_data)
							//this.$router.push("/")
							if (this.type==1) {
								window.location.href="/coach/index"
							} else if (this.type==2) {
								window.location.href="/organ/index"
							} else if (this.type==3) {
								window.location.href="/parent/index"
							}
							
						}).catch((res) => {
							this.$message({
								message: res.message,
								type: 'error',
								duration: 5 * 1000
							});
						})
					}
			}
			,changtype(num){
				this.ruleForm.type=num
			}
		}
	}
</script>
<style scoped>
input:focus{
	outline: none;
}
/*登录*/
.login-page{
	padding-top: 80px;
}
.login-page .login-image-box{
	margin: 0 auto;
    width: 100%;
    height: 609px;
    max-width: 1920px;
}
.login-page .login-image{
    height: 100%;
    width: 100%;
    text-align: center;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.login-page .login-image .login-con{
	background: #fff;
	padding: 37px 26px 54px 26px;
	margin-right: 170px;
}
.login-page .login-con-tab{
	align-items: center;
	-webkit-align-items: center;
}
.login-page .login-con-tab span{
	font-size: 16px;
	color: #333;
	margin-right: 18px;
	cursor: pointer;
}
.login-page .login-con-tab span:last-child{
	margin-right: 0;
}
.login-page .login-con-tab span.active{
	font-size: 18px;
	font-weight: bold;
}
.login-page .logon-input{
	
	border: 1px solid #BDBDBD;
	margin: 20px 0;
}
.login-page .logon-input .iconbox{
	width: 44px;
	height: 44px;
	background: #DDDDDD;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	justify-content:center;
	-webkit-align-content: center;
}

.login-page .logon-input input{
	flex: 1;
	border: none;
	text-indent: 10px;
	font-size: 14px;
	color: #999999;
}

.login-page .login-con button{
	background: #E60012;
	height: 44px;
	line-height: 44px;
	border-radius: 2px;
	-moz-border-radius: 2px;
	text-align: center;
	font-size: 16px;
	color: #fff;
	border: none;
	width: 100%;
}
.login-page .login-con .login-href{
	margin-top: 40px;
}
.login-page .login-con .login-href a{
	font-size: 12px;
	color: #666;
}

.login-page .login-con .login-href a.login-admin{
	color: #3C7AC5;
	margin-right: 117px;
}
.login-page .login-con .login-href a.forgetPassword{
	margin-right: 20px;
}
.login-page .login-con .login-wx-scan{
	align-items: center;
	-webkit-align-items: center;
	
}
.login-page .login-con .login-wx-scan span{
	font-size: 12px;
	color: #3C7AC5;
	cursor: pointer;
}
.login-page .login-con .login-wx-scan img{
	width: 218px;
	height: 218px;
	margin-top: 26px;
	margin-bottom: 12px;
}
</style>