"use client"
import Link from "next/link"
import { socials } from "@/constants"

export const Footer = () => {
  return (
    <footer className="container px-10! py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <ul className="flex items-center gap-8">
            <li className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Terms of Use
            </li>
          </ul>
        </div>
        <div>
          <ul className="max-lg:mt-5 flex flex-1 justify-center gap-3 md:justify-end">
            {socials.map(({ id, title, icon, url }) => (
              <li key={id}>
                <Link href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-4 object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
