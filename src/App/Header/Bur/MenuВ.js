import React from "react"
import "./menub.css"


const MenuB = ({ items,active, setActive}) => {
	return (

		<div className={active ?'menu-b active' :'menu-b' } onClick={()=>setActive(false)}>
				<div className="blur"/>
			
				<div className="menu_content" onClick={e=>e.stopPropagation()}>
				
				<ul className="menub-ul">
					{items.map(item => 
						<li className="menub-li">
							<a href={item.href} className="menub-a">{item.value}</a>
							<span className="material-icons">{ item.icon }}</span>
							
						</li>
						)}
				</ul>
			

			
</div>

			
</div>




  )
 }

export default MenuB