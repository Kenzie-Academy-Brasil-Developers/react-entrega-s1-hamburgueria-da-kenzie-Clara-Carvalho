function ProductCard (props){
    return (
        <li className="product-card" key={props.id}>
            <img src={props.img} alt={props.name} />
            <h4>{props.name}</h4>
            <p>{props.category}</p>
            <p>{props.price}</p>
            <button type="button" className="button--add" onClick={() => props.AddProduct(props.product)}>Adcionar</button>
        </li>
    )
}

export default ProductCard