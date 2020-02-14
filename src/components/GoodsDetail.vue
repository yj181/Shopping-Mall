<template>
    <div>
        <Header></Header>
        <el-card>
            <div>
                <h3 style="font-size:26px;color:red;text-align:center">温馨小提示！</h3>
                <p style="color:red;text-align:center;margin-top:6px">结算购物清单时，请选中所要支付的产品，否则不能结算哦。</p>
            </div>
            <h3 style="font-size:18px;line-height:30px;height:30px">购物清单：</h3>
            <el-table
                ref="multipleTable"
                :data="tableData"
                border
                style="width:100%;margin:20px 0"
                max-height="300"
                @selection-change="handleSelection"
                class="tableStyle"
            >
                <el-table-column
                type="selection"
                width="40">
                </el-table-column>
                <el-table-column prop="img" label="图片" width="120" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.img">
                    </template>
                </el-table-column>
                <el-table-column prop="info" label="标题" min-width="120" show-overflow-tooltip header-align="center"></el-table-column>
                <el-table-column prop="num" label="数量" align="center" min-width="40">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.num" :min="1" size="mini" @change="handleChange"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="单价" align="center" width="120"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="handleDel(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row>
                <el-col align="right">
                    <h3 style="font-size:20px">共<span style="color:red;font-size:24px">{{goodsTotal}}</span>件商品，应付总金额：<span style="color:red;font-size:24px">￥{{total.toFixed(1)}}</span></h3>
                    <el-button type="primary" style="margin-top:20px" @click="handlePay">去结算</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import Header from './Header';
export default {
    data(){
        return {
            tableData:[],
            total:0,
            goodsTotal:0,
        }
    },
    computed:{
        ...mapState(['shoppingList'])
    },
    components:{
        Header
    },
    mounted(){
        this.quantityCount(0)
        if(this.shoppingList.length > 0){
            this.tableData = this.handleRepeat(this.shoppingList).map(key=>{
                if(!key.num){
                    this.$set(key,'num',0)
                }
                return key
            })
        }
    },
    methods:{
        ...mapMutations(['quantityCount']),
        handleChange(value){
            this.total = this.tableData.reduce((prev, currentValue, currentIndex, arr)=>{
                return prev + currentValue.price * currentValue.num
            },0)
        },
        handleRepeat(list){
            let obj = {};
            let arrList = list.reduce((prev,next)=>{
                obj[next.id] ? '' : obj[next.id] = true && prev.push(next)
                return prev
           },[])
           return arrList 
        },
        handleSelection(selection){
           this.goodsTotal = selection.length; 
           this.total = selection.reduce((prev, currentValue, currentIndex, arr)=>{
                return prev + currentValue.price * currentValue.num
            },0)
        },
        handleDel(row){
            this.$confirm('此操作将删除该件产品, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(()=>{
                this.$message.error("未完待续...")
            }).catch(()=>{
                this.$message.info("已取消操作！")
            })
        },
        handlePay(){
            if(this.goodsTotal == 0){
                this.$message.info("请在表格中选中所要支付的产品哦")
            }else{
                this.$message.info("功能未完...")
            }
        }
    }
}
</script>

<style scoped>
.tableStyle img{
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
}
</style>