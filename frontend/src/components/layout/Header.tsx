import React from 'react'
import { Button } from '../base/Button'
import logout from '../../assets/logout.png'
function Header() {
  return (
    <>
    <section className="w-full h-20 bg-white flex items-center justify-between px-5">
        <div className="w-fit h-full p-2">
            <h2 className="text-lg text">
                Welcome, Saravanankodi
            </h2>
            <p className="text-lg text">
                CEO
            </p>
        </div>
        <Button variant={'secoundary'}>
            <img src={logout} alt="" />
            Logout
        </Button>
    </section>
    </>
  )
}

export default Header