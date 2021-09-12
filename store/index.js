
export const state = () => ({
    windowWidth:'',
    searchValue:'',
    allCategories:["Digital","Fashion","Beauty","House"],
    mainSliderImg: [
        { 
            name: "gamer",
            address: '/images/main-slider/gamer.jpg',
            route:"forGamer"
        },
        {
             name: "Electronic",
             address: '/images/main-slider/electronic.jpg',
             route:"Electronic"
        },
        { 
            name: "Fashion and clothing",
            address: '/images/main-slider/clothing.jpg',
            route:"Fashion"
        },
    ],
    SpecialBrandsSlider: [
        {
            name: "Xiaomi",
            address: '/images/brand-slider/Xiaomi.jpg'
        },
        {
            name: "Samsung",
            address: '/images/brand-slider/Samsung.jpg'
        },
        {
            name: "Adidas",
            address: '/images/brand-slider/Adidas.jpg'
        },
        {
            name: "Sony",
            address: '/images/brand-slider/Sony.jpg'
        },
    ]

})
export const getters = {
    getWidth(state) {
        return state.windowWidth;
    },
    mainSlider(state) {
        return state.mainSliderImg;
    },
    otherSliderTitle(state) {
        return state.otherSliderTitle;
    },
    SpecialBrandsSlider(state) {
        return state.SpecialBrandsSlider;
    },
    searchValue(state) {
        return state.searchValue;
    }
}
export const mutations = {
    changeSearchValue(state,newVal){
        state.searchValue=newVal
    },
    removeSearchValue(state){
        state.searchValue=""
    },
    changeWidth(state,newWidth){
        state.windowWidth=newWidth
    },
}