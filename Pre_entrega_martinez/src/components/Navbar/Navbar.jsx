const Navbar=()=>{
    return(
        <Header style= {{display:"flex", justifiContent:"space-between",alignItems:"center"}}>
            <h1>Ecommerce</h1>
            <nav>
                <a >Celulares</a>
                <a >Tablets</a>
                <a >Notebooks</a>

            </nav>
            <CartWidget/>
        </Header>
    )
}
export default Navbar