import { useEffect, useState } from 'react';
import ProductItem from '../../Components/ProductItem'
import { Body } from './styles';
import { toast } from 'react-toastify';
import ReactLoading from "react-loading";
import { addCartItem } from '../../Context/store/actionCreators';
import { ICartItem } from '../../types';

const Home: React.FC = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products/', { method: 'get' })
            .then(data => data.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }

    const onAddProduct = (product: ICartItem) => {
        addCartItem(product)
        toast("Produto Adicionado no Carrinho!", {
            autoClose: 2000
        });
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) return (
        <Body>
            <ReactLoading width={150} type="bars" color="#dadada" />
        </Body>
    )

    return (
        <Body>
            {products.map((item: any) => (
                <ProductItem
                    data-testid="Div::ProductItem"
                    onAddProduct={onAddProduct}
                    item={item}
                />
            ))}
        </Body>
    )
}

export default Home;