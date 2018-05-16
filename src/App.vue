<template>
    <div id="app">
        <input v-model="username" />
        <input v-model="password" />
        <button @click="login()">Login</button>
        <HelloWorld v-bind:msg={isLoggedIn}></HelloWorld>

    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    const isLoggedIn = false



    export default {
        methods: {
            login(){

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

                if(this.username === 'Justin' && this.password === 'test')
                    this.isLoggedIn = true
                else
                    this.isLoggedIn = false
            }
        },
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
