import { useState } from "react";
import Header from "../Header";

interface IProps {
    child: any
}

const Container: React.FC<IProps> = ({ child: Child }) => {
    const [openSidebar, setOpenSideBar] = useState(false);

    return (
        <>
            <Header setOpenBar={setOpenSideBar} openBar={openSidebar} />
            <Child />
        </>
    )
}

export default Container;