"use client"
import { useEffect, useState } from "react"
import { Link as LinkScroll } from "react-scroll"
import { clsx } from "clsx"
import Link from "next/link"
import { Logo } from "../icons/logo"
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"

type NavLinkProps = {
  title: string
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const NavLink = ({ title }: NavLinkProps) => (
    <LinkScroll
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="text-xl md:text-4xl lg:text-lg font-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4"
      onClick={() => setIsOpen(false)}
    >
      {title}
    </LinkScroll>
  )

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32)
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={clsx(
      "fixed top-0 left-0 py-4 w-full z-50 transition-all duration-500",
      hasScrolled && "py-2 bg-s2 backdrop-blur-3xl"
    )}>
      <div className="container flex items-center h-14 max-lg:px-5!">
        <div className="lg:hidden flex-1 cursor-pointer z-2">
          <Link href="/">
            <Logo width="165" height="55" />
          </Link>
        </div>
        <div className={clsx(
          "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
          isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
        )}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:my-auto max-lg:z-2">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot animate-ping [animation-duration:1s]" />
                  <NavLink title="prices" />
                </li>
                <li className="nav-logo">
                  <Link href="/">
                    <Logo width="165" height="55" />
                  </Link>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot animate-ping [animation-duration:1s]" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="block lg:hidden absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/svgs/bg-outlines.svg"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden relative z-10">
          <button
            type="button"
            className="flex justify-center items-center size-10 border-2 border-s4/25 rounded-full cursor-pointer"
            onClick={handleOpen}
          >
            {isOpen ? (
              <RiCloseFill className="size-5" />
            ) : (
              <RiMenu3Fill className="size-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
