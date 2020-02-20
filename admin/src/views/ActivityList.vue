<template>
    <div id="about">
        <h1>活动列表</h1>
        <el-table :data="activities">
            <el-table-column prop="name" label="活动名" width="500">
            </el-table-column>
            <el-table-column prop="type" label="活动类型" width="500">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small"
                               @click="$router.push(`/activities/edit/${scope.row._id}`)">编辑</el-button>
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
                activities:[]
            }
        },
        methods:{
            // 获取数据
            async fetch(){
                const res = await this.$http.get('rest/activities')
                this.activities = res.data
            },
            // 删除
            async remove(row){
                this.$confirm(`是否确定要删除活动?"${row.name}"`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`rest/activities/${row._id}`)
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