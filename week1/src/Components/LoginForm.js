import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from '../FireBase/useAuth';

const scheme = yup.object({
    email: yup.string().email('Email is not valid').required('You must enter a email'),
    password: yup.string().min(8).max(16).required('Password is required')
}); 

function LoginForm() {
    const {register, formState: {errors},handleSubmit} = useForm({
        resolver: yupResolver(scheme)
    });
    const {login} = useAuth();
    const onSubmit = async data => {
            await login(data.email, data.password);

    };
  return (
      <form onSubmit = {handleSubmit(onSubmit)} >
          <label> Email</label>
          <input {...register('email')} />
          <p>{errors.email && errors.email?.message}</p>
          <label>Password</label>
          <input type={'password'}{...register('password')} />
          <p>{errors.password && errors.password?.message}</p>

          <input type = 'submit' value = 'Login'/>
      </form>
  )
}

export default LoginForm