import './css.css';


import { RiBuilding2Fill } from 'react-icons/ri';
import { BiPhone } from 'react-icons/bi';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import Logo from './Asset 3.png'

import { useState} from 'react';



function drop_menu(e){
  
  let imi_haqida = document.querySelector('.imi_haqida_items')
  let tuzilma = document.querySelector('.tuzilma_items')
  let talabalar = document.querySelector('.talabalar_items')
  console.log(e.target)
  if (e.target.parentElement.className === 'imi_haqida') {
    imi_haqida.className === 'imi_haqida_items active' ?
    imi_haqida.className = "imi_haqida_items" : 
    imi_haqida.className ="imi_haqida_items active";
  } else if(e.target.parentElement.className === 'tuzilma'){
    tuzilma.className === 'tuzilma_items active' ? 
    tuzilma.className = "tuzilma_items" : 
    tuzilma.className ="tuzilma_items active";
  }else if(e.target.parentElement.className === 'talabalar'){
    talabalar.className === 'talabalar_items active' ? 
    talabalar.className = "talabalar_items" : 
    talabalar.className ="talabalar_items active";
  }
}



function App() {

  const [navbarClass, setNavbarClass] = useState(false);
  const [nav, setNav] = useState(false);

  window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
          setNavbarClass(true);
      }else {
          setNavbarClass(false);
      }
  });

  function navigation(){
    nav ? setNav(false) : setNav(true);
  }


  return (
    <>
      <div className={navbarClass ? "navbar active" : "navbar"}>

        <div className="nav_top">
          <div>
              <a target="_blank" href="https://t.me/impulsmi_uz">
                <BsTelegram />
                </a>
              <a target="_blank" href="https://www.instagram.com/impuls_mi/">
                <BsInstagram />
                </a>
              <a target="_blank" href="Thttps://www.facebook.com/profile.php?id=100087750432881">
                <BsFacebook />
                </a>
          </div>
          <div>
              <a target="_blank" href="https://t.me/IMI_qabul">
                <BsChatText />
                imi_support
                </a>
            </div>

            <div>
              <a href="Tel:+998555105015">
                <BiPhone className='phone_icon' />
                (55) 510 50 15
                </a>
            </div>

            <div>
              <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                impulsedu1@gmail.com
                </a>
            </div>

            <div>
              <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                Namangan shahar, K.Otamirzayev ko'cha 1.
                </a>
            </div>
            <div className='lngs_desktop'>
              <a href='#'>UZ</a>
              <a href='#'>RU</a>
              <a href='#'>EN</a>
            </div>
        </div>

        <div className="nav">

            <div className="nav_logo">
              <img src={Logo} alt="logo" />
              <span>
                <p>Impuls</p>
                <p>Tibbiyot Instituti</p>
              </span>
            </div>

            <ul className={nav ? "navigation active" : "navigation"}>
              <li id='drop_menu' className='imi_haqida' onClick={(e) => drop_menu(e)}>
                <a href="#">
                  IMI haqida
                  <MdOutlineKeyboardArrowDown />
                </a>
                <ul className='imi_haqida_items'>
                  <li><a href="#">IMI haqida</a></li>
                  <li><a href="#">Struktura</a></li>
                  <li><a href="#">O'quv binosi</a></li>
                  <li><a href="#">Yotoqxona</a></li>
                </ul>
              </li>

              <li id='drop_menu' className='tuzilma' onClick={(e) => drop_menu(e)}>
                <a href="#">Tuzilma
                  <MdOutlineKeyboardArrowDown />
                </a>
                <ul className='tuzilma_items'>
                  <li><a href="#">Institut nizomi</a></li>
                  <li><a href="#">Rektorat</a></li>
                  <li><a href="#">Institut kengashi</a></li>
                  <li><a href="#">Rekvizitlar</a></li>
                  <li><a href="#">Tuzilma</a></li>
                  <li><a href="#">Fakultetlar</a></li>
                  <li><a href="#">Markaz va B'olimlar</a></li>
                </ul>
              </li>

              <li id='drop_menu' className='talabalar' onClick={(e) => drop_menu(e)}>
                <a href="#">Talabalar
                  <MdOutlineKeyboardArrowDown />
                </a>
                <ul className='talabalar_items'>
                  <li><a href="#">EVEREST TEAM</a></li>
                  <li><a href="#">Iqtidorli talabalar</a></li>
                  <li><a href="#">Dars jadvali</a></li>
                  <li><a href="#">Online ta'lim</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Yangiliklar</a>
              </li>
              <li>
                <a href="#">Kutubxona</a>
              </li>
              <li>
                <a href="#">Aloqa</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a className='ariza_btn' href="#">Ariza qoldirish</a>
              </li>
              <div className='lngs_mobile'>
                <a href='#'>UZ</a>
                <a href='#'>RU</a>
                <a href='#'>EN</a>
              </div>
            </ul>


          <div className="menu_btn" onClick={navigation}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
      <div className="wrapper">
           <table border="2" width="1000">
            <tr>
              <td className='td1'>#</td>
              <td colSpan={3}>Rekvizit(Byudjet)</td>
            </tr>
            <tr>
              <td className='td1'>1</td>
              <td width="200">Hisob raqam</td>
              <td colSpan={2}>O'zbekiston Respublikasi Moliya vazirligi G'aznachiligi h/r: 23402000300100001010</td>
            </tr>
            <tr>
              <td className='td1'>2</td>
              <td width="200">INN</td>
              <td colSpan={2}>201122919</td>
            </tr>
            <tr>
              <td className='td1'>3</td>
              <td width="200">MFO</td>
              <td colSpan={2}>00014(XKKM Markaziy bank)</td>
            </tr>
            <tr>
              <td className='td1'>4</td>
              <td width="200">SHXR</td>
              <td colSpan={2}>400110860034017950100079002</td>
            </tr>
            <tr>
              <td className='td1'>5</td>
              <td width="200">INN</td>
              <td colSpan={2}>202217655</td>
            </tr>
           </table>
      </div>
    </>
  );
}

export default App;
