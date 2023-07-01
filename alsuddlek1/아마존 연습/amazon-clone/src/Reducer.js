export const initialState = {
    basket: [],
}

export const getBaseketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)
    // amount : 초기값이자 축적될 값이 저장될 인수 (0도 초기값)
    // item : 현재의 아이템의 속성이 들어가는데 item.price 장바구니 아이템의 가격

    // reduce : 배열의 모든 값을 합산할 때 사용 !!reducer 랑 헷갈리지말기!!
    // basket : 배열에서 item의 price를 합산하기 위해 reduce 사용

// Reducer : 장바구니에 담기 같은 기능을 dispatch

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, // 배열 가져올때
                basket: [...state.basket, action.item]
            }
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket]

            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    '(id' + action.id + ' )이 장바구니에 존재하지 않습니다.'
                    )
            } 

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state
    }
}

export default reducer