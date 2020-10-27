import React from 'react'
import FormControl from '../create-post/FormControl'
import './style.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { getSignup, checkUsername } from '../../store/actions/signup'
import { connect } from 'react-redux'

function Signup({ getSignup, getCheckUsername, signup }) {

  const initialValues = {
    name: '',
    email: '',
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!').min(2).max(25).trim(),
    username: Yup.string().required('Required!').matches(/^\w+$/,'Allowed alphabet characters only!'),
    email: Yup.string().required('Required').email('Invalid email!'),
    password: Yup.string().required('Required!').matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/,'Password too weak! It should contain atleast 1 uppercase and 1 lowercase character.')
  })

  const onSubmit = (values,onSubmitProps) => {
    getSignup({
      values,
      setErrors: onSubmitProps.setErrors,
      resetForm: () => onSubmitProps.resetForm()
    })
  }

  return(
    <div className="signup-component row mx-0 justify-content-center align-items-center">
      <div className="content-wrapper col-11 col-xs-8 col-sm-6 col-lg-3 shadow bg-light p-2">
        <div className="logo">
          <i className="bx bx-user-plus"></i>
        </div>
        <h3 className="title">Signup</h3>
        <div>
          {signup.success && <div style={{fontSize: '.9rem'}} className="text-center text-success">{signup.success}</div>}
        </div>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          {formik => {
            return (
              <Form className="form">
                <FormControl type="text" name="name" control="input" label="Name"  />
                <FormControl type="text" name="username" control="input" label="Username"  />
                <FormControl type="email" name="email" control="input" label="Email"  />
                <FormControl type="password" name="password" control="input" label="Password"  />
                <div className="submit">
                  <button disabled={!formik.isValid || !formik.dirty} className="submit-btn" type="submit">
                    <span>Signup</span>
                    {signup.loading && <i className="bx bx-loader bx-spin"></i>}
                  </button>
                </div>
                <p className="footer">
                  Already have an account? <Link to="/">Login</Link>
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
    signup: state.signup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSignup: (arg) => dispatch(getSignup(arg)),
    getCheckUsername: arg => dispatch(checkUsername(arg))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup)
