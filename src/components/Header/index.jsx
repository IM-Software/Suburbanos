import React, { useEffect, useState } from 'react';
import './styles.scss';

import Logo from '../../assets/LogoSuburbanos.png';
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { ReactComponent as MenuBtnClose } from '../../assets/menu-close.svg'

import { useWindowSize } from "@uidotdev/usehooks"

export const Header = ({ section, headerFunction, navigation, headerbackground }) => {
  const [open, setOpen] = useState(false)
  const [iconClose, setIconClose] = useState(false)
  const [styleNav, setStyleNav] = useState(null)


  const { width } = useWindowSize()

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

  useEffect(() => {
    if (width < 768) {
      setStyleNav({ transform: `translateY(${section * 101}vh)` })
    } else {
      setStyleNav({ transform: `translateX(-${section * 100}%)` })
    }
  }, [width, section])

  return (
    <div className='header-container' style={styleNav}>
      <div className='header' >
        <img className={`header-logo ${headerbackground || open ? 'active' : ''}`} src={Logo} alt="" />
        <div className={`btns ${headerbackground || open ? 'active' : ''}`}>
          {!iconClose ? (
            <MenuBtn className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
          ) : (
            <MenuBtnClose className='menu-btn close' onClick={headerFunction ? headerFunction : clickButton} />
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