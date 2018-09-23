import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({userName, password, loginFormChangeHandler, submitHandler}) => {
  return (
    <div>
      <h2>Kirjaudu sovellukseen</h2>
      <form onSubmit={submitHandler}>
      <div>
          username:
          <input 
          value = {userName}
          onChange = {loginFormChangeHandler}
          name = 'userName'
          />
      </div>
      <div>
          password:
          <input 
            value = {password}
            onChange = {loginFormChangeHandler}
            name = 'password'
          />
      </div>
      <button type='submit'>login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginFormChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
}

export default LoginForm

