<template>
    <div>
        <el-container>
            <el-header class="fs-xxl">
                <div class="d-flex jc-around mb-3">
                    <div class="left">
                        <img src="../assets/left.jpg">
                    </div>
                    <div class="title flex-1 text-center">
                        <span>我们是</span>
                        <span class="mx-2">——</span>
                        <span class="css1f02384aa7212a3 fs-xxxl mt-2">信息体育部！</span>
                    </div>
                    <div class="right">
                        <img src="../assets/right.jpg">
                    </div>
                </div>

            </el-header>
            <el-main>
                <div class="fs-xl mx-3">

                    <div class="mx-4">
                        <p class="mx-5">华中农业大学信息学院本科生学生会体育部，简称信息体育部，是一个充满活力，有着和谐氛围的集体。</p>
                    </div>

                    <div class="mx-3">
                        <p class="question"><i class="el-icon-question mx-2"></i>我们是什么</p>
                        <p class="mx-4" style="text-indent: 2em">信息体育部是华中农业大学信息学院本科生学生会发展中心下的四个部门之一，主要负责院内体育活动的举办以及协助校会建设校内良好的体育氛围。</p>
                    </div>

                    <div class="mx-3">
                        <p class="question"><i class="el-icon-question mx-2"></i>我们干什么</p>
                        <p class="mx-4" style="text-indent: 2em">我们的主要任务是：</p>
                        <ul class="mx-5">
                            <li class="mx-2">策划举办院级体育赛事，包括但不限于篮球，足球</li>
                            <li class="mx-2">协助校学生会体育部举办各项体育比赛</li>
                            <li class="mx-2">管理学院球队，为参赛球队提供后勤帮助</li>
                            <li class="mx-2">举办健康跑等活动，提升院内运动热情，营造运动氛围</li>
                        </ul>
                        <p class="mx-4" style="text-indent: 2em">我们的日常任务是：</p>
                        <ul class="mx-5">
                            <li class="mx-2">统计检查早操到操情况</li>
                            <li class="mx-2">南湖跑奖励的统计</li>
                        </ul>
                    </div>

                    <div class="mx-3">
                        <p class="question"><i class="el-icon-question mx-2"></i>我们怎么样</p>
                        <p class="mx-4" style="text-indent: 2em">我们有着良好的团队氛围，各个成员对自己的工作尽心尽责，同时，部门内部有着良好的学习氛围。我们在完成自己的任务下，也会适当向其他兄弟部门提供力所能及的帮助。</p>
                    </div>

                    <div class="mx-3">
                        <p class="question"><i class="el-icon-question mx-2"></i>我们的LOGO</p>
                        <div class="text-center">
                            <img src="../assets/big_logo.jpg" height="160px" class="mt-3">
                        </div>
                    </div>

                </div>

            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>

</script>

<style scoped>
    @import "../assets/scss/_variables.scss";
    @import "https://cdn.repository.webfont.com/webfonts/nomal/135843/45807/5e4d122df629d80c402207c4.css";
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