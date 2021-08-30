import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '../../Utils/Validation/ValidationSchema';

const MakeAdmin = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      mode: 'onChange',
      resolver: yupResolver(signUpSchema),
   });
   const onSubmit = async (data, e) => {
      try {
         const { fullName, email, username, password } = data;
         const result = await axios.post('http://localhost:5000/api/users/register-admin', {
            fullName,
            email,
            username,
            password,
         });
         if (result) {
            console.log(result.data.message);
            e.target.reset();
         }
      } catch (err) {
         console.log(err.response.data.message);
      }
   };
   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <span>Full Name</span>
            <input type="text" {...register('fullName')} />
            {errors.fullName && <span>{errors.fullName.message}</span>}
            <br />
            <span>Email</span>
            <input type="email" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
            <br />
            <span>Username</span>
            <input type="text" {...register('username')} />
            {errors.username && <span>{errors.username.message}</span>}
            <br />
            <span>Password</span>
            <input type="password" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
            <br />
            <span>Confirm Password</span>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            <br />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default MakeAdmin;
