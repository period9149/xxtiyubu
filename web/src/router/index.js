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
          { path: '/activities/college', component: CollegeActivity } //院级活动
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
