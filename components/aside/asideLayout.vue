<template>
    <aside class="category-aside position-sticky flex-shrink-0 p-3 bg-white">
          <div class="pb-3 mb-3 border-bottom" :class="[{'text-right':$i18n.locale==='fa'}]">{{$t('categoryAside.header')}}</div>
          <ul class="list-unstyled ps-0">
            <slot name="beforeDivider"></slot>
            <li class="border-top my-3"></li>
            <slot name="afterDivider"></slot>
          </ul>
    </aside>
</template>
<style lang="scss" scoped>
.category-aside{
    top:120px ;
}
</style>