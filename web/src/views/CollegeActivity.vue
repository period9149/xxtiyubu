<template>
    <div>
        <div class="container">
            <div class="header">
                <p class="fs-xxl"><i class="el-icon-basketball m-3"></i>院级活动</p>
            </div>
            <div class="body">
                <div v-for="item in showList" :key="item._id" class="fs-xl my-1 mx-5 news text-black d-flex ai-center">
                    <router-link :to="`/activities/${item._id}`" class="ml-5 flex-1">
                        <i class="el-icon-news mr-2 fs-xl"></i>{{ item.name }}
                    </router-link>
                    <span class="text-grey">{{ item.createdAt | date }}</span>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <el-pagination
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="totalCount"
                    @current-change="getShowList">
            </el-pagination>
        </div>

    </div>

</template>

<script>
    import dayjs from 'dayjs'
    export default {
        name: "UniversityActivity",
        filters:{
            date(val){
                return dayjs(val).format('YYYY-MM-DD')
            }
        },
        data(){
            return{
                activities: [], /* 所有院级活动 */
                totalCount: 0, /* 所有院级活动数目 */
                showList:[], /* 显示院级活动 */
                pageSize: 8 /* 每页显示条数 */
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('activities/list')
                this.activities = res.data.filter( i => i.type === '院级活动') /* 从活动中提取校级活动 */
                this.totalCount = this.activities.length
                this.showList = this.activities.slice(0,this.pageSize)
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
    a{
        line-height: 5rem;
        color: black;
    }
    .container{
        background: rgba(255,255,255,0.5);
        border-radius: 15px;
    }
    .body{
        min-height: 50vh;
    }
    .news {
        border-bottom: lightgrey solid 1px;

    }
</style>