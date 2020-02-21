<template>
    <div class="page-article" v-if="activity">
        <div class="d-flex py-3 px-2 border-bottom">
            <router-link tag="div" :to="activity.type ==='校级活动'? '/activities/university':'/activities/college'"
                         class="el-icon-back pr-2 icons" >
            </router-link>
            <strong class="flex-1 fs-xxl text-center">
                {{ activity.name }}
            </strong>
            <div class="text-grey fs-xs mt-4">
                02-06
            </div>
        </div>
        <div v-html="activity.body" class="px-3 m-body mt-3"></div>
    </div>
</template>

<script>

    export default {
        name: "ActivityDetails",
        props:{
            id:{ required: true }
        },
        data(){
            return{
                activity:{}
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get(`activities/${this.id}`);
                this.activity = res.data
            }
        },
        watch:{
            id: 'fetch'
        },
        created() {
            this.fetch()
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../node_modules/vue2-editor/dist/vue2-editor.css";
    .page-article{
        font-size: 1.3rem;
        .icons{
            font-size: 3rem;
        }
        .m-body{
            text-indent: 2rem;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    p{
        text-align: center;
    }
</style>