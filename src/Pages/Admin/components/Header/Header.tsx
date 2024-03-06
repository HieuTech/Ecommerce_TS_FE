import React from 'react'
import "./Header.scss"
export default function Header() {

    const handleLogout = () =>{
        localStorage.removeItem("admin_token")
        window.location.href = "/admin/login"
    }
  return (
    <div className='header-admin'>
      <div className="left">Hi Admin</div>
      <div className="right">
        <button className='btn btn-logout' 
        onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
