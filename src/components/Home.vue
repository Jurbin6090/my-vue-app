<template>
    <div id="home">
        Home Component
        <div v-if='msg.isLoggedIn === true'>
            Logged In
        </div>
        <div v-else>
            Please Log In
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: Object
        }
    }
</script>