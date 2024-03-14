import ItemCount from "../ItemCount/ItemCount"

const ItemDetail=(name,category,price,img,description,stock) => {
    return (
        <article>
            <img src={img} style={{width: 100}}/>
            <h3>{name}</h3>
            <h4>categoria:{category}</h4>            
            <h4>${price}</h4>
            <h4>descripcion:{description}</h4>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail