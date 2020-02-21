<template>
    <div class="main">
        <!-- start of nav -->
        <div class="py-2 px-4 d-flex ai-center test-center">
            <img src="../assets/big_logo.jpg" height="40">
            <div class="px-4 flex-1">
                <div class="fs-xxxl css1efb467bd1212a3">信息体育部</div>
            </div>
            <div class="nav nav-inverse pb-1 jc-around">
                <div class="nav-item">
                    <router-link to="/" class="text-black">首页</router-link>
                </div>
                <div class="nav-item">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <router-link to="/members/introduction" class="text-black">成员</router-link>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/members/introduction" class="text-grey">团队介绍</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <router-link to="/member/introduction" class="text-grey">成员介绍</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="nav-item">
                    <router-link to="/teams" class="text-black">球队</router-link>
                </div>
                <div class="nav-item">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <router-link to="/activities/university" class="text-black">活动</router-link>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/activities/university" class="text-grey">校级活动</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <router-link to="/activities/college" class="text-grey">院级活动</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="nav-item">
                    <router-link to="/groups" class="text-black">团建</router-link>
                </div>
            </div>
        </div>
        <!-- end of nav -->
        <router-view></router-view>
        <!-- start of copyright -->
        <div class="text-center bg-black text-white">
            <p class="pt-3 fs-xl my-3">体育、生活，就在信息体育部</p>
            <p class="fs-xl my-3"><span class="mx-2">版权所有</span>华中农业大学信息学院本科生学生会体育部</p>
            <p class="pb-3 fs-xl">
                <span class="mx-1">CopyRight &copy; xxtiyubu</span>
            </p>
        </div>
        <!-- end of copyright -->
    </div>

</template>


<style scoped>
    .el-dropdown-link{
        font-size: 1.5rem;
    }

</style>
