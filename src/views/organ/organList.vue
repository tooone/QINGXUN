<template>

<div class="organ-page page">
			<div class="content">
				<div class="organ-crumb">
					<a href="" class="back-btn"></a>
					审核列表
					<div class="organ-crumb-right">
						<button class="batchbtn">批量操作</button>
						<button class="organ-blue">审核通过</button>
						<button  class="organ-red">删除记录</button>
					</div>
				</div>
				<div class="organ-detail">
					<div class="organlist-tab">
						<div class="tabs">
	                        <div class="tabs-con">
	                                <a href="#">教练</a>
	                                <a class="active" href="#">球员</a>
	                        </div>
	                    </div>
					</div>
					
					
					
					
					
				</div>
				
				
				
			</div>
		</div>

</template>

<script>
	  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
	@import url("porgan.css");
</style>