import { useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { removeCartItem } from "../../Context/store/actionCreators";
import useCartItems from "../../Hooks/useCartItems";
import { ICartItem } from "../../types";
import { currencyFormatter } from "../../Utils";
import { Body, CartArea, CartContainer, CartItem, PriceResume, Wrapper, ProductImage, ProductInfo, CartContent } from "./styles";

const CartResume = () => {
    const { items } = useCartItems()

    const totalPrice = useMemo(
        function calculateTotalPrice() {
            return items.reduce((acc, item) => {
                return acc = acc + item.price
            }, 0)
        },
        [items])

    const removeItem = (item: ICartItem) => {
        removeCartItem(item)
        toast("Produto Removido do Carrinho!", {
            autoClose: 2000
        });
    }

    const cartList = useMemo(() => {
        const arr = new Set()
        return items.filter(item => {
            const duplicate = arr.has(item.id)
            arr.add(item.id)
            return !duplicate
        })
    }, [items])

    return (
        <Body>
            <Wrapper>
                <h1>{`Carrinho de Compras (${items.length} Compras)`}</h1>
                <CartContainer>
                    <CartArea>
                        {items.length ? cartList.map(item => (
                            <CartItem key={item.id}>
                                <ProductImage bgImage={item.image} />
                                <CartContent>
                                    <ProductInfo>
                                        <p className="product-title">{item.title}</p>
                                        <p className="product-size">{item.category}</p>
                                    </ProductInfo>
                                    <select defaultValue={items.filter(i => i.id === item.id).length} className="qtd-option">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                    <p className="product-price">{currencyFormatter(item.price)}</p>
                                    <div className="remove-product" onClick={() => removeItem(item)}>
                                        <AiOutlineClose size={20} />
                                    </div>
                                </CartContent>
                            </CartItem>
                        )) : (
                            <p style={{ fontSize: '1.8rem' }}>O carrinho está vazio ☹️</p>
                        )}
                    </CartArea>
                    <PriceResume>
                        <p className="resume-title">Resumo de Compra</p>
                        <div className="price-line">
                            <p>Subtotal</p>
                            <p >{currencyFormatter(totalPrice)}</p>
                        </div>
                        <div className="price-line">
                            <p>Frete</p>
                            <p >R$0,00</p>
                        </div>
                        <div className="total-price-line">
                            <p>Total</p>
                            <p>{currencyFormatter(totalPrice) ?? 'R$ 0,00'}</p>
                        </div>
                    </PriceResume>
                </CartContainer>
            </Wrapper>
        </Body>
    )
}

export default CartResume;