import React, { useState } from 'react'
import bg_img from "../assets/bg_img.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [error,setError]=useState('')
  const {user,logIn}=UserAuth()
  const navigate=useNavigate()

  const handleSubmmit = async (e)=>{
    e.preventDefault()
    setError('')
    try {
      await logIn(email,password)
      navigate('/')
    } catch (error) {
      console.log(error,'from the handle submitt')
      setError(error.message)
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src={bg_img} alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 text-red-300'>{error}</p>:null}
              <form onSubmit={handleSubmmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=>setemail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-0' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e)=>setpassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-0' type="password" placeholder='Password' autoComplete='current-password' />

                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>

                <div className='flex justify-between items-center text-sm text-gray-500'>
                  <p ><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need help?</p>
                </div>
                <p className='py-8'><span className='text-gray-500'>New to Netflix?

                </span>{''}
                  <Link to='/signUp'>Sign Up</Link>
                </p>

              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login