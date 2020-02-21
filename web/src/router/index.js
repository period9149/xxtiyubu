import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from "../views/Home"
import Member from "../views/Member"
import MemberList from "../views/MemberList"
import MembersAll from "../views/MembersAll"
import Activity from '../views/Activity'
import CollegeActivity from "../views/CollegeActivity"
import UniversityActivity from "../views/UniversityActivity"
import ActivityDetails from "../views/ActivityDetails"
import Groups from "../views/Groups"
import Team from "../views/Team"
import TeamDetails from "../views/TeamDetails"
import GroupDetails from "../views/GroupDetails"

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
