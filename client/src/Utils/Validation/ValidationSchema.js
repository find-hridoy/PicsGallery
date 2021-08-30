import * as Yup from 'yup';

const signUpSchema = Yup.object({
   fullName: Yup.string()
      .required('Please enter your name.')
      .matches(/[a-zA-Z]+\s[a-zA-Z-]/, 'Please enter your full name.'),
   email: Yup.string()
      .required('Please enter your email.')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please enter a valid email address.'),
   username: Yup.string()
      .required('Please enter your username.')
      .min(5, 'Username must contain at least 5 characters.')
      .matches(/[0-9]/, 'Only characters are not allowed at least one number should be there')
      .max(10, 'Username must be between 5 and 10 characters.'),
   password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Password must contain at least 6 characters.'),
   confirmPassword: Yup.string()
      .required('Please enter your confirm password')
      .oneOf([Yup.ref('password'), null], 'Password do not match.'),
});

const loginSchema = Yup.object({
   username: Yup.string()
      .required('Please enter your username.')
      .min(5, 'Username must contain at least 5 characters.')
      .matches(/[0-9]/, 'Only characters are not allowed at least one number should be there')
      .max(10, 'Username must be between 5 and 10 characters.'),
   password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Password must contain at least 6 characters.'),
});

export { signUpSchema, loginSchema };
// eslint-disable-next-line prettier/prettier

