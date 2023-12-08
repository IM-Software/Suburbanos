import React, { useState } from 'react';
import './styles.scss';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { ReactComponent as MenuBtnClose } from '../../assets/menu-close.svg'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='header'>
        <img className="header-logo" src={Logo} alt="" />
        <MenuBtn className='menu-btn' onClick={() => setOpen(true)} />
      </div>
      <div className={`menu ${open ? 'open' : ''}`}>
        <div className='header'>
          <div></div>
          <MenuBtnClose className='btn' onClick={() => setOpen(false)}/>
        </div>
        <div className='itens'>
          <p>Home</p>
          <p>A Produtora</p>
          <p>Projetos</p>
          <p>Quem Somos</p>
          <p>Deu Ruim</p>
          <p>Contato</p>
        </div>
      </div>
    </>
  );
};