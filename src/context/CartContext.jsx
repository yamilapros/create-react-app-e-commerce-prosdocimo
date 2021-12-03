import { createContext, useState } from 'react'

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])


 
    //Agregar un item al carrito
    const addItem = (item) => {
        setCartList( [...cartList, item] )
    }
    

    /* //Guardar el Local
    const saveLocal = (arr) => {
        localStorage.setItem('data', JSON.stringify(arr))
    } */

    //Eliminar un item del carrito por su id
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    //Eliminar todos los items del carrito
    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={ {
            addItem,
            cartList,
            setCartList,
            removeItem,
            clear
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



