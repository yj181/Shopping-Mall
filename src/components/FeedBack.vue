<template>
    <div>
        <Header></Header>
        <el-card style="margin:30px 0 0 0;padding:5px 0">
            <h3 style="font-size:24px;text-align:center;text-shadow:5px 10px 5px">留下您宝贵的建议/意见，让我们以更好的服务呈现给大家，谢谢~~</h3>
            <div style="width:600px;margin:22px auto;background:#ddd;padding:20px;">
                <el-form ref="dataForm" :model="form" label-width="60px" inline-message>
                    <el-form-item prop="title" label="标题：">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item prop="con" label="内容：">
                        <el-input type="textarea" v-model="form.con" 
                        rows="6"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <div style="text-align:right">
                    <el-button type="danger" @click="handleClear">清空内容</el-button>
                    <el-button type="primary" @click="handleSubmit">提交</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import Header from './Header';
export default {
    data(){
        return{
            form:{}
        }
    },
    components:{
        Header
    },
    methods:{
        handleClear(){
            this.$refs["dataForm"].resetFields();
        },
        handleSubmit(){
            this.$message.success("感谢您的反馈，祝您天天好心情")
        }
    }
}
</script>
