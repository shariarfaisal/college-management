import React,{ useEffect } from 'react'
import FormControl from '../create-post/FormControl'
import './style.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { getLogin } from '../../store/actions/login'
import { connect } from 'react-redux'

function Login({ getLogin, login }) {

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required!') || (login.error && login.error.username ? login.error.username : ''),
    password: Yup.string().required('Required!') || (login.error && login.error.password ? login.error.password : '')
  })

  const onSubmit = values => {
    getLogin(values)
  }

  return(
    <div className="login-component row mx-0 justify-content-center align-items-center">
      <div className="content-wrapper shadow p-2 bg-light col-10 col-xs-8 col-sm-6 col-md-4 col-lg-3">
        <div className="logo">
          <i className="bx bx-user"></i>
        </div>
        <h3 className="title">Login</h3>
        <div>
          {login.error && login.error.error && <small style={{color: 'red',fontSize: '.9rem',textAlign: 'center',display: 'block'}}>{login.error.error}</small>}
          {login.success && <small style={{color: 'green',fontSize: '.9rem',textAlign: 'center',display: 'block'}}>{login.success}</small>}
        </div>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          {formik => {
            return (
              <Form className="form">
                <FormControl type="text" name="username" control="input" label="Username"  />
                <FormControl type="password" name="password" control="input" label="Password"  />
                <div className="submit">
                  <button disabled={!formik.isValid || !formik.dirty} className="submit-btn" type="submit">
                    <i className="bx bx-log-in"></i>
                    <span>login</span>
                    {login.loading && <i className="bx bx-loader bx-spin"></i>}
                  </button>
                </div>
                <p className="footer">
                  Have no account? <Link to="/signup">Signup</Link>
                </p>
              </Form>
            )
          }}
        </Formik>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLogin: (data) => dispatch(getLogin(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
