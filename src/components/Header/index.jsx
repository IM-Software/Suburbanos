import React, { useEffect, useState } from 'react';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'

import './styles.scss';

export const Header = ({section}) => {
  const [translate, setTranslate] = useState(1)
  useEffect(() =>{
    if(section >= 1){
      setTranslate(section)
    }
  },[section])

  return (
    <div className='header' style={{ transform: `translateX(${translate * 100}vw)` }}>
        <img className="header-logo" src={Logo} alt="" />
        <MenuBtn className='menu-btn'/>
    </div>
  );
};

