export default function CartCard(props){
    return (
        <div className="cart--card">
            <img src={props.img} alt={props.name} className="cart-card--img" />
            <div>
                <h5 className="cart-card--title">{props.name}</h5>
                <span className="cart-card--category">{props.category}</span>
            </div>
           <div>
               <button onClick={() => props.RemoveProduct(props.id)} className="cart-card--button">Remover</button>
           </div>

        </div>
    )
}