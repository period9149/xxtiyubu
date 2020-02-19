<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: snow">
            <el-menu router unique-opened :default-active="$route.path">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>信息中心</template>
                    <el-menu-item-group>
                        <template slot="title">人员信息</template>
                        <el-menu-item index="/people/list">人员列表</el-menu-item>
                        <el-menu-item index="/people/add">新增人员</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">球队信息</template>
                        <el-menu-item index="/teams/list">球队列表</el-menu-item>
                        <el-menu-item index="/teams/add">新增球队</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>活动中心</template>
                    <el-menu-item-group>
                        <template slot="title">团建</template>
                        <el-menu-item index="/groups/list">团建列表</el-menu-item>
                        <el-menu-item index="/groups/add">新增团建</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">活动</template>
                        <el-menu-item index="/activities/list">活动列表</el-menu-item>
                        <el-menu-item index="/activities/add">新增活动</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
                    <el-menu-item-group>
                        <template slot="title">管理员</template>
                        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
                        <el-menu-item index="/admin_users/add">新增管理员</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px"></el-header>
            <el-main>
                <router-view :key="$route.path"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

</script>

<style>
    .el-header {
        background-color: snow;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
    h1{
        margin-bottom: 2rem;
    }
</style>
