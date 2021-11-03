import { createStore, Store } from 'redux'
import { CartState, CartAction, DispatchType } from '../../types'
import reducers from '../reducers'

export const store: Store<CartState, CartAction> & { dispatch: DispatchType } = createStore(reducers)