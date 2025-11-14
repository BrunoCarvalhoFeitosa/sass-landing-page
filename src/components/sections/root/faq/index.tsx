"use client"
import { faq } from "@/constants"
import { Element } from "react-scroll"
import { FaqItem } from "./faq-item"

export const FaqSection = () => {
  const halfLength = Math.floor(faq.length / 2)

  return (
    <section>
      <Element name="faq">
        <div className="container max-xl:px-10! relative py-28 z-2">
          <div className="">
            <h3 className="mb-7 max-lg:mx-auto h3 max-md:h5 max-w-[600px] max-lg:max-w-xl max-lg:text-center text-p4">
              Curiosity didn't kill the cat, it gave ir answers.
            </h3>
            <p className="body-1 max-lg:mx-auto max-lg:max-w-xl max-lg:text-center">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>
          <div className="absolute top-0 left-[calc(50%-1px)] faq-line_after w-0.5 h-full max-lg:hidden bg-s2 z-1" />
        </div>
        <div className="faq-glow_before relative border-2 border-s2 bg-s1 z-2">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] flex justify-center items-center size-20 border-2 border-s2 bg-s1">
              <img
                src="/svgs/faq-logo.svg"
                alt="Faq logo"
                className="sisze-1/2"
              />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map(({ id, answer, question }, index) => (
                <FaqItem
                  key={id}
                  id={id}
                  answer={answer}
                  question={question}
                  index={index}
                />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map(({ id, answer, question }, index) => (
                <FaqItem
                  key={id}
                  id={id}
                  answer={answer}
                  question={question}
                  index={halfLength + index}
                />
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-[calc(50%-1px)] w-0.5 h-full faq-line_after bg-s2 max-lg:hidden block -z-1" />
        </div>
      </Element>
    </section>
  )
}