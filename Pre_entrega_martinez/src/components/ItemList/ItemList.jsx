import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return (
        <section>
            {
                products.map(products=> {
                    return <Item key={product.id}{...product}/>
                })
            }                 
        </section>
    )
}

export default ItemList