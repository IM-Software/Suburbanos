import React, { useEffect, useState } from 'react';
import './styles.scss';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { ReactComponent as MenuBtnClose } from '../../assets/menu-close.svg'

export const Header = ({ section, headerFunction, navigation }) => {
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

  const navigationTo = (navTo) => {
    navigation(navTo)
    setOpen(false)
  }

  return (
    <div className='header-container' style={{ transform: `translateX(${section * 100}vw)` }}>
      <div className='header' >
        <img className="header-logo" src={Logo} alt="" />
        <div className={`btns ${iconClose ? 'active' : ''}`}>
          {!iconClose ? (
            <MenuBtn className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
          ) : (
            <MenuBtnClose className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
          )}
        </div>
      </div>
      <div className={`menu ${open ? 'open' : ''}`}>
        <div className='background'></div>
        <div className='itens'>
          <p onClick={() => navigationTo('home')}>Home</p>
          <p onClick={() => navigationTo('producer')}>A Produtora</p>
          <p onClick={() => navigationTo('projects')}>Projetos</p>
          <p onClick={() => navigationTo('about')}>Quem Somos</p>
          <p onClick={() => navigationTo('projectFinal')}>Deu Ruim</p>
          <p onClick={() => navigationTo('contact')}>Contato</p>
        </div>
      </div>
    </div>
  );
};