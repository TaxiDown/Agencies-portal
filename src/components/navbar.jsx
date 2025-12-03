'use client'
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import { House, Menu, X } from "lucide-react"
import LanguageSwitcher from './switcher';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';


export default function Navbar({ role }) {
  const dict = useTranslations('lang');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLogedOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter()
  const name = process.env.NEXT_PUBLIC_NAME

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/validate_token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (response.status === 200) {
          const data = await response.json();
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          //  router.push("/unauthorized")
        }
      } catch (err) {
        setLoggedIn(false);
      }
    };

    fetchData();
  });

  const logout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (response.ok) {
        setLogedOut(true);
        setTimeout(() => {
          setLogedOut(false);
          window.location.reload();
        }, 3000);
      }
    } catch (err) {
    }
  }

  return (
    <>{
      loggedOut &&
      <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-black/50 h-full w-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full h-30 flex items-center justify-center">
          <h2 className="text-green-600 text-xl font-semibold mb-2">{dict("LogoutSuccessful")}</h2>
        </div>
      </div>
    }
      <div className={`text-black lg:h-13  flex justify-between  items-center md:pl-10 md:pr-10 pr-3 pl-3 z-1000 ${isMobileMenuOpen ? "bg-white text-black" : "bg-transperent shadow-sm"}  ${isScrolled? "backdrop-blur-md": "backdrop-blur-[2px]"} fixed w-full top-0 left-0 h-15`}>
        <Link href={`/`} className={`${isScrolled ? "text-black": "text-white/90"} md:text-[19px] text-[15px] font-medium lg:font-bold hover:text-yellow-600 hover:scale-105`}>
          <h3 className={`text-[18px] md:text-[20px] font-bold  ${isMobileMenuOpen ? "text-black hover:text-yellow-600": ""}`}>{name}</h3>
        </Link>

{/*        <div className="flex gap-4 text-sm items-center ">
          <Link
            href={`/`}
            className="text-black/60 font-medium hover:text-black transition-colors duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict("home")}
          </Link>
          <Link
            href={`/`}
            className="text-black/60 font-medium hover:text-black transition-colors duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict("contact")}
          </Link>
        </div>*/}
        <div className="hidden sm:flex items-center gap-2 ">
          {loggedIn ? (
            <>

              <button
                onClick={logout}
                className="text-yellow-1000 text-sm md:text-[19px] font-medium lg:font-bold hover:text-yellow-600 hover:scale-105 cursor-pointer transition-all duration-200"
              >
                {dict("logoutTitle")}
              </button>
            </>
          ) :
            <div className="flex gap-6">
              <Link
                href={`/login`}
                className={`flex items-center  text-md font-medium lg:font-bold hover:text-yellow-600 transition-all duration-200 ${isScrolled ? "text-black": "text-white/90"}`}
              >
                {dict("loginTitle")}
              </Link>
              <Link
                href={`/`}
                className="bg-stone-900 text-white px-4 py-1 rounded-lg text-yellow-1000 text-md font-medium hover:scale-105 cursor-pointer transition-all duration-200"
              >
                {dict("request")}
              </Link>
            </div>}

        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-yellow-1000 hover:text-yellow-600 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-14 left-0 w-full bg-white backdrop-blur-md shadow-lg z-30">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {(role === 'Fleet manager' || role === 'Super fleet manager') ?
              <>
                <Link
                  href={`/`}
                  className="text-yellow-1000 text-base font-medium hover:text-yellow-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dict("bookings")}
                </Link>
                <Link
                  href={`/drivers`}
                  className="flex items-center text-yellow-1000 text-sm md:text-[19px] font-medium lg:font-bold hover:text-yellow-600 hover:scale-105 transition-all duration-200"
                >
                  {dict("drivers")}
                </Link>
              </>
              : <></>}
            {loggedIn ? (
              <>
                <button
                  onClick={() => {
                    logout()
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-yellow-1000 text-base font-medium hover:text-yellow-600 transition-colors duration-200 text-left py-2"
                >
                  {dict("logoutTitle")}
                </button>
              </>
            ) : <div className="flex flex-col gap-6">
            <Link
              href={`/login`}
              className={`flex items-center  text-md font-medium lg:font-bold hover:text-yellow-600 transition-all duration-200 "text-black"`}
            >
              {dict("loginTitle")}
            </Link>
            <Link
              href={`/`}
              className="bg-stone-900 text-white px-4 py-1 w-max rounded-lg text-yellow-1000 text-md font-medium hover:scale-105 cursor-pointer transition-all duration-200"
            >
              {dict("request")}
            </Link>
          </div>}
            <div className="pt-2 border-t border-yellow-1000/20">
            <LanguageSwitcher scrolled={true}/>
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black/20 z-20 top-14" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}