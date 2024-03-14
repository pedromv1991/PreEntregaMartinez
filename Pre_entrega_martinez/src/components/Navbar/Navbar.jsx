import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'


const Navbar=()=>{
    return(
        <Header style= {{display:"flex", justifiContent:"space-between",alignItems:"center"}}>
            <h1>Ecommerce</h1>
            <nav>
            <Link to="/category/celular">Celulares</Link>
            <Link to="/category/tablet">Tablets</Link>
            <Link to="/category/notebook">Notebooks</Link>

            </nav>
            <CartWidget/>
        </Header>
    )
}
export default Navbar