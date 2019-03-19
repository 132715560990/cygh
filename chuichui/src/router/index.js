import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/head'
//import Footer from '@/components/footer'
//import Vuesss from '@/components/vuesss'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
    	path:'/head',
    	name:"Head",
    	component:Head
    }
//  {
//  	path:"/footer",
//  	name:"Footer",
//  	component:Footer
//  }
//  {
//  	path:'/vuesss',
//  	name:"Head",
//  	component:Vuesss
//  }
  ]
})
