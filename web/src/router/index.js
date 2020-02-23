import Vue from 'vue'
import VueRouter from 'vue-router'

// 这里使用路由的懒加载，用到哪个组件，就加载哪个组件，提高页面加载速度，打包以后，体积会变小
const Main = () => import('../views/Main.vue')
const Home = () => import("../views/Home")
const Member = () => import("../views/Member")
const MemberList = () => import("../views/MemberList")
const MembersAll = () => import("../views/MembersAll")
const Activity = () => import("../views/Activity")
const CollegeActivity = () => import("../views/CollegeActivity")
const UniversityActivity = () => import("../views/UniversityActivity")
const ActivityDetails = () => import("../views/ActivityDetails")
const Groups = () => import("../views/Groups")
const Team = () => import("../views/Team")
const TeamDetails = () => import("../views/TeamDetails")
const GroupDetails = () => import("../views/GroupDetails")


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      { path: '/' , component: Home },
      {
        path: '/members',
        component: Member,
        children:[
          { path: '/members/introduction' ,component: MembersAll }, // 团队介绍
          { path: '/member/introduction' , component: MemberList }  // 成员介绍
          ]
      },
      {
        path:'/activities',
        component: Activity,
        children:[
          { path: '/activities/university', component: UniversityActivity}, //校级活动
          { path: '/activities/college', component: CollegeActivity }, //院级活动
          { path: '/activities/:id', component: ActivityDetails, props: true }
        ]
      },
      {
        path:'/groups',
        component: Groups,
        children:[
          { path: '/groups/:id', component: GroupDetails, props: true }
        ]
      },
      {
        path:'/team',
        component: Team,
        children:[
          { path: '/teams/:id', component: TeamDetails, props: true },
          { path: '/teams', component: TeamDetails }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
