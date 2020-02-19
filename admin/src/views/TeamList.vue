<template>
    <div id="about">
        <h1>球队列表</h1>
        <el-table :data="teams">
            <el-table-column prop="name" label="球队名" width="200">
            </el-table-column>
            <el-table-column prop="leader.peopleName" label="队长名" width="200">
            </el-table-column>
            <el-table-column prop="introduction" label="介绍" >
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small"
                               @click="$router.push(`/teams/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                teams:[]
            }
        },
        methods:{
            // 获取数据
            async fetch(){
                const res = await this.$http.get('rest/teams')
                this.teams = res.data
                console.log(res.data)
            },
            // 删除
            async remove(row){
                this.$confirm(`是否确定要删除球队?"${row.name}"`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`rest/teams/${row._id}`)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.fetch()
                })
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style scoped>

</style>