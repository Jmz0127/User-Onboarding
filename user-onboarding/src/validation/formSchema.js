// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('A first name is required ya chump!!')
        .min(1, 'First name must be at least 1 character long silly!!'),
    lastName: yup
        .string()
        .trim()
        .required('A last name is required ya chump!!')
        .min(1, 'Last name must be at least 1 character long silly!!'),
    email: yup
        .string()
        .email('Must be a valid email.')
        .required('Gotta have an email.'),
    password: yup
        .string()
        .required('You absolutely need a password')
        .min(8, 'type more secret characters! 8 minimum, please!')
        .max(18, 'type less secret characters! 18 maximum, please!'),
    checked: yup
        .boolean()
        .required('You must accept the terms')
})

export default formSchema;