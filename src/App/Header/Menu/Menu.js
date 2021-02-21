import React from "react";
import { Link } from "react-router-dom"
import "./menu.css"
import '../../../common/style/base.css'
import '../../../common/style/media.css'

const Menu = () => {
  return (
   	  
					<>
					 <li className="category-menu"><Link to="/" className="category-menu-Link">Новости</Link></li> 
            <li className="category-menu"><Link to="/article"className="category-menu-Link">Статьи</Link></li>
            <li className="category-menu"><Link to="/trailer" className="category-menu-Link">Трейлеры</Link></li>
            <li className="category-menu"><Link to="/game" className="category-menu-Link">Игры</Link></li>
					</>
				
  )
}

export default Menu 