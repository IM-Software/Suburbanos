import React, { useEffect, useState } from 'react';
import './styles.scss';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { ReactComponent as MenuBtnClose } from '../../assets/menu-close.svg'

export const Header = ({ section, headerFunction }) => {
  const [open, setOpen] = useState(false)
  const [iconClose, setIconClose] = useState(false)

  const clickButton = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open === true || (typeof headerFunction === 'function')) {
      setIconClose(true)
    } else {
      setIconClose(false)
    }
  }, [headerFunction, open])

  return (
    <div className='header-container' style={{ transform: `translateX(${section * 100}vw)` }}>
      <div className='header' >
        <img className="header-logo" src={Logo} alt="" />
        <div className='btns'>
          {!iconClose ? (
            <MenuBtn className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
          ) : (
            <div className='close'>
              <MenuBtnClose className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
            </div>
          )}
        </div>
      </div>
      <div className={`menu ${open ? 'open' : ''}`}>
        <div className='itens'>
          <p>Home</p>
          <p>A Produtora</p>
          <p>Projetos</p>
          <p>Quem Somos</p>
          <p>Deu Ruim</p>
          <p>Contato</p>
        </div>
      </div>
    </div>
  );
};