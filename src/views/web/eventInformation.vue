<template>

        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')">
                                <span>赛事信息</span>
                                <p>EVENT INFORMATION</p>
                        </div>
                </div>
                <div class="content event-information">
                        <div class="tabs">
                                <div class="training-content-header">
                                        <span>赛事信息</span>
                                        <div class="training-content-line"></div>
                                </div>
                        </div>
                        <div class="tabs-container">
                                <div class="tabs-con-item" v-for="(item,index) in datalist.list">
                                        <div class="image"><img :src="item.imgs " alt="">
                                                <div class="informatton-particulars">
                                                        <div class="informatton-title">{{item.name  }}</div>
                                                        <div class="informatton-title">场馆</div>
                                                        <div class="informatton-details">{{item.venue  }}</div>
                                                        <div class="informatton-details">{{item.address }}</div>
                                                        <div class="informatton-title">时间</div>
                                                        <div class="informatton-details">{{item.time  }}</div>
                                                        <div class="informatton-title">参赛年龄</div>
                                                        <div class="informatton-details">{{item.age }}岁</div>
                                                </div>
                                        </div>
                                        <router-link class="tabs-button" :to="'/eventInformationDetails/'+item.id">查看详情<img src="/images/right_arrow.png" /></router-link>
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