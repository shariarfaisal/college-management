import React from 'react'
import Layout from '../layout'
import { Formik, Form } from 'formik'
import FormControl from '../create-post/FormControl'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { profileUpdateAction } from '../../store/actions/profile'


function ProfileEdit({ getUpdateProfile, loading, data, update, history }) {

  const initialValues = {
    name: data.profile.name,
    email: data.email,
    username: data.username,
    contact: data.profile.contact,
    work: data.profile.work,
    address: data.profile.address,
    social:{
      facebook: '',
      twitter: '',
      linkedin: '',
      github: '',
      web: ''
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!').min(2).max(25).trim(),
    username: Yup.string().required('Required!').matches(/^\w+$/,'Allowed alphabet characters only!'),
    email: Yup.string().required('Required').email('Invalid email!'),
    contact: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    work: Yup.string(),
    address: Yup.string()
  })

  const onSubmit = (values,onSubmitProps) => {
    console.log(values);
    // getUpdateProfile({
    //   values,
    //   setErrors: onSubmitProps.setErrors,
    //   history
    // })
  }

  return(
    <Layout>
      <div className="row mx-0 justify-content-center">
        <div className="col-md-8 col-lg-6 my-5 p-3 p-md-4 shadow">
          <h3 className="text-muted mb-4">Update Profile</h3>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}>
            {formik => {
              return (
                <Form className="form">
                  <FormControl type="text" name="name" control="input" label="Name" />
                  <FormControl type="text" name="username" control="input" label="Username" />
                  <FormControl type="email" name="email" control="input" label="Email" />
                  <FormControl type="text" name="contact" control="input" label="Contact" />
                  <FormControl type="text" name="work" control="input" label="Work" />
                  <FormControl type="text" name="address" control="textarea" label="Address" />
                  <FormControl type="text" name="social.facebook" control="input" label="Facebook" />
                  <FormControl type="text" name="social.twitter" control="input" label="Twitter" />
                  <FormControl type="text" name="social.linkedin" control="input" label="Linkedin" />
                  <FormControl type="text" name="social.github" control="input" label="GitHub" />
                  <FormControl type="text" name="social.web" control="input" label="Web" />

                  <div className="d-flex col-12">
                    <button disabled={!formik.isValid || !formik.dirty} className="btn btn-info px-4 rounded-20 ml-auto" type="submit">
                      <span>Save</span>
                      {update.loading && <i className="bx bx-loader bx-spin"></i>}
                    </button>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = ({ profile }) => {
  return{
    ...profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUpdateProfile: (arg) => dispatch(profileUpdateAction(arg))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileEdit)
