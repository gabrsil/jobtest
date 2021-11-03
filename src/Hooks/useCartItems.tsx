import { useSelector } from "react-redux";
import React from 'react'
import { store } from "../Context/store";
import { CartState } from "../types";

const useCartItems = () => {
    const items = useSelector((state: CartState) => state.shoppingCart)
    return {
        items
    }
}

export default useCartItems;