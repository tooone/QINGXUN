<template>
  <div class="header">
    <div class="head-con">
      <div class="logo"><img src="./logo.png" alt="青训" /></div>
      <div class="navbar">
        <div class="navbar-item" 
        v-for="(item,index) in menulist"
        @click="activeIndex(index)"
        :key="index"
        :class="{'active':index==activeindex}"><router-link :to="item.url">{{item.name}}</router-link></div>
        <div class="navbar-item" :class="{'active':menulist.length==activeindex}">
          <a>入驻入口</a>
          <ul class="rukouul">
            <li @click="activeIndex(menulist.length)"><router-link to="/registered/JG">机构入驻</router-link></li>
            <li @click="activeIndex(menulist.length)"><router-link to="/registered/JL">教练入驻</router-link></li>
            <li @click="activeIndex(menulist.length)"><router-link to="/registered/QY">家长/球员注册</router-link></li>
          </ul>
        </div>
      </div>
      <div class="head-right">
        <!-- 登录状态 -->
        <div class="user-info" v-if="userStatus">
          <img class="headPic" :src="headPic" alt="头像异常"/>

          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              {{nikename}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="onResetPassWord">重置密码</el-dropdown-item>
              <el-dropdown-item @click.native="onLogOut">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!-- 未登录状态 -->
        <router-link v-else class="head-right-login" to="/login/login">登录</router-link>
      </div>
    </div>

    <!-- dialog -->

    <el-dialog title="重置密码" :visible.sync="resetPassWordDialog" width="20%">
      <reset-pass-word/>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import ResetPassWord from './ResetPassWord.vue'

export default {
  components: { ResetPassWord },

  data() {
    return {
      userData: [],
      activeindex:0,
      menulists:[
        {name:"首页",url:"/",relos:["gl","all"]},
        
        {name:"首页",url:"/parent/index",relos:["qy"]},
        {name:"首页",url:"/organ/index",relos:["jg"]},,
        {name:"首页",url:"/coach/index",relos:["jl"]},
        
        {name:"新闻资讯",url:"/information",relos:["jg","qy","all"]},
        
        {name:"教练进修",url:"/coachTraining",relos:["jg","jl","all"]},
        {name:"在线涨球",url:"/parent/onlingInflation",relos:["qy",]},
        
        {name:"我的教案",url:"/coach/mycourse",relos:["jl"]},
        {name:"我的资料",url:"/coach/myDate",relos:["jl"]},
        
        
        {name:"青训机构",url:"/youthInstituttons",relos:["jg","qy","all"]},
        
        {name:"小将之家",url:"/familyTeenagers",relos:["gl","jg","jl","qy","all"]},
        
        {name:"赛事信息",url:"/eventInformation",relos:["gl","jg","jl","qy","all"]},
        
        {name:"球探入驻",url:"/starsSettled",relos:["jg","all"]},
        
        
        {name:"商务合作",url:"/businessCooperation",relos:["gl","jg","jl","qy","all"]},
        {name:"关于我们",url:"/aboutUs",relos:["gl","jg","jl","qy","all"]},

        // {name:"我的教案",url:"/",relos:["gl","jg","jl","qy"]},
        // {name:"我的资料",url:"/",relos:["gl","jg","jl","qy","all"]},		
      ],
      menulist:[],

      resetPassWordDialog: false
    };
  },

  computed: {
    ...mapState('Login', [
      'userStatus'
    ]),

    nikename () {
      return sessionStorage.getItem('nikename')
    },

    headPic () {
      return sessionStorage.getItem('headPic')
    }
  },

  methods:{
    ...mapActions('Login', [
      'logOut'
    ]),

    ...mapMutations('Login', [
      'clearLoginStatus'
    ]),

    activeIndex(index){
      this.activeindex=index
    },
    getMenu(){
      //console.log(this.userData.userView.relos)
      if(this.userData!=null){
        this.menulists.forEach((item)=>{
          if(item.relos.includes(this.userData.userView.relos)){
            this.menulist.push(item)
          }
        })
      }else{
        this.menulists.forEach((item)=>{
          if(item.relos.includes("all")){
            this.menulist.push(item)
          }
        })
      }
    },

    onResetPassWord () {
      console.log(123123)
      this.resetPassWordDialog = true
    },

    onLogOut () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logOut().then(res => {
          const { code } = res
          if (code === 200) {
            this.clearLoginStatus()
          }
        })
      })
    }
  },
  created() {
    let userData = localStorage.getItem('userData');
    this.userData = JSON.parse(userData);
    this.getMenu()
  }
};
</script>

<style lang="less" scoped>
  .header .navbar-item:hover{
      .rukouul{
      display: block;
    }
  }
  .rukouul{
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    display: none;
    li{
      width: 100%;
      font-size: 14px;
      height: 40px;
      a{  
          display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #000;
      }
    }
    li:hover{
      background-color: #c60818;
    }
    li:hover>a{
      color: #fff;
    }
  }

  .headPic {
    background:pink;
    font-size:10px;
  }
</style>
