<template>
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/training_detail_banner.jpg')">
                                <span>关于我们</span>
                                <p>ABOUT US</p>
                        </div>
                </div>
                <div class="content">

                        <div class="training-content">
                                <div class="aboutus-header display-flex-row justify-content-between">
                                        <div class="aboutus-header-left display-flex-row align-items-center">
                                                <img src="/images/ball.png" alt="">
                                                <div class="aboutus-title">
                                                        <div class="title">ABOUT <span>US</span></div>
                                                        <p>关于我们</p>
                                                </div>
                                        </div>
                                        <div class="aboutus-crumb display-flex-row align-items-bottom">
                                                当前位置：<router-link to="/">首页></router-link><a href="#">关于我们</a>
                                        </div>
                                </div>
                                <div class="about-box">
                                        <div class="training-content-header">
                                                <span>链星青训管理平台简介</span>
                                                <div class="training-content-line"></div>
                                        </div>
                                        <div class="display-flex-row traning-content-item-row">
                                                <div class="about-synopsis">
                                                        <p class="line"></p>
                                                        <p class="title">机构管理</p>
                                                        <p>{{datalist.jg}}</p>
                                                </div>
                                                <div class="about-synopsis">
                                                        <p class="line"></p>
                                                        <p class="title">教练员</p>
                                                        <p>{{datalist.jl}}</p>
                                                </div>
                                                <div class="about-synopsis">
                                                        <p class="line"></p>
                                                        <p class="title">家长/球员</p>
                                                        <p>{{datalist.qy}}</p>
                                                </div>
                                        </div>
                                </div>
                                <div class="about-box">
                                        <div class="training-content-header">
                                                <span>我们是谁</span>
                                                <div class="training-content-line"></div>
                                        </div>
                                        <div class="about-whous">{{datalist.info}}</div>
                                </div>

                        </div>
			</div>
			
			</div>
</template>

<script>
	import {configGetAboutWe} from "../../api/api/web.js"
	export default {
		data() {
			return {
				datalist: {}
			}
		},
		created(){
			configGetAboutWe().then((res) => {
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
@import url("./css/coachTraining.css");
</style>