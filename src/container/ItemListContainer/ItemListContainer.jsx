import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <main>
            <h2>{ props.subtitle }</h2>
            <h1>{ props.title }</h1>
            <button>{ props.cta }</button>
        </main>
    )
}

export default ItemListContainer
