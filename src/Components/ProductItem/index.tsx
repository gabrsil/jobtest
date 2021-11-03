import React from 'react'
import { ICartItem } from '../../types';
import { currencyFormatter } from '../../Utils';
import { Container, ProductImage, Button } from './styles';

interface IProps {
    item: ICartItem,
    onAddProduct: Function
}

const ProductItem: React.FC<IProps> = ({
    item,
    onAddProduct
}) => {
    return (
        <Container>
            <div className="img-container">
                <ProductImage backgroundImage={item.image} />
            </div>
            <div className="product-info">
                <p className="product-title">{item.title}</p>
                <p className="product-price">{currencyFormatter(item.price)}</p>
                <Button onClick={() => onAddProduct(item)}>Comprar</Button>

            </div>
        </Container>
    )
}

export default ProductItem;