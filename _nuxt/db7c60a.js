(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{444:function(t,o,e){"use strict";e.r(o);var r={computed:{digitalCategory:function(){var t={},o=this.$store.state.categories.allCategories["Digital products"].products.laptop;return t.laptop=o,t},houseCategory:function(){var t={},o=this.$store.state.categories.allCategories.House.products["video-audio"];return t["video-audio"]=o,t}},components:{categoryPage:e(388).default},asyncData:function(t){var o=t.store,e={},r=o.state.Digital.Products.laptop;e.laptop=r;var c=o.state.House.Products["video-audio"];return e["video-audio"]=c,{Products:e}}},c=e(31),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("categoryPage",{attrs:{productsCategory:t.digitalCategory,productsCategory2:t.houseCategory,productsItems:t.Products,subRoute:"/Products/Digital/",subRoute2:"/Products/House/",activeText:t.$tc("categoryAside.footer",2)}})}),[],!1,null,null,null);o.default=component.exports}}]);