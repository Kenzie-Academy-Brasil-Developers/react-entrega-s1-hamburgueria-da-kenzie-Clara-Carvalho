


export default function Search({products, setProducts, search, setSearch}){

 


const handleSearchChange = (event) => {
    setSearch(event.target.value);
}

const handleOnSubmit = (event) => {
    event.preventDefault();
    
    setProducts( products.filter(product =>(product.name.toLowerCase().includes(search.toLowerCase()) === true || product.category.toLowerCase().includes(search.toLowerCase()) )))
}

    return (
        <div className="search">
            <input className="form-control" type="text" onChange={(event) => handleSearchChange(event)} placeholder="Digite a Pesquisa"/>
            <button className="btn--search"type="submit" onClick={(event) => handleOnSubmit(event)}>Pesquisar</button>
        </div>
    )
}