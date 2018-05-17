<template>
    <div id="app">
        App Component
        <div v-if='isLoggedIn === false'>
            <input v-model="username"/>
            <input v-model="password"/>
            <button @click="login()">Login</button>
        </div>
        <div v-else>
            <router-link :to="'/'">App</router-link>
            <router-link :to="'/home'">Home</router-link>
            <router-link :to="'/hello'">HelloWorld</router-link>
            <hr/>
            <router-view v-bind:msg={isLoggedIn}></router-view>
        </div>

    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data: function () {
            return {
                username: '',
                password: '',
                isLoggedIn: false
            }
        }, methods: {
            login() {

                //Uncomment the following

//              fetch('http://localhost:8080/login',{
//                  method: 'POST',
//                  headers:{
//                      'Content-Type': 'application/json',
//                  },
//                  body: JSON.stringify({
//                      username: this.username,
//                      password: this.password
//                  })
//              })
//                  .then(response=> response.json())
//                  .then(isSuccess=> this.isLoggedIn = isSuccess)

                //Remove the following

                if (this.username === 'Justin' && this.password === 'test')
                    this.isLoggedIn = true
                else
                    this.isLoggedIn = false
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
