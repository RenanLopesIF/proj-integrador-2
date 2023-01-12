import React from "react";
import { MdSettings } from 'react-icons/md'
// Se der ruim, apaga tudo e coloca return <div></div>
import NavigationButtonSide from "../../components/NavigationButtonSide";
import ButtonSubmit from "../../components/ButtonSubmit";
import AddImgEvent from "../../components/AddImgEvent";
import AirbnbImage from "../../components/AddImgEvent/image/150.png";
import BarraDePesqisa from "../../components/BarraPesquisa";

function TesteLuan() {
  return <div>


<BarraDePesqisa text={'Pesquise pela discrição do evento'}/>

 <AddImgEvent  imageUrl = {AirbnbImage} backgroundColor={'#FC5185'} color={'#FFF'} text={'Adicionar imagem sobre o evento'}/>

  <NavigationButtonSide  icon={<MdSettings />} background={'#FC5185'} color={'#FFF'} text={'home'} href={'/amaury'}/>
  {/* <NavigationButtonSide icon={<MdReceipt/>} background={'#FFF'} color={'#364F6B'} text={'status'}/>
  <NavigationButtonSideicon={<SearchIcon />} background={'#FFF'} color={'#364F6B'} text={'inicial'}/> */}
  <ButtonSubmit background={'#FC5185'} color={'#FFF'} text={'Publicar meu evento'}/>


  </div>;
}

export default TesteLuan;
