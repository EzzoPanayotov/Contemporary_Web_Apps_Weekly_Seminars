import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from '../FireBase/useAuth';

const scheme = yup.object({
    email: yup.string().email('Email is not valid').required('You must enter a email'),
    password: yup.string().min(8).max(16).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
}); 

function RegisterForm() {
    const {register, formState: {errors},handleSubmit} = useForm({
        resolver: yupResolver(scheme)
    });
    const {registration} = useAuth()
    const reg = async data => {
        try {
            await registration(data.email, data.password)
        } catch (e) {
            console.log(e)
        }
    }
  return (
      <form onSubmit = {handleSubmit(reg)} >
          <label> Email</label>
          <input {...register('email')} />
          <p>{errors.email && errors.email?.message}</p>
          <label>Password</label>
          <input type={'password'}{...register('password')} />
          <p>{errors.password && errors.password?.message}</p>
          <label>Confirm Password</label>
          <input type={'password'}{...register('confirmPassword')} />
          <p>{errors.confirmPassword && errors.confirmPassword?.message}</p>

          <input type = 'submit' value = 'Register'/>
      </form>
  )
}

export default RegisterForm