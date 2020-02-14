<template>
    <div>
    <div class="content">
        <div class="logo">
         <h3>欢迎登陆</h3>
        <div class="logoImg">
            <img src="../../static/images/logo.png" widht="408" height="75">
        </div>
        <el-form :model="loginMSG" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="accoutNum">
                <el-input v-model.trim="loginMSG.accoutNum">
                    <template slot="prepend">会员账号：</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model.trim="loginMSG.password">
                    <template slot="prepend">会员密码：</template>
                </el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" style="text-align:right">
            <el-button @click="handleRegister" size="small" round>注册</el-button>
            <el-button type="primary" @click="handleLogin" size="small" round>登陆</el-button>
        </div>
        </div>
    </div>
    </div>
</template>  

<script>
let Storage = window.localStorage;
export default {
   data(){
       return {
           loginMSG:{},
           rules:{
              'accoutNum':[{required:true,message:"请输入账号",trigger:"blur"}],
              'password':[{required:true,message:"请输入密码",trigger:"blur"}] 
           }
       }
   }, 
   methods:{
       handleLogin(){
           this.$refs['ruleForm'].validate(valid =>{
               if(valid){
                   this.$message.success("登陆成功！")
                   Storage.setItem("SaveAccount",JSON.stringify(this.loginMSG))
                   this.$router.push({path:"/"})
               }else{
                   return false
               }
           })
       },
       handleRegister(){
           this.$message.info("暂时未开发...")
       },
   }
}
</script>

<style scoped>
.content{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo{
    width:420px;
    height: 350px; 
}
.logo h3{text-align: center;font-size: 24px; background:#f5f7fa;line-height: 48px;color:#909399}
.logoImg{
    display: flex;
    justify-content: center;
    margin:5% 0 5% 0;
}
.logoImg img{
    width: 408px;
    height: 75px;
}
</style>