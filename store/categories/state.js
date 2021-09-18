export default () => ({
    specialBrands:["Xiaomi","Samsung","Adidas","Sony"],
    specialBrandsFa:["شیائومی","سامسونگ","آدیداس","سونی"],
    allCategories:{
        "Digital products":
            {
                titleFa:"کالای دیجیتال",
                address:"/images/category/Digital/cover.jpg",
                route:"/Products/category/Digital",
                products:{
                    mobile:{
                        titleFa:"گوشی موبایل",
                        icon:"phone",
                        cover:"/images/category/Digital/mobile/cover.png",
                        route:"/Products/Digital/mobile",
                    },
                    laptop:{
                        titleFa:"لپ تاپ",
                        icon:"laptop",
                        cover:"/images/category/Digital/laptop/cover.png",
                        route:"/Products/Digital/laptop",
                    }
                }
            }
        ,
        "Fashion and clothing":
            {
                titleFa:"مد و پوشاک",
                address:"/images/category/Fashion/cover.jpg",
                route:"/Products/category/Fashion",
                products:{
                    female:{
                        titleFa:"زنانه",
                        iconClass:'icon-female',
                        cover:"/images/category/Fashion/female/cover.png",
                        route:"/Products/Fashion/female",
                    },
                    male:{
                        titleFa:"مردانه",
                        iconClass:'icon-tshirt',
                        cover:"/images/category/Fashion/male/cover.png",
                        route:"/Products/Fashion/male",
                    }
                }
            }
        ,
        "House":
            {
                titleFa:"خانه",
                address:"/images/category/House/cover.jpg",
                route:"/Products/category/House",
                products:{
                    cleaning:{
                        titleFa:"شستشو و نظافت",
                        iconClass:"icon-hand-sparkles",
                        cover:"/images/category/House/cleaning/cover.png",
                        route:"/Products/House/cleaning",
                    },
                    "video-audio":{
                        titleFa:"صوتی و تصویری",
                        icon:"tv",
                        cover:"/images/category/House/video_and_audio/cover.png",
                        route:"/Products/House/video-audio",
                    }
                }
            }
        ,
        "Beauty and health":
            {
                titleFa:"زیبایی و سلامت",
                address:"/images/category/Beauty/cover.jpg",
                route:"/Products/category/Beauty",
                products:{
                    health:{
                        titleFa:"بهداشتی",
                        iconClass:"icon-heartbeat",
                        cover:"/images/category/Beauty/Health/cover.png",
                        route:"/Products/Beauty/health",
                    },
                    makeup:{
                        titleFa:"آرایشی",
                        iconClass:"icon-paint-brush",
                        cover:"/images/category/Beauty/makeup/cover.png",
                        route:"/Products/Beauty/makeup",
                    }
                }
            }
        
    }
})