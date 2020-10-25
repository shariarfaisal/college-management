import React from 'react'
import Layout from '../Layout'
import './create-post.scss'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/createPost'


const CreatePost = ({ post, createPost }) => {

  const initialValues = {
    title: '',
    body: '',
    tags: ''
  }

  const onSubmit = (values,submitProps) => {
    createPost({
      values,
      setErrors: submitProps.setErrors,
      resetForm: () => submitProps.resetForm()
    })
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required!'),
    body: Yup.string().required('Required!').max(5000),
    tags: Yup.string().max(255)
  })

  return(
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => {
          return (
            <div className="create-post">
              <div className="create-post-content">
                <h1 className="title">Create Post</h1>
                  <Form className="form">
                    {post.success && <small style={{fontSize: '1rem',textAlign: 'center',display: 'block',padding: '1rem',color: 'green'}}>{post.success}</small>}
                    <FormControl control="input" name="title" label="Title" type="text" />
                    <FormControl control="textarea" name="body" label="Body" />
                    <FormControl control="input" name="tags" label="Tags" type="text" />
                    <div className="form-item footer">
                      <button disabled={!formik.isValid || !formik.dirty} type="submit" className="submit">
                        <span>Submit</span>
                        {post.loading && <i className="bx bx-loader bx-spin"></i>}
                      </button>
                    </div>
                  </Form>
              </div>
            </div>
          )
        }}
      </Formik>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    post: state.createPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (data) => dispatch(createPost(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
