function Botao({txtb, cor, funcao, arredondar, borda}){

    return(
        <>
            <button type="button" className={`btn btn-${cor} ${arredondar} ${borda}`} onClick={funcao}>{txtb}</button>
        </>
    )
}
export default Botao