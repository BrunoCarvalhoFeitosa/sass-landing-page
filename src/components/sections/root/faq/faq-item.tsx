"use client"
import { useState } from "react"
import { SlideDown } from "react-slidedown"
import clsx from "clsx"
import "react-slidedown/lib/slidedown.css"

interface FaqItemProps {
  id: string
  answer: string
  question: string
  index: number
}

export const FaqItem = ({ id, answer, question, index }: FaqItemProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = activeId === id

  return (
    <div className="relative mb-16 z-2">
      <div
        className="group relative px-7 flex justify-between items-center gap-10 cursor-pointer"
        onClick={() => {
          setActiveId(activeId === id ? null : id)
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div className={clsx(
            "h6 text-p4 transition-colors duration-500 max-md:flex max-md:justify-between max-md:items-center max-md:min-h-20",
            active && "max-lg:text-p1"
          )}>
            {question}
          </div>
        </div>
        <div className={clsx(
          "faq-icon relative flex justify-center items-center size-12 border-2 border-s2 rounded-full shadow-400 transition-all duration-500 group-hover:border-s4",
          active && "before:bg-p1 after:rotate-90 after:bg-p1"
        )}>
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>
      <SlideDown>
        {activeId === id && (
          <div className="body-3 py-3.5 px-7">
            {answer}
          </div>
        )}
      </SlideDown>
      <div className={clsx(
        "absolute -top-7 -bottom-7 left-0 right-0 opacity-0 rounded-3xl transition-opacity duration-500 g5 -z-1",
        active && "opacity-100"
      )}>
        <div className="absolute inset-0.5 rounded-3xl -z-1 g4" />
        <div className="absolute top-0 left-8 w-40 h-0.5 bg-p1" />
      </div>
    </div>
  )
}