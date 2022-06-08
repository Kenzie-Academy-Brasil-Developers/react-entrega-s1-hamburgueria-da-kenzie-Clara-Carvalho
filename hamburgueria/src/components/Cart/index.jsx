import CartCard from "../CartCard"
import CartTotal from "../CartTotal"

export default function Cart({currentSale, RemoveProduct, setCurrentSale}){
    return (
        <div className="cart">
            <div className="cart--header">
                <h3>Carrinho de Compras</h3>
            </div>
            <div className="cart--body">
                {currentSale.map((sale) => (
                    <CartCard
                    name={sale.name}
                    id={sale.id}
                    img={sale.img}
                    category={sale.category}
                    RemoveProduct={RemoveProduct}
                    />
                ))}
            </div>
            <CartTotal
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
            />
        </div>
    
    )
}