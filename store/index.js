
export const state = () => ({
    mainSliderImg: [
        { name: "gamer", address: '/images/main-slider/gamer.jpg' },
        { name: "electronic", address: '/images/main-slider/electronic.jpg' },
        { name: "clothing", address: '/images/main-slider/clothing.jpg' },
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
            name: "HUAWEI",
            address: '/images/brand-slider/brand-1.jpg'
        },
        {
            name: "SAMAUNG",
            address: '/images/brand-slider/brand-2.jpg'
        },
        {
            name: "CASIO",
            address: '/images/brand-slider/brand-3.jpg'
        },
        {
            name: "Panasonic",
            address: '/images/brand-slider/brand-4.jpg'
        },
        {
            name: "GPlus",
            address: '/images/brand-slider/brand-5.jpg'
        },
        {
            name: "NOKIA",
            address: '/images/brand-slider/brand-6.jpg'
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