import Vue from 'vue'
import Router from 'vue-router'
import Homepage from 'components/homepage/homepage'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/homepage'
    },
    {
      path:'/homepage',
      component:Homepage
    }
  ]
})
