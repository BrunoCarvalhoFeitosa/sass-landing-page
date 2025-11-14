"use client"
import { clsx } from "clsx"
import { Marker } from "../marker"

interface ButtonProps {
  children: React.ReactNode
  icon: string
  href?: string
  containerClassName?: string
  markerFill?: string
  onClick?: () => void
}

export const Button = ({ children, icon, href, containerClassName, markerFill, onClick }: ButtonProps) => {
  const Inner = () => (
    <>
      <span className="relative px-4 min-h-[60px] flex items-center rounded-2xl inner-before group-hover:before:opacity-100! overflow-hidden">
        <span className="absolute -left-px">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img src={icon} alt="" className="size-10 mr-5 object-contain z-10" />
        )}
        <span className="relative base-bold uppercase text-p1 z-2">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after group-hover:before:left-4! group-hover:before:opacity-40! group-hover:after:left-2/4! group-hover:after:opacity-40!" />
    </>
  )

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}>
      <Inner />
    </button>
  )
}