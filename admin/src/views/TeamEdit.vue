<template>
    <div class="about">
        <h1>{{ id ? '编辑' : '新建'}}球队</h1>
        <el-form label-width="120px">
            <el-form-item label="球队名称">
                <el-input placeholder="请输入球队名称..." v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="队长">
                <el-select v-model="model.leader" placeholder="请选择队长">
                    <el-option v-for="item in people" :key="item._id" :label="item.peopleName" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="介绍">
                <el-input type="textarea" placeholder="请输入人物简介..." v-model="model.introduction"></el-input>
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
                model:{},
                people:[]
            }
        },
        methods:{
            async save(){
                if(!this.id){
                    await this.$http.post('rest/teams', this.model)
                }else{
                    await this.$http.put( `rest/teams/${this.id}`, this.model)
                }
                this.$router.push('/teams/list')
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            },
            async fetch(){
                const res = await this.$http.get(`rest/teams/${this.id}`)
                this.model = res.data
            },
            async fetchPeople(){
                const res = await this.$http.get('rest/people')
                this.people = res.data
            }
        },
        created(){
            this.fetchPeople()
            this.id && this.fetch()
        }
    }
</script>
