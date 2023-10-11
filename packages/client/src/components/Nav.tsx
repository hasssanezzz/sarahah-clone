import { Link } from 'react-router-dom'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import Container from './Container'

export default function Nav() {
  return (
    <nav className="flex items-center w-full h-[80px]">
      <Container className='flex items-center justify-between'>
        <Link to="/" className='text-2xl font-bold'>Title</Link>


        <div className='flex items-center gap-3'>
          <Link to="/login" className='px-5 py-2 flex items-center gap-2 bg-white border-2 border-indigo-500 rounded-md text-indigo-500 font-bold hover:bg-indigo-400'>
            <span>Login</span>
          </Link>
          <Link to="/login" className='px-5 py-2 flex items-center gap-2 bg-indigo-500 border-2 border-indigo-500 rounded-md text-white font-bold hover:bg-indigo-600 hover:border-indigo-600'>
            <span><HiOutlineUserPlus size={25} /></span>
            <span>Register</span>
          </Link>
        </div>
      </Container>
    </nav>   
  )
}