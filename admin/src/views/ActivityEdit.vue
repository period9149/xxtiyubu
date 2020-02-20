<template>
    <div class="about">
        <h1>{{ id ? '编辑' : '新建'}}活动</h1>
        <el-form label-width="120px">
            <el-form-item label="活动名">
                <el-input placeholder="请输入活动名..." v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="model.type" placeholder="请选择活动类型">
                    <el-option label="校级活动" value="校级活动">校级活动</el-option>
                    <el-option label="院级活动" value="院级活动">院级活动</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详情">
                <br>
                <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
            </el-form-item>
            <el-form-item style="margin-top: 1rem">
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
    export default{
        props:{
            id:{}
        },
        components: {
            VueEditor
        },
        data(){
            return{
                model:{}
            }
        },
        methods:{
            async save(){
                console.log(this.model)
                if(!this.id){
                    await this.$http.post('rest/activities', this.model)
                }else{
                    await this.$http.put( `rest/activities/${this.id}`, this.model)
                }
                this.$router.push('/activities/list')
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            },
            async fetch(){
                const res = await this.$http.get(`rest/activities/${this.id}`)
                this.model = res.data
            },
            afterUpload(res){
                console.log(res)
                this.$set(this.model, 'image', res.url)
                this.model.image = res.url
            },
            async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                const formData = new FormData();
                formData.append("file", file);

                const res = await this.$http.post('upload', formData)
                Editor.insertEmbed(cursorLocation, 'image', res.data.url)
                resetUploader()
            }
        },
        created(){
            this.id && this.fetch()
        }
    }
</script>
