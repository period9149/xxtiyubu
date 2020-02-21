<template>
    <div class="groups" >
        <div class="block d-flex mx-5" v-if="!id">
            <div class="header fs-xxl mt-4 mx-5">
                <p class="css1f0cdb4f0f212a3">我们的团建时间戳很长很长</p>
            </div>
            <div class="mt-5 mr-5">
                <el-timeline :reverse="reverse">
                    <el-timeline-item v-for="(group, index) in groups"
                                      :key="index" :timestamp="group.createdAt | date"
                                      class="py-3 fs-xl px-2">
                        <router-link :to="`/groups/${group._id}`" >{{group.name}}</router-link>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div class="ml-5">
                <router-view></router-view>
            </div>

        </div>
    </div>

</template>

<script>
    import dayjs from 'dayjs'
    export default {
        filters:{
            date(val){
                return dayjs(val).format('YYYY-MM-DD')
            }
        },
        data() {
            return {
                reverse: true,
                groups:[]
            };
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('groups/list')
                this.groups = res.data.slice(0,10)
                console.log(this.groups)
            }
        },
        created() {
            this.fetch()
        }
    };
</script>

<style scoped>
.block{
    min-width: 300px;
    min-height: 600px;
}
.header{
    width: 20px;
    line-height: 24px;
    font-size: 20px;

}
a{
    color: #696969
}
</style>