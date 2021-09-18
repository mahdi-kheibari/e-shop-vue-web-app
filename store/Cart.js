
export const state = () => ({
    cartItems:[],
    sumTotal:0
});
export const getters = {
    getItems(state){
        return state.cartItems;
    },
    getTotal(state){
        return state.sumTotal;
    }
};
export const mutations = {
    setItem(state,item){
        state.cartItems.push(item);
    },
    deleteItem(state,id){
        const newCart=state.cartItems.filter(i=>i.id!==id);
        state.cartItems=newCart
    },
    deleteAll(state){
        state.cartItems=[];
    },
    changeCount(state,info){
        state.cartItems=state.cartItems.map((item)=>{
            if(item.id===info.id){
                return {
                    ...item,
                    count:info.value
                }
            }else{
                return{
                    ...item
                }
            };
        })
    },
    changeSingleTotal(state,id){
        state.cartItems=state.cartItems.map((item)=>{
            if(item.id===id){
                return {
                    ...item,
                    total:item.priceNumber*item.count
                }
            }else{
                return{
                    ...item
                }
            };
        })
    },
    changeSumTotal(state){
        if(state.cartItems.length>0){
            let sum=0
            state.cartItems.forEach(i => {
                sum+=i.total
                state.sumTotal=sum
            });
        }else{
            state.sumTotal=0
        }
    },
    updateAfterRefresh(state,storage){
        state.cartItems = storage.cartJSON ? JSON.parse(storage.cartJSON) : [];
        if(storage.specialLocale){
            this.$i18n.setLocale(storage.specialLocale);
        }
    }
};
export const actions = {
    addItem(context,info){
       if(context.state.cartItems.some(i=>i.id===info.product.id)===false || context.state.cartItems.length <= 0){
            const priceArr = info.product.price.split(",");
            let newPrice="";
            for (let i in priceArr){
                newPrice+=priceArr[i];
            }
            newPrice=parseInt(newPrice);
            const total=newPrice*parseInt(info.count);
            info.product["priceNumber"]=newPrice
            info.product["count"]=info.count
            info.product["total"]=total
            context.commit('setItem',info.product);
            return true;
       }else{
            return false;
       };
    },
    deleteItem(context,info){
        context.commit('deleteItem',info.productId);
    },
    deleteAll(context){
        context.commit('deleteAll');
    },
    saveCart(context){
        localStorage.setItem("shoppingCart", JSON.stringify(context.state.cartItems));
    }
};