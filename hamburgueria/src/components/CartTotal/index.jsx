export default function CartTotal({currentSale, setCurrentSale}){
    return (
        <div className="cart--total">
            <div className="cart--total--title">
                <h5>Valor Total:</h5>
                <span>{currentSale.reduce((value, product) => (value + product.price), 0)}</span>
            </div>
            <button className="removeAll" onClick={() => setCurrentSale([])}>Remover Todos</button>
            
        </div>
    )
}