import React from "react"
import BuscaViagens from "../../componentes/BuscaPassagens"
import DestaquesDestinos from "../../componentes/PrincipaisDestinos"
import OfertasPromoções from "../../componentes/Ofertas"
import Depoimentos from "../../componentes/DepoimentosClientes"
import ChamadaParaAcao from "../../componentes/ChamadaAcao"
function Home(){
    return(
        <>
        <BuscaViagens/>
        <DestaquesDestinos/>
        <OfertasPromoções/>
        <Depoimentos/>
        <ChamadaParaAcao/>
        </>
    )
}
export default Home