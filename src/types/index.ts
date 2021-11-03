export interface ICartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartState {
  shoppingCart: ICartItem[];
  cartTotalPrice: number;
}

export interface CartAction {
  type: string;
  item: ICartItem;
}

export type DispatchType = (args: CartAction) => CartAction;
