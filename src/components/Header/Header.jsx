import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const navLinks=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find a doctor'
    },
    {
        path:'/service',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    }
]
const Header = () => {
    const headerRef= useRef(null);
    const menuRef= useRef(null);
    const handleStickyHeader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>60|| document.documentElement.scrollTop>60){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    const toggleMenu = ()=>menuRef.current.classList.toggle('show_me')
    useEffect(()=>{
        handleStickyHeader()
        return ()=>{
            return window.removeEventListener('scroll',handleStickyHeader)
        }
    })
  return (
    <header className="header flex items-center" ref={headerRef}>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* =========== Logo =============== */}
                <div>
                    <img src={logo} alt="Website logo" />
                </div>
                {/* =========== Menu ============== */}
                <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-center gap-[2.7rem]">
                        {navLinks.map((item,index)=>(
                            <NavLink className={navClass=>navClass.isActive?'text-primaryColor text-[16px] leading-7 font-[600]':"text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"} to={item.path} key={index}>
                                {item.display}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* ============ Right nav =========== */}
                <div className="flex items-center gap-4">
                    <div>
                        <Link className='hidden' to='/'>
                            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                <img src={userImg} alt="Profile Picture"  className='w-full rounded-full'/>
                            </figure>
                        </Link>
                    </div>
                    <Link to='/login'>
                            <button className=' bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] justify-center items-center flex rounded-[50px]'>Login</button>
                    </Link>
                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu/>
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header