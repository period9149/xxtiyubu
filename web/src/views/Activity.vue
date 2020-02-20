<template>
    <el-container class="el-container">
        <el-aside class="el-aside m-5" width="200">
            <el-menu router class="el-menu">
                <el-menu-item-group>
                    <div class="mx-5 text-center fs-xl mb-4 mt-3">
                        <i class="el-icon-message mr-2"></i>活动信息
                    </div>
                    <el-menu-item index="/activities/university" class="text-center">
                        校级活动
                    </el-menu-item>
                    <el-menu-item index="/activities/college" class="text-center">
                        院级活动
                    </el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
    .el-container{
        min-height: 70vh;
    }
    .el-menu{
        border-radius: 15px;
    }
</style>


