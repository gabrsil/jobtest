import { CartState, CartAction } from "../../types";
import * as ActionTypes from "../store/actionTypes";

const initialState: CartState = {
    shoppingCart: [],
    cartTotalPrice: 0
}

export default (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case "DEFAULT":
            return initialState;
        case ActionTypes.ADD_ITEM:
            return { ...state, shoppingCart: [...state.shoppingCart, action.item] }
        case ActionTypes.REMOVE_ITEM:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter((item: any) => item.id !== action.item.id),
            }

    }
    return state;
}