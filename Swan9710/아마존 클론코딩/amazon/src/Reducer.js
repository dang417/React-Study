export const initialState = {
    basket: [],
    user: null
};

// amount 초기값 이자 앞으로 축적될 값들이 저장될 인수
// item 현재의 아이템의 속성이 들어가는데 item.price 장바구니 아이템의 가격
// reudce 배열의 모든 값을 합산할 때 사용
// basket 배열에서 item의 price를 합산하기 위해 reduce 사용

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log(state)
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket]

            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    '(id' + action.id + ')이 장바구니에 존재하지 않습니다.'
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

    default:
        return state;
    }
}

export default reducer