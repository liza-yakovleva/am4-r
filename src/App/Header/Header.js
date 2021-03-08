import React, {useState} from "react";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import Enter from './Enter/Enter';
import MenuB from './Bur/MenuВ';
import '../../common/style/base.css'

import './Menu/menu.css'
import './Search/search.css'
import { Route } from "react-router-dom"

const Header = () => {
  	const [menuActive,setMenuActive]=useState(false)
	const items = [{value:"Новости", href: '/', icon: "anchor"}, {value:"Статьи", href: '/article', icon: "anchor"}, {value:"Трейлеры", href: '/trailer', icon: "anchor"}, {value:"Игры", href: '/game', icon: "anchor"}]
  return (
   

<header className="header">
    <div className="container">
      <div className="header-menu">
        <div className="logo-menu-search">
            <div className="logo"><Route path="/"  component={Logo} /></div>
            
          	<div className="nav">
				<div className="burger-btn" onClick={() =>setMenuActive(!menuActive)}>
					<span></span>
				</div>
				</div>
            
            {/* <div className="bur-menu"><Route path="/" component={Bur} /></div> */}
            
          <ul className="menu">
             <Route path="/" component={Menu} />
          </ul>
          <div className="wrapper-search">
            <Route path="/" component={Search} />
            </div>
            </div>
        <div className="wrapper-btn">
         <Route path="/" component={Enter} />
        </div>
      
    </div>
      </div>
       	<MenuB active={menuActive} setActive={setMenuActive}  items={items}/>
  </header>





   
  )
}

export default Header