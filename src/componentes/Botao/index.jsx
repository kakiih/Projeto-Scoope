function Botao({txtb, cor, funcao, arredondar, borda}){

    return(
        <>
            <a href="/login">
            <button type="button" className={`btn btn-${cor} ${arredondar} ${borda}`} onClick={funcao}>{txtb}</button>
            </a>
        </>
    )
}
export default Botao