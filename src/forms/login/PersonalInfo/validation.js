import { differenceInYears } from 'date-fns'
import * as Yup from 'yup'

export const initialValues = {
  firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: '',
}

export const personalInfoValidation = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  gender: Yup.string()
    .oneOf(['male', 'female'])
    .required('Please enter your gender'),
  dateOfBirth: Yup.string()
    .test(
      'Date of Birth',
      'You must be at least 13 years old to join',
      value => differenceInYears(new Date(), new Date(value)) >= 13,
    )
    .required('Please enter your date of birth'),
})
