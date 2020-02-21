<template>
    <el-container class="el-container">
        <el-aside class="el-aside m-5" width="200">
            <el-menu router class="el-menu">
                <el-menu-item-group>
                    <div class="mx-5 text-center fs-xl mb-4 mt-3">
                        <i class="el-icon-message mr-2"></i>球队列表
                    </div>
                    <el-menu-item v-for="item in teams" :key="item._id"
                                  :index="`/teams/${item._id}`" class="text-center">
                        {{ item.name }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
    export default {
        data(){
            return{
                teams:[]
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('teams/list')
                this.teams = res.data
            }
        },
        created() {
            this.fetch()
        }
    }
</script>
<style scoped>
    .el-container{
        min-height: 70vh;
    }
    .el-menu{
        border-radius: 15px;
    }
</style>




