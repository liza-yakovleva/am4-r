import React from "react";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import Enter from './Enter/Enter';
import Bur from './Bur-menu/Bur-menu';
import '../../common/style/media.css'
import '../../common/style/base.css'

import './header.css'
import './Menu/menu.css'
import './Search/search.css'
const Header = () => {
  return (
   

<header className="header">
    <div className="container">
      <div className="header-menu">
        <div className="logo-menu-search">
          <div className="logo"><Logo/></div>

          <div className="bur-menu"><Bur/></div>
          <ul className="menu">
             <Menu/>
          </ul>
          <div className="wrapper-search">
            <Search/>
            </div>
            </div>
        <div className="wrapper-btn">
          <Enter/>
        </div>
      
    </div>
    </div>
  </header>





   
  )
}

export default Header