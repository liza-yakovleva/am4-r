import React from 'react'
import "./enter.css"
import '../../../common/style/base.css'
 import Checkbox from '@material-ui/core/Checkbox';
// import { Checkbox } from '@material-ui/core';
const Login_in = () => {
	return (
		<>
			<div class="field-for-log-in">
					<form action="" class="form-login">
						<h3>Вход</h3>
						<input type="text" class="login" placeholder="Логин" ></input>
						<input type="text" class="password" placeholder="Пароль"></input>
						<Checkbox
       
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /><span>Запомнить пароль?</span>
					</form>
				</div>
				</>
  )
}



export default Login_in