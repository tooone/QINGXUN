<template>
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')">
                                <span>教练进修</span>
                                <p>COACH TRAINING</p>
                        </div>
                </div>
                <div class="content">
                        <div class="navbar">
                                <a class="active" href="#">在线学习</a>
                                <a href="#">线下进修</a>
                        </div>
                        <div class="tabs">
                                <div class="tabs-con">
                                        <a class="active" href="#">免费</a>
                                        <a href="#">付费</a>
                                </div>
                        </div>
                        <div class="tabs-container">
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <router-link class="tabs-button" to="/trainingDetail">查看详情<img src="/images/right_arrow.png" /></router-link>
                                </div>
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <a class="tabs-button" href="#">查看详情<img src="/images/right_arrow.png" /></a>
                                </div>
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <a class="tabs-button" href="#">查看详情<img src="/images/right_arrow.png" /></a>
                                </div>
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <a class="tabs-button" href="#">查看详情<img src="/images/right_arrow.png" /></a>
                                </div>
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <a class="tabs-button" href="#">查看详情<img src="/images/right_arrow.png" /></a>
                                </div>
                                <div class="tabs-con-item">
                                        <div class="image"><img src="/images/coach_1.jpg" alt="">
                                                <p class="tabs-item-title">中小学实用足球技能</p>
                                        </div>
                                        <a class="tabs-button" href="#">查看详情<img src="/images/right_arrow.png" /></a>
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
 				key: "value"
 			}
 		},
 	}
 </script>
 
 <style scoped>
 @import url("./css/coachTraining.css");
 </style>