<template>
    <div class="category w-100 bg-white">
        <h4 class="mb-4 font-weight-bold" :class="[{'text-right':$i18n.locale==='fa'}]">{{$t('categoryTitle')}}</h4>
        <div class="d-flex flex-wrap">
            <nuxt-link v-for="(i,key) in products" :key="key" :to="localePath(`${subRoute}${key}`)" class="category-item bg-light d-flex flex-column justify-content-center align-items-center mx-4">
                <div class="category-item_img">
                    <img :src="i.cover" :alt="key">
                </div>
                <div class="font-weight-bold text-center">
                    {{$i18n.locale=="en"?key:i.titleFa}}
                </div>
            </nuxt-link>
            <template v-if="products2">
                <nuxt-link v-for="(i,key) in products2" :key="key" :to="localePath(`${subRoute2}${key}`)" class="category-item bg-light d-flex flex-column justify-content-center align-items-center mx-4">
                    <div class="category-item_img">
                        <img :src="i.cover" :alt="key">
                    </div>
                    <div class="font-weight-bold text-center">
                        {{$i18n.locale=="en"?key:i.titleFa}}
                    </div>
                </nuxt-link>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props:{products:Object,products2:Object,subRoute:String,subRoute2:String}
}
</script>
<style lang="scss" scoped>
.category{
    border-radius: 8px;
    border: 1px solid #ededed;
    padding: 16px 24px 24px;
    margin-bottom: 15px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 3%);
    &-item{
        width: calc((100% - 112px)/8);
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