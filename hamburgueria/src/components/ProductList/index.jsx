import ProductCard from "../ProductCard"


function Productlist ({products, AddProduct}){
    return (
        <ul className="product--list">
            {products.map((product) => (
                <ProductCard
                id={product.id}
                price={product.price}
                img={product.img}
                name={product.name}
                category={product.category}
                AddProduct={AddProduct}
                product={product}
                />
            ))}
        </ul>
    )
}

export default Productlist