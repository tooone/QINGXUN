<template>

		<div class="P-parents page">
			<div class="content">
				<div class="parents-crumb">
					课程表
				</div>
				<el-table
						    :data="tableData"
						    :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      type=""
						      width="55">
						    </el-table-column>
						    <el-table-column
						      prop="date"
						      label="日期"
						      width="">
						    </el-table-column>
						    <el-table-column
						      prop="course"
						      label="课程"
						      width="">
						    </el-table-column>
						    <el-table-column
						      prop="coach"
						      label="教练">
						    </el-table-column>
						    <el-table-column
						      prop="class"
						      label="上课地点">
						    </el-table-column>
						    <el-table-column
						      prop="note"
						      label="备注">
						      <template slot-scope="scope">
						       	<span style="color:#3A75BB;">{{ scope.row.note }}</span>
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








				<div class="parents-crumb">
					我的资料
				</div>
				<div class="coach-con">
					<img src="/images/parcoach01.jpg" />
					<div class="coach-con-center">
						<div class="coach-con-center-item">
							<p><span>姓名</span>萨拉赫</p>
							<p><span>年龄</span>18</p>
							<p><span>性别</span>男</p>
							<p><span>身高</span>180cm</p>
							<p><span>体重</span>68kg</p>
							<p><span>教练</span>麦哲伦</p>
							<p><span>机构</span>青训</p>
						</div>
						<div class="coach-con-center-item">
							<p><span>梯队</span>萨拉赫</p>
							<p><span>伤病</span>18</p>
							<p><span>球员技巧</span>麦哲伦</p>
							<p><span>球员风格</span>180cm</p>
							<p><span>队伍</span>180cm</p>
						</div>

					</div>
					<div class="coach-con-right">
						<p>综合能力7.8</p>

					</div>
				</div>
				<div class="parents-crumb">
					我的资料
				</div>
				<div class="parents-score">
					<div class="parents-score-num">
						<span class="power">核心能力</span>
						<span class="num-name">综合得分</span>
						<span class="num">7.8</span>
					</div>
					<div class="parents-score-num">
						<span class="power">速度</span>
						<span class="num-name">得分</span>
						<span class="num">7.8</span>
					</div>
					<div class="parents-score-speed">
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
					</div>
					<div class="parents-score-num">
						<span class="power">速度</span>
						<span class="num-name">得分</span>
						<span class="num">7.8</span>
					</div>
					<div class="parents-score-speed">
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
					</div>
					<div class="parents-score-num">
						<span class="power">速度</span>
						<span class="num-name">得分</span>
						<span class="num">7.8</span>
					</div>
					<div class="parents-score-speed">
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
					</div>
					<div class="parents-score-num">
						<span class="power">速度</span>
						<span class="num-name">得分</span>
						<span class="num">7.8</span>
					</div>
					<div class="parents-score-speed">
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
						<div class="num-item">
							<div class="display-flex-row">
								平均速度
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" value="7.8" readonly="" />
										<div class="progress">
											<el-progress text-inside="true" :percentage="50"></el-progress>
										</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="parents-crumb">
					我的资料
				</div>
				<el-table
						    :data="tableData2"
						    :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      type=""
						      width="55">
						    </el-table-column>
						    <el-table-column
						      prop="date"
						      label="序号"
						      width="">
						    </el-table-column>
						    <el-table-column
						      prop="course"
						      label="课程"
						      width="">
						      <template slot-scope="scope">
						    	<img  :src="scope.row.imgPath" alt="" style="width: 36px;height: 36px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;">
						      {{ scope.row.course }}
						    </template>
						    </el-table-column>
						    <el-table-column
						      prop="time"
						      label="上课时间">
						    </el-table-column>
						    <el-table-column
						      prop="address"
						      label="上课地点">
						    </el-table-column>
						    <el-table-column
						      prop="state"
						      label="当前状态">
						    </el-table-column>
						    <el-table-column
						      prop="handle"
						      label="操作">
						      <template slot-scope="scope">
						       	<span style="color:#3A75BB;">查看详情</span>
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
				<div class="parents-crumb">
					已购课程 (9)
				</div>
				<div class="hasbuy display-flex-row">
					<img src="/images/hasbuyl.png" class="hasbuy-prev" />
					<img src="/images/hasbuyr.png" class="hasbuy-next" />
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg" />
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy02.jpg" />
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg" />
						<p>足球基础技巧</p>
					</div>

				</div>

				<div class="parents-crumb">
					我的建议
				</div>
				<div class="parent-advice">
					<h5>饮食建议</h5>
					<pre class="parent-advice-con">
                            建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多
建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多
建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质
            	</pre>
					<p class="parent-advice-time">2019-08-21</p>
				</div>
				<div class="parent-advice">
					<h5>饮食建议</h5>
					<pre class="parent-advice-con">
                            建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多
建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多
建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质建议多补充蛋白质
            	</pre>
					<p class="parent-advice-time">2019-08-21</p>
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
	        tableData: [{
	          date: '2019-08-03  8:30-10:00',
	          course: '足球基本技巧',
	          coach: '梅哲龙',
	          class:'深圳市龙岗区大运体育中心',
	          note: '所有球员记得穿红色球鞋'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          course: '足球基本技巧',
	          coach: '梅哲龙',
	          class:'深圳市龙岗区大运体育中心',
	          note: '所有球员记得穿红色球鞋'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          course: '足球基本技巧',
	          coach: '梅哲龙',
	          class:'深圳市龙岗区大运体育中心',
	          note: '所有球员记得穿红色球鞋'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          course: '足球基本技巧',
	          coach: '梅哲龙',
	          class:'深圳市龙岗区大运体育中心',
	          note: '所有球员记得穿红色球鞋'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          course: '足球基本技巧',
	          coach: '梅哲龙',
	          class:'深圳市龙岗区大运体育中心',
	          note: '所有球员记得穿红色球鞋'
	        }],
	        tableData2: [{
	          date: '2019-08-03  8:30-10:00',
	          imgPath:'/images/jlimg.jpg',
	          course: '足球基本技巧',
	          time: '周二 14::00-18:00',
	          address:'深圳市龙岗大运体育中心',
	          state: '开课中',
	          handle:'查看详情'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          imgPath:'/images/jlimg.jpg',
	          course: '足球基本技巧',
	          time: '周二 14::00-18:00',
	          address:'深圳市龙岗大运体育中心',
	          state: '开课中',
	          handle:'查看详情'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          imgPath:'/images/jlimg.jpg',
	          course: '足球基本技巧',
	          time: '周二 14::00-18:00',
	          address:'深圳市龙岗大运体育中心',
	          state: '开课中',
	          handle:'查看详情'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          imgPath:'/images/jlimg.jpg',
	          course: '足球基本技巧',
	          time: '周二 14::00-18:00',
	          address:'深圳市龙岗大运体育中心',
	          state: '开课中',
	          handle:'查看详情'
	        }, {
	          date: '2019-08-03  8:30-10:00',
	          imgPath:'/images/jlimg.jpg',
	          course: '足球基本技巧',
	          time: '周二 14::00-18:00',
	          address:'深圳市龙岗大运体育中心',
	          state: '开课中',
	          handle:'查看详情'
	        }],
	        value: '',
	        multipleSelection: []
	      }
	    },

	    
	  }
</script>

<style scoped>
	@import url("P-parents.css");
</style>