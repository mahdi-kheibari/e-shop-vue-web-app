<template>
    <div class="error container d-flex flex-column justify-content-center align-items-center">
        <h1> page not found</h1>
        <h4>error code: {{error.statusCode}}</h4>
        <h4><nuxt-link :to="localePath('/')" class="btn btn-outline-success mt-2">go to Home page</nuxt-link></h4>
    </div>
</template>
<script>
export default {
    props:{
        error:Object
    }
}
</script>
<style scoped>
.error{
    height: calc(100vh - 173px);
}
</style>