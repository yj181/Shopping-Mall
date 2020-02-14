<template>
    <div class="shoppingList">
        <el-carousel height="340px" direction="vertical" class="banner">
            <el-carousel-item v-for="(item,index) in goodsList" :key="index">
                <img :src="item.img" width="790" height="340">
            </el-carousel-item>
        </el-carousel>
        <div class="spike">
            <el-row style="height:42px; line-height:42px;background:#409EFF;padding:0 20px;color:#fff;margin-bottom:20px">
                <el-col :span="6">
                    <h3 style="font-size:24px;">限时秒杀<span style="display:inline-block;font-weight:normal;padding-left:6px">想要你就来！</span></h3>
                </el-col>
                <el-col :span="18" align="right" class="spikeStyle">
                    倒计时&nbsp;<span>{{spikeHours}}</span>:<span>{{spikeMinutes}}</span>:<span>{{spikeSeconds}}</span>   
                </el-col>
            </el-row>
            <el-row style="display:flex;flex-wrap:wrap;overflow:hidden;">
                <el-col :span="5" v-for="(item, index) in spikeList" :key="index" style="margin:12px 22px">
                    <el-card :body-style="{ padding: '0px'}">
                    <img :src="item.img" class="image">
                    <div style="padding: 10px;">
                        <span style="display:block;height:40px;font-size:12px">{{item.info}}</span>
                        <div class="txtStyle">
                            <el-button type="text" style="color:red">￥{{ item.price }}</el-button>
                            <el-button type="text" 
                            style="margin-left:55px" icon="el-icon-shopping-cart-full"
                            @click.prevent.native="handleAddList(item,index,$event)"
                            ref="btn"
                            >加入购物车</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex';
export default {
    data(){
        return{
            timeObj:null,
            list:[],
        }
    },
    created(){
        this.scrollimg();
        this.spikeGoods();
    },
    mounted(){
        const that = this;
        this.timeObj = setInterval(function () {
            that.splikeTime();
        }, 1000);
    },
    computed:{
        ...mapState(['goodsList','spikeList','countdown']),
        ...mapGetters(['spikeHours','spikeMinutes','spikeSeconds']),
        
    },
    methods:{
        ...mapActions(['scrollimg','spikeGoods']),
        ...mapMutations(['splikeTime','quantityCount','handlePay']),
        handleAddList(item,ind,e){
            let txt = e.target.innerText;
            if(txt == "加入购物车"){
                this.$refs.btn[ind].$el.innerText = "已加入购物车"
                this.list.push(item)
                this.quantityCount(this.list) 
                this.handlePay(item)
            }else{
                return false
            }
        }
    },
    destroyed(){
        clearInterval(this.timeObj);
    }
}
</script>

<style scoped>
.shoppingList{
    border: 1px solid #ccc;
    padding: 10px;
}
.banner img{
    display: block;
    width: 100%;
}
.banner{
    margin-bottom: 20px
}
.spikeStyle span{
    display: inline-block;
    background: #666;
    border-radius: 12px;
    height: 24px;
    line-height: 24px;
    margin: 0 5px;
    padding: 0 5px;
    text-align: center;
    width: 20px;
}
.image{
    width: 100%;
    display: block
}

.addRed{
    color:red
}
</style>