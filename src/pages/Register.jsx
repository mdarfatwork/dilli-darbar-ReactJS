import React, { useEffect, useState } from 'react'
import BgHeader from '../components/reused/BgHeader'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Register - Dilli Darbar";
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="pt-20 sm:pt-24 md:pt-30 w-full">
      <BgHeader data="Register"/>
      <div className="w-[90%] 2xl:w-[65%] mx-auto">
        <div className="w-full py-16 flex justify-center">
          <form onSubmit={handleSubmit} className="bg-red-300 p-6 rounded-md flex flex-col gap-6">
            <h3 className='text-center text-2xl text-bold'>Register</h3>
            <input type="email" placeholder='Email' className='outline-none bg-transparent text-black border-b border-gray-500 p-1 font-sans placeholder:text-black w-72' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className='outline-none bg-transparent text-black border-b border-gray-500 p-1 font-sans placeholder:text-black w-72' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='mx-auto bg-red-500 text-white p-2 rounded-md cursor-pointer'>Submit</button>
            <span className='pt-1 underline text-center font-sans cursor-pointer'><Link to="/login">Existing user? Login</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register