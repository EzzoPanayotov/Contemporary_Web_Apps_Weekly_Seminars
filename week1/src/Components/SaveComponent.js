import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from '../FireBase/useAuth';
import UseFireStore from '../FireBase/UseFireStore';

const scheme = yup.object({
    email: yup.string().email('Email is not valid').required('You must enter a email'),
    password: yup.string().min(8).max(16).required('Password is required')
}); 

function SaveComponent  () {
    const {register, formState: {errors},handleSubmit} = useForm({
        resolver: yupResolver(scheme)
    });
    const {saveStudent} = UseFireStore();
    const save = data =>{
        const std = {
        Email: data.email,
        Password: data.password,
        Date: new Date().toLocaleDateString()

        }
        saveStudent(std)
    }

  return (
      <form onSubmit = {handleSubmit(save)} >
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

export default SaveComponent    