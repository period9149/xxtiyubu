<template>
    <div class="about">
        <h1>{{ id ? '编辑' : '新建'}}人员</h1>
        <el-form label-width="120px">
            <el-form-item label="姓名">
                <el-input placeholder="请输入姓名..." v-model="model.peopleName"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="model.peopleTask" placeholder="请选择职位">
                    <el-option label="负责人" value="负责人">负责人</el-option>
                    <el-option label="工作人员" value="工作人员">工作人员</el-option>
                    <el-option label="志愿者" value="志愿者">志愿者</el-option>
                    <el-option label="球队队长" value="球队队长">球队队长</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-input placeholder="请输入日期,如2000/1/1..." v-model="model.peopleBirthday"></el-input>
            </el-form-item>
            <el-form-item label="来自">
                <el-input placeholder="请输入地名,如湖北武汉..." v-model="model.peopleBirthplace"></el-input>
            </el-form-item>
            <el-form-item label="介绍">
                <el-input type="textarea" placeholder="请输入人物简介..." v-model="model.peopleIntroduce"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input placeholder="请输入QQ..." v-model="model.peopleQQ"></el-input>
            </el-form-item>
            <el-form-item label="照片">
                <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL + '/upload'"
                        :show-file-list="false"
                        :on-success="afterUpload">
                    <img v-if="model.peopleImage" :src="model.peopleImage" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item style="margin-top: 1rem">
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default{
    props:{
        id:{}
    },
    data(){
        return{
            model:{
                peopleName:'',
                peopleTask:'',
                peopleBirthday:'',
                peopleBirthplace:'',
                peopleIntroduce:'',
                peopleQQ:''
            }
        }
    },
    methods:{
        async save(){
            if(!this.id){
                await this.$http.post('rest/people', this.model)
            }else{
                await this.$http.put( `rest/people/${this.id}`, this.model)
            }
            this.$router.push('/people/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/people/${this.id}`)
            this.model = res.data
        },
        afterUpload(res){
            console.log(res)
            this.$set(this.model, 'peopleImage', res.url)
            this.model.peopleImage = res.url
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>