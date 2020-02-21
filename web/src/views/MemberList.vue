<template>
    <div class="container">
        <div class="p-3 pl-4">
            <p class="css1f0310ad4e212a3 fs-xxl">我们的负责人：</p>
            <!-- start of 负责人 -->
            <div class="listcard">
                <div v-for="person in principal" :key="person.id">
                    <div>
                        <div class="card m-3 mx-5" >
                            <img :src="person.peopleImage" class="mt-3 ml-3">
                            <div class="mt-4">
                                <p>
                                    <span class="ml-3 mr-5">{{ person.peopleName }}</span>
                                    <span>{{ person.peopleBirthplace }}</span>
                                </p>
                                <p class="ml-3 mt-1">QQ:{{ person.peopleQQ }}</p>
                            </div>
                            <div class="mt-1 ml-3 mb-2 intro">
                                <span v-if="person.peopleIntroduce">介绍：{{ person.peopleIntroduce }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of 负责人 -->
            <p class="css1f03129a1b212a3 fs-xxl">我们的工作人员：</p>
            <!-- start of 工作人员 -->
            <div class="listcard">
                <div v-for="person in staff" :key="person.id">
                    <div>
                        <div class="card m-3 mx-5 card2" >
                            <img :src="person.peopleImage" class="mt-3 ml-3">
                            <div class="mt-4">
                                <p>
                                    <span class="ml-3 mr-5">{{ person.peopleName }}</span>
                                    <span>{{ person.peopleBirthplace }}</span>
                                </p>
                                <p class="ml-3 mt-1">QQ:{{ person.peopleQQ }}</p>
                            </div>
                            <div class="mt-1 ml-3 mb-2 intro">
                                <span v-if="person.peopleIntroduce">介绍：{{ person.peopleIntroduce }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of 工作人员 -->
            <p class="css1f0313cada212a3 fs-xxl">我们的志愿者：</p>
            <!-- start of 志愿者 -->
            <div class="listcard">
                <div v-for="person in volunteer" :key="person.id" >
                    <div class="card m-3 mx-5 card3">
                        <img :src="person.peopleImage" class="mt-3 ml-3">
                        <div class="mt-4">
                            <p>
                                <span class="ml-3 mr-5">{{ person.peopleName }}</span>
                                <span>{{ person.peopleBirthplace }}</span>
                            </p>
                            <p class="ml-3 mt-1">QQ:{{ person.peopleQQ }}</p>
                        </div>
                        <div class="mt-1 ml-3 mb-2 intro">
                            <span v-if="person.peopleIntroduce">介绍：{{ person.peopleIntroduce }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of 志愿者 -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                people:[]
            }
        },
        computed:{
            principal(){
                return this.people.filter( item => item.peopleTask === '负责人')
            },
            staff(){
                return this.people.filter( item => item.peopleTask === '工作人员')
            },
            volunteer(){
                return this.people.filter( item => item.peopleTask === '志愿者')
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('people/list')
                this.people = res.data
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style scoped lang="scss">
    .container{
        background: rgba(255,245,238,0.3);
        border-radius: 15px;
    }
    .listcard{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: stretch;
        align-items: start;
    }
    .card{
        display: grid;
        grid-template-columns: 20% 80%;
        img{
            width: 50px;
        }
        background-color: rgba(253,245,230,0.3);

    }
    .intro{
         grid-column: 1/3;
    }
    .card2{
        background-color: rgba(225,255,255,0.3);
    }
    .card3{
        background-color: rgba(255,245,238,0.3);
    }

</style>