import React from 'react';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'

import './styles.scss';

export const Header = () => {
  return (
    <div className='header'>
        <img className="header-logo" src={Logo} alt="" />
        <MenuBtn className='menu-btn'/>
    </div>
  );
};