import Vue from 'vue'
import Router from 'vue-router'
import UserHome from '@/components/UserHome'
import Main from '@/components/Main'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Meetup from '@/components/Meetup/Meetup'
import AdminHome from '@/components/Admin/AdminHome'
import Dashboard from '@/components/Admin/Pages/Dashboard'
import Inbox from '@/components/Admin/Pages/Inbox'
import User from '@/components/Admin/Pages/User'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'UserHome',
      component: UserHome
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/admin/dashboard',
      name: 'AdminHome',
      component: AdminHome,
      children: [
         {
           path: '/admin/dashboard',
           component: Dashboard
         },
         {
           path: '/admin/inbox',
           component: Inbox
         },
         {
           path: '/admin/user',
           component: User
         }
       ]
    },
    {
    path: '*',
    redirect: {
      name: '/',
    },
  },
  ],
  mode: 'history'
})
