<template>

	<div class="organ-page page">
			<div class="content">
				<div class="organ-crumb">
					<a href="" class="back-btn"></a>
					装备申请列表
				</div>
				<div class="organ-equip">
					<el-table
						:header-cell-style="{background:'#F7F7F7',color:'#333333'}"
					    :data="tableData"
					    stripe
					    style="width: 100%">
					    <el-table-column
					      type=""
					      width="55">
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      label="日期"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="institu"
					      label="申请机构"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="proposer"
					      label="申请人">
					    </el-table-column>
					    <el-table-column
					      prop="time"
					      label="申领日期">
					    </el-table-column>
					    <el-table-column
					      prop="file"
					      label="文件">
					      <template slot-scope="scope">
						    	{{ scope.row.post }}
							    <a href="" style="color:#2D64B3">
							    	装备文档
							    </a>
						    </template>
					    </el-table-column>
					    <el-table-column
					      prop="note"
					      label="备注">
					    </el-table-column>
					  </el-table>
					
					
					
				</div>
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
	          date: '2019-05-07',
	          institu: '链星青训',
	          proposer: '麦哲伦',
	          time: '2019-05-07',
	          file: '装备文档',
	          note: '5月17日前请确认所需装备的筹备情况，届时申领人与负责人联系'
	        }, {
	          date: '2019-05-07',
	          institu: '链星青训',
	          proposer: '麦哲伦',
	          time: '2019-05-07',
	          file: '装备文档',
	          note: '5月17日前请确认所需装备的筹备情况，届时申领人与负责人联系'
	        }, {
	          date: '2019-05-07',
	          institu: '链星青训',
	          proposer: '麦哲伦',
	          time: '2019-05-07',
	          file: '装备文档',
	          note: '5月17日前请确认所需装备的筹备情况，届时申领人与负责人联系'
	        }, {
	          date: '2019-05-07',
	          institu: '链星青训',
	          proposer: '麦哲伦',
	          time: '2019-05-07',
	          file: '装备文档',
	          note: '5月17日前请确认所需装备的筹备情况，届时申领人与负责人联系'
	        }]
	      }
	    }
	  }
</script>

<style scoped>
	@import url("porgan.css");
</style>