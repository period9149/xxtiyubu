<template>
    <div class="home">
        <!-- start of top container -->
        <div class="container mt-1 ml-5 mr-3 ">
            <!-- start of swiper -->
            <div class="pictures">
                <el-carousel indicator-position="outside">
                    <el-carousel-item>
                        <img src="../assets/swipertwo.jpeg" class="swiper">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/swiperone.jpeg" class="swiper">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- end of swiper -->

            <!-- start of news -->
            <div class="card news p-3 ml-5">
                <div class="card-header d-flex ai-center mb-3">
                   <div class="fs-xl flex-1 px-2">
                       <i class="iconfont icon-ziyuan mx-2"></i>活动新闻
                   </div>
                    <div>
                        <router-link to="/activities/university"><i class="el-icon-more"></i></router-link>
                    </div>
                </div>
                <router-link tag="div" class="card-body pt-2 pb-2 px-3 d-flex"
                             v-for="(item,i) in activities" :key="i"
                            :to="`/activities/${item._id}`">
                    <i class="fs-xxl el-icon-chat-round"></i>
                    <span class="text-info text-red">『热门』</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ item.name }}</span>
                    <span class="text-grey fs-sm">{{ item.createdAt | date }}</span>
                </router-link>
            </div>
            <!-- end of news -->

            <!-- start of joinus -->
            <div class="card bg-light ml-5 p-3 pb-2 joinus">
                <div class="card-header d-flex ai-center mb-3">
                    <div class="fs-xl flex-1 px-2">
                        <i class="iconfont icon-tubiaozhizuomoban mx-2"></i>加入我们
                    </div>
                </div>
                <div class="text-center py-2">
                    <img src="../assets/QQImage.jpg" class="qqImage">
                </div>
                <div class="text-center fs-xl mb-5 flex-1">
                        <p>QQ公众号:3452204384</p>
                </div>
            </div>
            <!-- end of joinus -->
        </div>
        <!-- end of top container -->

        <!-- start of links -->
        <div class="links d-flex jc-around mt-3">
            <div class="text-center tag tag1 mx-3 py-3">
                <a href="http://www.hzau.edu.cn/" class="text-white"><i class="iconfont mx-2 icon-shangquan"></i>华中农大官网</a>
            </div>
            <div class="text-center tag tag2 mx-3 py-3">
                <a href="http://coi.hzau.edu.cn/" class="text-white"><i class="iconfont mx-2 icon-jisuanji"></i>信息学院官网</a>
            </div>
            <div class="text-center tag tag3 mx-3 py-3">
                <a href="http://sport.hzau.edu.cn/" class="text-white"><i class="iconfont mx-2 icon-tiyukebu"></i>校体育部官网</a>
            </div>
            <div class="text-center tag tag4 mx-3 py-3">
                <a href="http://211.69.129.116:8501/security/login.do" class="text-white"><i class="iconfont mx-2 icon-xitong"></i>体育管理系统</a>
            </div>
            <div class="text-center tag tag5 mx-3 py-3">
                <a href="#" class="text-white"><i class="iconfont mx-2 icon-aixin" ></i>院体育部官网</a>
            </div>
        </div>
        <!-- end of links -->

        <!-- start of bottom container -->
        <div class="btContainer mt-5 ">
            <div></div>
            <!-- start of teamview -->
            <div class="card bg-light p-3 ml-5 mb-3">
                <div class="card-header d-flex ai-center mb-3">
                    <div class="fs-xl flex-1 px-2">
                        <i class="iconfont icon-qiu mx-2"></i>球队一览
                    </div>
                    <div>
                        <router-link to="/teams"><i class="el-icon-more"></i></router-link>
                    </div>
                </div>
                <router-link tag="div" class="card-body pt-2 pb-2 px-3 d-flex"
                             v-for="(item,i) in teams" :key="i"
                             :to="`/teams/${item._id}`">
                    <i class="fs-xxl px-3 el-icon-medal"></i>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ item.name }}</span>
                </router-link>
            </div>
            <!-- end of teamview -->
            <div></div>
            <!-- start of groupview -->
            <div class="card bg-light p-3 mr-5">
                    <div class="card-header d-flex ai-center mb-3">
                        <div class="fs-xl flex-1 px-2">
                            <i class="iconfont icon-aixin mx-2"></i>团队建设
                        </div>
                        <div>
                            <router-link to="/groups"><i class="el-icon-more"></i></router-link>
                        </div>
                    </div>
                    <router-link tag="div" class="card-body pt-2 pb-2 px-3 d-flex"
                                 v-for="(item,i) in groups" :key="i"
                                 :to="`/groups/${item._id}`">
                        <i class="el-icon-thumb fs-xxl px-3"></i>
                        <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ item.name }}</span>
                        <span class="text-grey fs-sm">{{ item.createdAt | date }}</span>
                    </router-link>
                </div>
            <!-- end of groupview -->
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
export default {
    filters:{
        date(val){
            return dayjs(val).format('MM-DD')
        }
    },
    data(){
        return{
            activities:[],
            teams:[],
            groups:[]
        }
    },
    methods:{
        async fetchActivities(){
            const res = await this.$http.get('activities/list')
            this.activities = res.data.slice(0,5)
        },
        async fetchTeams(){
            const res = await this.$http.get('teams/list')
            this.teams = res.data.slice(0,5)
        },
        async fetchGroups(){
            const res = await this.$http.get('groups/list')
            this.groups = res.data.slice(0,5)
        }
    },
    created() {
        this.fetchActivities()
        this.fetchTeams()
        this.fetchGroups()
    }
}
</script>

<style scoped lang="scss">
.homeTitle{
    font-size: 3rem;
}
@media screen and (min-width: 1120px){
     img{
         height: 360px;
         width: 360px;
     }
}
.swiper{
    height: auto;
    width: 100%;
}
.container{
    display: grid;
    grid-template-columns: 40% 40% 20%;
}
.btContainer{
    display: grid;
    grid-template-columns: 6% 40% 7% 40% 6%;
}
.links{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    a:hover{
        color: #e7e1cd;
    }
}
a{
    width: 60%;
    height: 3rem;
    font-size: 1.5rem;
    text-decoration: none;
}
.tag{
    border-radius: 5px;
}
.tag1{
    background-color: #55a532;
    background-image: linear-gradient(to top right, #63a35c, #42b983);
}
.tag2{
    background-color: #58ACFA;
    background-image: linear-gradient(to top right, #409EFF, #58ACFA);
}
.tag3{
    background-color: #df5000;
    background-image: linear-gradient(to top right, #df5000, #db9e3f);
}
.tag4{
    background-color: #1f3695;
    background-image: linear-gradient(to top right, #1f3695, #4b67af);
}
.tag5{
    background-color: #DD4A68;
    background-image: linear-gradient(to top right, #DD4A68, #a71d5d);
}

.card{
    height: 90%;
    border-radius: 8px;
    background-image: linear-gradient(to top right,#FFFAFA,#FFF8DC,#FFFAF0,#FFFAFA,#FDF5E6);
}

.joinus{
    display: flex;
    flex-flow: column;
}

.qqImage{
    width: 100%;
    height: auto;
}

.finger{
    width: 80%;
    height: 80%;
}

.card-body{
    cursor: pointer;
}

</style>