<template>

	<div class="organ-page page">
			<div class="content">
				<div class="organ-crumb">
					旗下教练（42）
					<div class="dowmzj">
						<el-select v-model="value" placeholder="默认排序">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					快速查询
					<div class="dowmzj">
						<el-input v-model="input" placeholder="请输入手机号或姓名"></el-input>
					</div>
					
					<div class="organ-crumb-right">
						<button  class="organ-red">审核</button>
						<button  class="organ-red">移除教练</button>
						<button  class="organ-red">审核列表</button>
						<button  class="organ-red">账号资料</button>
						<button  class="organ-red">我的简介</button>
						<button  class="organ-red">装备申请列表</button>
					</div>
				</div>
				<div class="organ-group-con paddingtop20">
					<el-table
						:header-cell-style="{background:'#F7F7F7',color:'#333333'}"
					    ref="multipleTable"
					    :data="tableData"
					    stripe
					    tooltip-effect="dark"
					    style="width: 100%"
					    @selection-change="handleSelectionChange">
					    <el-table-column
					      type="selection"
					      width="55">
					    </el-table-column>
					    <el-table-column
					      label="序号"
					      width="120">
					      <template slot-scope="scope">{{ scope.row.date }}</template>
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="教练"
					      width="200">
					      <!--插入图片链接的代码-->
							    <template slot-scope="scope">
							    	<img  :src="scope.row.imgPath" alt="" style="width: 36px;height: 36px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;">
							      {{ scope.row.name }}
							      
							    </template>
					    </el-table-column>
					    <el-table-column
					      prop="level"
					      label="等级"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="post"
					      label="职位"
					      show-overflow-tooltip>
							<!--插入图片链接的代码-->
							    <template slot-scope="scope">
							    	{{ scope.row.post }}
								    <a href="">
								    	<img  :src="scope.row.editorimgpath" alt="" style="width: 18px;height: 17px;margin:1px;vertical-align: middle;">
								    </a>
							    </template>
					    </el-table-column>
					    <el-table-column
					      prop="course"
					      label="课程"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="team"
					      label="队伍"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="star"
					      label="星级"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="opera"
					      label="操作"
					      show-overflow-tooltip>
					      <template slot-scope="scope">
					        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
					  <div class="organ_pagination">
						  	<el-pagination
						  	:hide-on-single-page="value"
							background
						      @size-change="handleSizeChange"
						      @current-change="handleCurrentChange"
						      :current-page="currentPage4"
						      :page-size="5"
						      layout="total, prev, pager, next"
						      :total="462">
						    </el-pagination>
					  </div>
					
					
					
					
					
					
				</div>
				
			</div>
		</div>

</template>

<script>
	export default {
		methods: {
		handleClick(row) {
	        console.log(row);
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      }
	    },
		data() {
	      return {
	      	options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	        tableData: [{
	          date: '01',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '02',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '03',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '04',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '05',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '06',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }, {
	          date: '07',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          level: 'A+',
	          post: '主教',
	          course: '6',
	          team: '3',
	          star: '4'
	        }],
	        value: '',
	        multipleSelection: []
	      }
	    },

	    
	  }
</script>

<style scoped>
	@import url("porgan.css");
</style>
