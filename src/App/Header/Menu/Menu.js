import React from "react";
import "./menu.css"
import '../../../common/style/base.css'
import '../../../common/style/media.css'

const Menu = () => {
  return (
   	  
					<>
					 <li className="category-menu"><a href="#" className="category-menu-a">Новости</a></li> 
            <li className="category-menu"><a href="Article/article.html"className="category-menu-a">Статьи</a></li>
            <li className="category-menu"><a href="Trailer/trailer.html" className="category-menu-a">Трейлеры</a></li>
            <li className="category-menu"><a href="Game/game.html" className="category-menu-a">Игры</a></li>
					</>
				
  )
}

export default Menu 