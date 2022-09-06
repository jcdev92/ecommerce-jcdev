import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {

   const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => localStorage.setItem('token', res.data.data.token))
            .catch(err => console.log(err))
        reset(
            {
                email: '',
                password: ''
            }
        )
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>
            Welcome! Enter your email address and password to login
        </h2>
        <div className="form__group">
            <label className="form__label" htmlFor="email">Email</label>
            <input {...register('email')} className="form__input" type="email" name="email" id="email" placeholder="Email"/>
        </div>
        <div className="form__group">
            <label className="form__label" htmlFor="password">Password</label>
            <input {...register('password')} className="form__input" type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <button className="form__button" type="submit">Login</button>
    </form>
  )
}

export default FormLogin