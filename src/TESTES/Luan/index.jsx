import React from "react";
import { MdSettings } from 'react-icons/md'
// Se der ruim, apaga tudo e coloca return <div></div>
import MeuBotao from "../../components/BotoesNavLateral";
import PublicarEvento from "../../components/PublicarEvento";
import AirbnbCard from "../../components/AddImgEvento";
import AirbnbImage from "../../components/AddImgEvento/image/150.png";
import BarraDePesqisa from "../../components/BarraPesquisa";

function TesteLuan() {
  return <div>


<BarraDePesqisa text={'Pesquise pela discrição do evento'}/>

 <AirbnbCard  imageUrl = {AirbnbImage} backgroundColor={'#FC5185'} color={'#FFF'} text={'Adicionar imagem sobre o evento'}/>

  <MeuBotao  icon={<MdSettings />} background={'#FC5185'} color={'#FFF'} text={'home'} href={'/amaury'}/>
  {/* <MeuBotao icon={<MdReceipt/>} background={'#FFF'} color={'#364F6B'} text={'status'}/>
  <MeuBotao icon={<SearchIcon />} background={'#FFF'} color={'#364F6B'} text={'inicial'}/> */}
  <PublicarEvento background={'#FC5185'} color={'#FFF'} text={'Publicar meu evento'}/>


  </div>;
}

export default TesteLuan;
