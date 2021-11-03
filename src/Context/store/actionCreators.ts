import { ICartItem, CartAction } from "../../types";
import * as ActionTypes from "./actionTypes";
import { store } from "./index";

export function addCartItem(item: ICartItem) {
  const action: CartAction = {
    type: ActionTypes.ADD_ITEM,
    item,
  };

  return store.dispatch(action);
}

export function removeCartItem(item: ICartItem) {
  const action: CartAction = {
    type: ActionTypes.REMOVE_ITEM,
    item,
  };

  return store.dispatch(action);
}

export {};
