function Botao({txtb, cor, funcao}){
    return(
        <>
            <button type="button" className={`btn btn-${cor}`} onClick={funcao}>{txtb}</button>
        </>
    )
}
export default Botao