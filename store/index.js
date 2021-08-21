
export const state = () => ({
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
    discountSliderImg: [
        {
            name: "هدفون بی سیم کینگ استار مدل KBH48",
            address: '/images/discount-slider/discount-1.jpg',
            price: "371000 تومان",
            withDiscount: "259000 تومان",
            discountPercent: "30%"
        },
        {
            name: "کیف اداری چرم مدل HM-1",
            address: '/images/discount-slider/discount-2.jpg',
            price: "560000 تومان",
            withDiscount: "160000 تومان",
            discountPercent: "77%"
        },
        {
            name: "پولوشرت مردانه رونی مدل 32110011-23",
            address: '/images/discount-slider/discount-3.jpg',
            price: "249000 تومان",
            withDiscount: "139000 تومان",
            discountPercent: "44%"
        }
    ],
    bestsellersSlider: [
        {
            name: "گوشی موبایل شیائومی مدل POCO M3",
            address: '/images/bestseller-slider/bestseller-1.jpg',
            price: "4199000 تومان",
        },
        {
            name: "گوشی موبایل شیائومی مدل POCO X3 Pro",
            address: '/images/bestseller-slider/bestseller-2.jpg',
            price: "6980000 تومان",
        },
        {
            name: "برس پاک‌سازی مدل beauty skin",
            address: '/images/bestseller-slider/bestseller-3.jpg',
            price: "29900 تومان",
        },
        {
            name: "کیف کمری زنانه کد 2047",
            address: '/images/bestseller-slider/bestseller-4.jpg',
            price: "24600 تومان",
        },
        {
            name: "گوشی موبایل سامسونگ مدل Galaxy A21S",
            address: '/images/bestseller-slider/bestseller-5.jpg',
            price: "4089000 تومان",
        },
        {
            name: "هندزفری بلوتوث مدل SP01",
            address: '/images/bestseller-slider/bestseller-6.jpg',
            price: "34000 تومان",
        }
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
    mainSlider(state) {
        return state.mainSliderImg;
    },
    discountSlider(state) {
        return state.discountSliderImg;
    },
    otherSliderTitle(state) {
        return state.otherSliderTitle;
    },
    bestsellersSlider(state) {
        return state.bestsellersSlider;
    },
    SpecialBrandsSlider(state) {
        return state.SpecialBrandsSlider;
    }
}
export const mutations = {

}