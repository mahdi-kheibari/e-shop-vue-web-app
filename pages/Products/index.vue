<template>
    <div>
        <h1 class="text-center font-weight-bold mb-3">{{$t('categoryPage')}}</h1>
        <section class="container" style="direction:ltr !important;">
            <div class="row">
                <div v-for="(i,key) in allCategories" :key="key" class="col-12 col-md-6">
                    <div class="category my-2">
                        <nuxt-link :to="localePath(`${i.route}`)" :style="{'background-image':'url('+i.address+')'}"></nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    computed:{
        allCategories(){
            return this.$store.state.categories.allCategories;
        }
    }
}
</script>
<style lang="scss" scoped>
.category{
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    a{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
    }
}
</style>