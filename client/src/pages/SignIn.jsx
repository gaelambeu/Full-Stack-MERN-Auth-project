import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'  />
        <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign In
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>error</p>
    </div>
  )
}

export default SignIn