import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: App},
        {path: '/home', component: Home},
        {path: '/hello', component: HelloWorld}
    ]
})

new Vue({
    router,
    render: h => h(App),
    mode: history
}).$mount('#app')
