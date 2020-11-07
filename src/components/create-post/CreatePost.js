import React,{ useEffect } from 'react'
import Layout from '../layout'
import './create-post.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/createPost'


const CreatePost = ({ post, createPost }) => {

  const initialValues = {
    title: '',
    body: '',
    tags: '',
    published: []
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
    tags: Yup.string().max(255),
    published: Yup.array()
  })

  useEffect(() => {
    const textAreaEle = document.querySelector('#body')
    const listener = () => {
      textAreaEle.style.height = 'auto'
      textAreaEle.style.height = textAreaEle.scrollHeight+'px'
    }
    textAreaEle.addEventListener('input',listener)

    return () => {
      textAreaEle.removeEventListener('input',listener)
    }
  },[])

  return(
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => {
          return (
            <div className="row mx-0 justify-content-center">
              <div className=" col-sm-10 col-md-8">
                <div className="create-post">
                  <div className="create-post-content">
                    <h1 className="h3 text-info">Create Post</h1>
                      <Form className="form">
                        {post.success && <small style={{fontSize: '1rem',textAlign: 'center',display: 'block',padding: '1rem',color: 'green'}}>{post.success}</small>}

                        <FormControl control="input" name="title" label="Title" type="text" />
                        <FormControl control="textarea" name="body" label="Body" />
                        <FormControl control="input" name="tags" label="Tags" type="text" />
                        <FormControl control="checkbox" name="published" published={initialValues.published.length !== 0} label="Published" options={[{key: 'Published',value: 'published'}]} />

                        <div className="form-group d-flex">
                          <button disabled={!formik.isValid || !formik.dirty} type="submit" className="btn btn-info px-4 ml-auto">
                            <span>Submit</span>
                            {post.loading && <i className="bx bx-loader bx-spin"></i>}
                          </button>
                        </div>

                      </Form>
                  </div>
                </div>
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
