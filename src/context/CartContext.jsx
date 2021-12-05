import { createContext, useState } from 'react'

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    //CartList: Array de productos del carrito
    const [cartList, setCartList] = useState([])
    //totalPay: Array de precios subtotales para dar precio total a pagar
    const [totalPay, setTotalPay] = useState([])


    
    //Agregar un item al carrito
    const addItem = (item) => {
        setCartList( [...cartList, item] )
    }
    
    //Sumar Subtotal de cada Producto (Precio*cantidad) y devuelve Subtotal
    const subtotalProduct = (price, quantity) => {
        let subtotal = (price*quantity).toFixed(2)
        return subtotal
    }
    
    //Sumar todos los subtotales y devuelve precio Total
    const totalToPay = () => {
        let total = 0
        cartList.filter((item) => total += item.price*item.quantity)
        setTotalPay(total.toFixed(2))
        return totalPay
        
    }

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
            subtotalProduct,
            removeItem,
            totalToPay,
            clear
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



