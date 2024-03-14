import {useState} from "react"

const ItemCount = ({initial=1,stock,onAdd})=>{
    const [Count,setCount]=useState(initial)

    const decrement=()=>{
        if(Count > 1){
            setCount(prev => prev-1)
        }
    }
    const increment=()=>{
        if(Count < stock){
            setCount(prev => prev+1)
        }
    }
    return(
        <article>
            <h3>{Count}</h3>
            <button onClick={decrement}>-</button>  
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount