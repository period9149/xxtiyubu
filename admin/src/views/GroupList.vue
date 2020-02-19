<template>
    <div id="about">
        <h1>团建列表</h1>
        <el-table :data="groups">
            <el-table-column prop="name" label="事件名" width="200">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small"
                               @click="$router.push(`/groups/edit/${scope.row._id}`)">编辑</el-button>
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
                groups :[]
            }
        },
        methods:{
            // 获取数据
            async fetch(){
                const res = await this.$http.get('rest/groups')
                this.groups = res.data
            },
            // 删除
            async remove(row){
                this.$confirm(`是否确定要删除活动?"${row.name}"`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`rest/groups/${row._id}`)
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

