import React, { useState } from 'react'
import "./enter.css"
import '../../../common/style/base.css'
import Login_in from './Login_in'
import Registration from './Registration'


	
	




const Enter = () => {
	const [hideEntry, setBoolE] = useState(false)
	const [hideReg, setBoolR] = useState(false)
	const handleEnterToggleClick = () => {
		setBoolE((val) => (
			val ? false : true
		))
	}
			const handleRegToggleClick = () => {
		setBoolR((val) => (
     val?false : true
		))
	}



	return (
		<>
			<button onClick={() => handleEnterToggleClick()} className="log-in enter">{hideEntry ? 'Скрыть' : 'Вход'}</button>
			<button onClick={() => handleRegToggleClick()} className="log-in reg"> {hideReg ? 'Скрыть' : 'Регистрация'}</button>
		   { hideEntry && <Login_in/> }
			{/* <Login-in value={hideEntry} /> */}
			 { hideReg && <Registration /> }
			
				
				</>
  )
}

export default Enter 