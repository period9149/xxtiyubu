<template>
    <div>
        <div v-for="item in showList" :key="item._id">
            {{ item.name }}
        </div>
        <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="totalCount"
                @current-change="getShowList">
        </el-pagination>
    </div>

</template>

<script>
    export default {
        name: "UniversityActivity",
        data(){
            return{
               activities: [],
               totalCount: 0,
               showList:[],
               pageSize: 5
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('activities/list')
                this.activities = res.data
                this.totalCount = res.data.length
                this.showList = this.activities.slice(0,5)
            },
            getShowList(pageIndex = 1){
                this.showList = this.activities.slice(this.pageSize * pageIndex - this.pageSize, this.pageSize * pageIndex )
            }
        },
        created() {
            this.fetch()
            this.getShowList()
        }
    }
</script>

<style scoped>

</style>