import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../Utils/Validation/ValidationSchema';

const AdminLogin = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      mode: 'onChange',
      resolver: yupResolver(loginSchema),
   });
   const onSubmit = async (data) => {
      try {
         const { username, password } = data;
         const result = await axios.post('http://localhost:5000/api/users/login-admin', {
            username,
            password,
         });
         if (result) {
            console.log(result.data.message);
         }
      } catch (err) {
         console.log(err.response.data.message);
      }
   };
   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <span>Username</span>
            <input type="text" {...register('username')} />
            {errors.username && <span>{errors.username.message}</span>}
            <br />
            <span>Password</span>
            <input type="password" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
            <br />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default AdminLogin;
