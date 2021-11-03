
import Box from '../Box';
import { Container, ToggleIcon, Wrapper } from './styles'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCartItems from '../../Hooks/useCartItems';
import { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
    setOpenBar: Dispatch<SetStateAction<boolean>>
    openBar: SetStateAction<boolean>
}

const Header: React.FC<IProps> = ({ setOpenBar }) => {
    const { items } = useCartItems()
    const { push } = useHistory()

    const setBar = () => setOpenBar((prev) => !prev)

    return (
        <Container>
            <Wrapper>
                <div className="header-menu-box" onClick={setBar}>
                    <ToggleIcon fill="#fff9" height={20} />
                </div>
                <Box className="header-logo" as="h1" color="white">Logo</Box>
                <Box className="cart-box" onClick={() => push('/cart/resume')} m="0 0 0 auto" as="button" bg="transparent" border="none">
                    <AiOutlineShoppingCart color="white" size={24} />
                    <div className="cart-tooltip">
                        <p>Carrinho</p>
                    </div>
                </Box>
                <Box as="p" m="0 0 0 7px" fontWeight="bold" color="white">{items.length}</Box>
            </Wrapper>
        </Container>
    )
}

export default Header;