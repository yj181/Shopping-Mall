<template>
    <div class="header">
        <el-row>
            <el-col :span="3" align="right">
                <h3>惠心商城</h3>
            </el-col>
            <el-col :span="21" align="right">
                <el-button @click="handleList" type="text" v-if="quantity === 0"><i class="el-icon-shopping-cart-2"></i>购物车</el-button>
                <el-badge :value="quantity" class="item" v-else>
                    <el-button @click="handleList" type="text"><i class="el-icon-shopping-cart-2"></i>购物车</el-button>
                </el-badge>
                <span>&nbsp;</span>
                <el-button type="text" @click="handleRegister">免费注册</el-button><span>&nbsp;</span>
                <el-button type="text" @click="handelFeedback">意见反馈</el-button><span>&nbsp;</span>
                <el-button type="text" style="margin-right:15px" @click="handleBack">商城首页</el-button> 
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            shoppingNum:1
        }
    },
    computed:{
        ...mapState(['quantity'])
    },
    methods:{
        handleRegister(){
            this.$notify({
                message:"注册页面还未开发..."
            })
        },
        handelFeedback(){
            this.$router.push("/FeedBack")
        },
        handleBack(){
            if(this.$route.name == "MainIndex"){
                this.$message.info("您已在商城首页！")
                return false
            }else{
                this.$router.push({path:"/"})
            }
        },
        handleList(){
            this.$router.push("/GoodsDetail")
        }
    }
}
</script>

<style scoped>
.header{
    height: 46px;
    line-height: 46px;
    background: #ccc;
}
h3{font-size:22px;text-shadow: 5px 5px 5px black; color:cornsilk}
</style>