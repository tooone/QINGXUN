<template>
	<div class="P-parents page">
		<div class="content">
			<div class="parents-crumb">
				<a href="" class="back-btn"></a>
				编辑资料
			</div>
			<div class="p-editor-con">
				<el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">

					<el-form-item label="照片" prop="nikename">
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
				</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="formLabelAlign.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="身高">
					<el-input v-model="formLabelAlign.name" placeholder="请输入身高"></el-input>
				</el-form-item>
				<el-form-item label="体重">
					<el-input v-model="formLabelAlign.name" placeholder="请输入体重"></el-input>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input v-model="formLabelAlign.name" placeholder="请输入年龄"></el-input>
				</el-form-item>
				<el-form-item label="在读学校">
					<el-input v-model="formLabelAlign.region" placeholder="请输入在读学校"></el-input>
				</el-form-item>
				<el-form-item label="在读年级">
					<el-input v-model="formLabelAlign.type" placeholder="请输入在读年纪"></el-input>
				</el-form-item>
				<el-form-item label="在读班级">
					<el-input v-model="formLabelAlign.type" placeholder="请输入在读班级"></el-input>
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input v-model="formLabelAlign.type" placeholder="请输入身份证号"></el-input>
				</el-form-item>
				<el-form-item label="监护人姓名">
					<el-input v-model="formLabelAlign.type" placeholder="请输入监护人姓名"></el-input>
				</el-form-item>
				<el-form-item label="监护人电话">
					<el-input v-model="formLabelAlign.type" placeholder="请输入监护人电话"></el-input>
				</el-form-item>
				<el-form-item label="监护人微信">
					<el-input v-model="formLabelAlign.type" placeholder="请输入监护人微信"></el-input>
				</el-form-item>
				<el-form-item label="机构地址" prop="addressInfo">
					<el-select v-model="ruleForm.value1" placeholder="省/直辖市">
						<el-option
						v-for="item in ruleForm.province"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				
				<el-select v-model="ruleForm.value2" placeholder="市">
					<el-option
					v-for="item in ruleForm.city"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			
			<el-select v-model="ruleForm.value3" placeholder="县/区">
				<el-option
				v-for="item in ruleForm.district"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-input style="margin-top: 10px;" v-model="ruleForm.nikename" placeholder="请输入详细地址"></el-input>
	</el-form-item>


	<el-form-item label="履历">
		<div class="display-flex-row editor-cv">
			<span class="time">2019-04-04至2019-04-25</span>
			<span>深圳青协足球训练营球队主教</span>
		</div>
		<div>
			带队赢得2019年全国U9足球联赛广东赛区冠军
		</div>
		<button class="editor-add">添加</button>
	</el-form-item>

	<el-form-item label="">
		<div class="editor-add-con">
			<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
				<el-form-item label="时间">
					<el-date-picker
					v-model="value1"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>


			</el-form-item>
			<el-form-item label="地点">
				<el-input v-model="formLabelAlign.name" size="small" placeholder="请输入地点"></el-input>
			</el-form-item>
			<el-form-item label="球队位置">
				<el-input v-model="formLabelAlign.region" size="small" placeholder="请输入地点"></el-input>
			</el-form-item>
			<el-form-item label="经历">
				<el-input
				type="textarea"
				:autosize="{ minRows: 2, maxRows: 4}"
				placeholder="请输入内容"
				v-model="textarea2">
			</el-input>
		</el-form-item>
		<button class="editor-addbtn">确定</button>
	</el-form>




</div>
</el-form-item>





<el-form-item label="服装尺码">
	<el-input v-model="formLabelAlign.type" placeholder="XS"></el-input>
</el-form-item>
<el-form-item label="鞋码">
	<el-input v-model="formLabelAlign.type" placeholder="请输入鞋码"></el-input>
</el-form-item>
<el-form-item label="旧密码">
	<el-input v-model="formLabelAlign.type" placeholder="请输入旧密码"></el-input>
</el-form-item>
<el-form-item label="新密码">
	<el-input v-model="formLabelAlign.type" placeholder="请输入新密码"></el-input>
</el-form-item>
<el-form-item label="确认密码">
	<el-input v-model="formLabelAlign.type" placeholder="请再次输入密码"></el-input>
</el-form-item>
<el-form-item label="">
	<div class="editorbtn-box">
		<button class="save">保存</button>
		<button class="cacel">取消</button>
	</div>
</el-form-item>
</el-form>









</div>



</div>
</div>






















</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				},
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},

				ruleForm: {
					dialogIhomeImgs1: [],
					dialogIhomeImgs2:[],
					dialogVisible1:false,
					dialogVisible2:false,
					value1: '',
					value2: '',
					value3: '',
					province:[{
						value: '广东省',
						label: '广东省'     
					}],
					city:[{
						value: '2',
						label: '深圳市'
					}
					],
					district:[{
						value: '3',
						label: '宝安区'
					}
					],
					"name": "",
					"password": "",
					"phone": ""
				},
				value1: '',
				value2: ''
			};
		}
	}
</script>

<style scoped>
	@import url("P-parents.css");
</style>