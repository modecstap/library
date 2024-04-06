const LeftMenu = () =>{
    return(
        <div>
            <img></img>
            <input></input>
            <div>
                <h2>Параметры поиска</h2>
                <div>
                    <input type="checkbox"></input>
                    <label>в наличии</label>
                </div>
                
                <h3>Жанр</h3>
                <div>
                    <input type="radio"></input>
                    <label>жанр1</label>
                </div>
                <div>
                    <input type="radio"></input>
                    <label>жанр2</label>
                </div>
                <div>
                    <input type="radio"></input>
                    <label>жанр3</label>
                </div>
                <button>поиск</button>
            </div>
        </div>
    )
}

export default LeftMenu