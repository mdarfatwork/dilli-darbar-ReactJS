import React, { useEffect, useState } from 'react'
import BgHeader from '../components/reused/BgHeader'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // eslint-disable-next-line
  const { user, logIn } = UserAuth();
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Login - Dilli Darbar";
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <div className="pt-20 sm:pt-24 md:pt-30 w-full">
      <BgHeader data="Login"/>
      <div className="w-[90%] 2xl:w-[65%] mx-auto">
        <div className="w-full py-16 flex justify-center">
          <form onSubmit={handleSubmit} className="bg-red-300 p-6 rounded-md flex flex-col gap-6">
            <h3 className='text-center text-2xl text-bold'>Login</h3>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
            <input type="email" placeholder='Enter Your Email' className='outline-none bg-transparent text-black border-b border-gray-500 p-1 font-sans placeholder:text-black w-72' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Your Password' className='outline-none bg-transparent text-black border-b border-gray-500 p-1 font-sans placeholder:text-black w-72' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='mx-auto bg-red-500 text-white p-2 rounded-md cursor-pointer'>Submit</button>
            <span className='pt-1 underline text-center font-sans cursor-pointer'><Link to="/register">Create New Account - Register</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login