<template>
  <div class="page coach-page">
    <div class="banner">
      <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')"></div>
    </div>
    <div class="content event-detail">
      <div class="tabs" style="    margin-top: 0;">
        <div class="training-content-header">
          <span>赛事详情</span>
          <div class="training-content-line"></div>
          <a href="#" class="look-team">查看参赛队伍</a>
        </div>
      </div>
      <div class="tabs-container display-flex-row">
        <img src="/images/event-informatton.jpg" />
        <div class="flex1">
          <p class="headline-title">U19级 夏季常规对抗赛</p>
          <p class="headline-detail">参赛年龄：12-16岁</p>
          <p class="headline-detail">时间：2019.06.11-06.13</p>
          <p class="headline-detail">场馆：浩昇足球公园     深圳市南山区沙河东路111号</p>
          <router-link to="tournamentRegistration" class="headline-button" >立即报名</router-link>
        </div>

      </div>
    </div>
		</div>
   </template>
   
   <script>
 	import {matchGetList} from "../../api/api/web.js"
 export default {
 	data() {
 		return {
 			datalist: {}
 		}
 	},
 	created(){
 		matchGetList({"pageNum": 0,"pageSize": 10}).then((res) => {
 			this.datalist=res.data
 		}).catch((res) => {
 			this.$message({
 				message: res.message,
 				type: 'error',
 				duration: 5 * 1000
 			});
 		})
 	}
 }
   </script>
   
   <style scoped>
   	@import url("css/D-coach-training.css");
   </style>