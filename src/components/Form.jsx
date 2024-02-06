
import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'

const Form = () => {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required('The full name is required'),
    email: yup.string().email().required('The email is required'),
    age: yup.number().positive().integer().required().min(18),
    password: yup.string().required().min(4).max(20),
    confirmPassword : yup.string().required().oneOf([yup.ref('password'),null], 'passwords do not match')
  })
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationSchema)
  })
  return (
    <div style={{textAlign: 'center'}}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        
      <h1>A simple form</h1>
      <label htmlFor="name">name</label>
      <input type="text" name='name' id='name' {...register('fullName')}/> <br /> <br />
      {errors.fullName && <p>{errors.fullName?.message}</p> }
      <label htmlFor="email">Email</label>
      <input type="email" name='email' id='email' {...register('email')} /> <br /> <br />
      {errors.email && <p>{errors.email?.message}</p> }
      <label htmlFor="age">age</label>
      <input type="number" name='age' id='age' {...register('age')}/> <br /> <br />
      {errors.age && <p>{errors.age?.message}</p> }
      <label htmlFor="password">Password</label>
      <input type="password" name='password' id='password' {...register('password')}/> <br /> <br />
      {errors.password && <p>{errors.password?.message}</p> }
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="confirmPassword" name='confirmPassword' id='confirmPassword' {...register('confirmPassword')} /> <br /> <br />
      {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p> }
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}8

export default Form
