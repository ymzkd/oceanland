import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld'
import TextTransform from './components/TextTransform'
import SoundAnalysis from './components/SoundAnalysis'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/text',
            name: 'text',
            component: TextTransform
        },
        {
            path: '/sound',
            name: 'sound',
            component: SoundAnalysis
        }
    ]
})