import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory } from "../../asyncmock"
import ItemList from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"


const ItemListContainer=({greeting})=>{
    const [Products, setProducts] = useState([])
    const{categoryId}= useParams()

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId)
        .then( result =>{ 

        })
   }, [])

    return(
       <main>
        <h1>{greeting}</h1>
        <ItemList Products={Products}></ItemList>
       </main>
    )
}

export default ItemListContainer