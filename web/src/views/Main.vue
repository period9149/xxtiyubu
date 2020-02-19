<template>
    <div class="main">
        <!-- start of nav -->
        <div class="bg-light py-2 px-4 d-flex ai-center test-center">
            <img src="../assets/big_logo.jpg" height="40">
            <div class="px-4 flex-1">
                <div class="fs-xxxl css1efb467bd1212a3">信息体育部</div>
            </div>
            <div class="nav nav-inverse pb-1 jc-around">
                <div class="nav-item">
                    <router-link to="/" tag="div">首页</router-link>
                </div>
                <div class="nav-item">
                    <el-dropdown>
                        <span class="el-dropdown-link text-black">成员</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>团队介绍</el-dropdown-item>
                            <el-dropdown-item divided>负责人</el-dropdown-item>
                            <el-dropdown-item>工作人员</el-dropdown-item>
                            <el-dropdown-item>志愿者</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="nav-item">
                    <router-link to="/teams" tag="div">球队</router-link>
                </div>
                <div class="nav-item">
                    <el-dropdown>
                        <span class="el-dropdown-link text-black">活动</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>校级活动</el-dropdown-item>
                            <el-dropdown-item divided>院级活动</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="nav-item">
                    <router-link to="/groups" tag="div">团建</router-link>
                </div>
            </div>
        </div>
        <!-- end of nav -->
        <router-view></router-view>
        <!-- start of copyright -->
        <div class="text-center bg-black text-white">
            <p class="pt-4 fs-xl">体育、生活，就在信息体育部</p>
            <p class="fs-xl"><span class="mx-2">版权所有</span>华中农业大学信息学院本科生学生会体育部</p>
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
