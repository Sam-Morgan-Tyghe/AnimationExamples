import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
}

export const emailValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
})

export const loginValidation = Yup.object()
  .shape({
    password: Yup.string().required('Please enter your password'),
  })
  .concat(emailValidation)
