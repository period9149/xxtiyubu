<template>
    <div class="page-article" v-if="group">
        <div class="d-flex py-3 px-2 border-bottom" style="width: 700px">
            <strong class="flex-1 fs-xxl text-center">
                {{ group.name }}
            </strong>
            <div class="text-grey fs-xs mt-4 mx-5">
                {{ group.createdAt | date }}
            </div>
        </div>
        <div v-html="group.body" class="px-3 m-body mt-3"></div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    export default {
        name: "GroupDetails",
        filters:{
            date(val){
                return dayjs(val).format('YYYY-MM-DD')
            }
        },
        props:{
            id:{ required: true }
        },
        data(){
            return{
                group:{}
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get(`groups/${this.id}`);
                this.group = res.data
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
        background: rgba(255,255,255,0.5);
        border-radius: 15px;
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