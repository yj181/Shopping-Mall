<template>
    <div>
        <Header style="margin:0 0 20px 0"></Header>  
        <MainCon></MainCon> 
        <el-backtop></el-backtop>
    </div>
</template>

<script>
import Header from './Header'
import MainCon from './MainCon'
export default {
    data(){
        return {
            
        }
    },
    components:{
        Header,
        MainCon,
    }
}
</script>