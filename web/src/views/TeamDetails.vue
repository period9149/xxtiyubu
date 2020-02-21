<template>
    <div>
        <div v-if="!id">
            <el-container>
                <el-header class="fs-xxl">
                    <div class="d-flex jc-around mb-3">
                        <div class="left">
                            <img src="../assets/left.jpg">
                        </div>
                        <div class="title flex-1 text-center">
                            <span>我们是</span>
                            <span class="mx-2">——</span>
                            <span class="css1f0c12e779212a3 fs-xxxl mt-2">信息学院队！</span>
                        </div>
                        <div class="right">
                            <img src="../assets/right.jpg">
                        </div>
                    </div>

                </el-header>
                <el-main>
                    <div class="fs-xl mx-3">

                        <div class="mx-3">
                            <p class="mx-5">我院有着许多运动爱好者，而各个球队，就是他们各显身手的地方。</p>
                        </div>

                        <div class="mx-3">
                            <p class="question"><i class="el-icon-question mx-2"></i>球队概述</p>
                            <p class="mx-4" style="text-indent: 2em">
                                球队的形成原因有很多种，或为交流技术，或为培养友情，或为筹备比赛，抑或只是为了兴趣。出于不同的原因，他们聚在一起，便形成了我院的各个球队。</p>
                        </div>

                        <div class="mx-3">
                            <p class="question"><i class="el-icon-question mx-2"></i>球队类别</p>
                            <p class="mx-4" style="text-indent: 2em">目前，我院已经成立篮球，足球，排球，乒乓球，羽毛球等球队。</p>
                        </div>

                        <div class="mx-3">
                            <p class="question"><i class="el-icon-question mx-2"></i>加入他们</p>
                            <p class="mx-4" style="text-indent: 2em">如果你想强身健体，如果你想摆脱"宅男宅女"的称号，如果你想结交更多热爱运动的少年...你可以选择加入他们的行列。</p>
                        </div>

                    </div>
                </el-main>
            </el-container>
        </div>
        <div class="container" v-if="id">
            <div class="team mx-3">
                <p class="fs-xxl">{{ team.name }}</p>
                <p class="fs-xl m-4">
                    球队简述：{{ team.introduction }}
                </p>
            </div>
            <div class="leader mt-5 mx-3">
                <p class="fs-xl m-4">队长：{{ leader.peopleName }}</p>
                <p class="fs-xl m-4">QQ: {{ leader.peopleQQ }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamDetails",
        props:{
            id:{ required: true }
        },
        data(){
            return{
                team:{},
                leader:{}
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get(`teams/${this.id}`);
                this.team = res.data
                this.leader = this.team.leader
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

<style scoped>
    @import "../assets/scss/_variables.scss";
    .team{
        border-bottom: 2px solid #F0F8FF;
    }

    .el-header, .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        color: #333;
        /* text-align: center;*/
        /*line-height: 160px;*/
    }
    li{
        line-height: 2.5rem;
    }
    .question{
        font-weight: bold;
    }
    p{
        line-height: 3rem;
    }

</style>
