<template>
    <div class="category w-100 bg-white">
        <h4 class="mb-4 font-weight-bold">Category</h4>
        <div class="d-flex flex-wrap">
            <nuxt-link v-for="(i,key) in products" :key="key" :to="subRoute+key" class="category-item d-flex flex-column justify-content-center align-items-center mx-4">
                <div class="category-item_img">
                    <img :src="i.cover" :alt="key">
                </div>
                <div class="font-weight-bold link-dark">
                    {{key}}
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props:{products:Object,subRoute:String}
}
</script>
<style lang="scss" scoped>
.category{
    border-radius: 8px;
    border: 1px solid #ededed;
    padding: 16px 24px 24px;
    margin-bottom: 15px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 3%);
    a{
        text-decoration: none;
    }
    &-item{
        width: calc((100% - 112px)/8);
        background-color: #f0f0f1;
        border-radius: 8px;
        padding: 16px 8px;
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 3%);
        &_img{
            max-width: 96px;
            height: 60px;
            img{
                width: 100%;
                height:100%;
                object-fit: contain;
            }
        }
    }
}
</style>