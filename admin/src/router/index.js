import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Login from "../views/Login"
import AdminUserEdit from "../views/AdminUserEdit"
import AdminUserList from "../views/AdminUserList"
import ActivityList from "../views/ActivityList"
import ActivityEdit from "../views/ActivityEdit"
import GroupList from "../views/GroupList"
import GroupEdit from "../views/GroupEdit"
import PeopleList from "../views/PeopleList"
import PeopleEdit from "../views/PeopleEdit"
import TeamList from "../views/TeamList"
import TeamEdit from "../views/TeamEdit"


Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login, meta: { isPublic: true }},
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      { path:'/people/list' , component: PeopleList},
      { path:'/people/edit/:id' , component: PeopleEdit, props: true},
      { path:'/people/add' , component: PeopleEdit},

      { path:'/teams/list' , component: TeamList},
      { path:'/teams/edit/:id' , component: TeamEdit, props: true},
      { path:'/teams/add' , component: TeamEdit},

      { path:'/groups/list' , component: GroupList},
      { path:'/groups/edit/:id' , component: GroupEdit, props: true},
      { path:'/groups/add' , component: GroupEdit},

      { path:'/activities/list' , component: ActivityList},
      { path:'/activities/edit/:id' , component: ActivityEdit, props: true},
      { path:'/activities/add' , component: ActivityEdit},

      { path:'/admin_users/list' , component: AdminUserList},
      { path:'/admin_users/edit/:id' , component: AdminUserEdit, props: true},
      { path:'/admin_users/add' , component: AdminUserEdit}
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})


export default router
