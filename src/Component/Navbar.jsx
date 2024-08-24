import { useContext } from "react"
import useAuth from "../Provider/useAuth"
import { AuthContext } from "../Provider/AuthProvider"
import { Link } from "react-router-dom"

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
      <div className='navbar bg-base-100 border-2 mt-5 border-purple-400 rounded-lg shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <div className='flex gap-2 items-center'>
            <img className='w-auto h-7' src='' alt='' />
            <span className='font-bold text-xl'>Work<span className="text-purple-400">Finder</span></span>
          </div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
             <Link to={'/'}> <div>Home</div></Link>
            </li>
  
            {!user && <li>
             <Link to={'/login'}> <div>Login</div></Link>
            </li>}
          </ul>
  
         {user &&  <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title={user?.displayName}>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to={'/add-job'} className='justify-between'>Add Job</Link >
              </li>
              <li>
                <div>My Posted Jobs</div>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>

         }
        </div>
      </div>
    )
  }
  
  export default Navbar