"use client"
import clsx from "clsx"
import { Element } from "react-scroll"
import { Button } from "@/components/ui/button"
import { details, features } from "@/constants"

export const FeaturesSection = () => {
  return (
    <section>
      <Element name="features">
        <div className="container px-0! border-2 border-s3 rounded-7xl max-md:border-none max-md:rounded-none overflow-hidden">
          <div className="relative flex lg:flex-wrap max-lg:flex-col flex-wrap max-lg:gap-5 md:g7">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={clsx(
                  "relative md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320 overflow-hidden",
                  index === 1 && "bg-s2/80"
                )}
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex flex-col justify-center items-center animate-bounce [animation-duration:2s]">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="caption mb-5 max-md:mb-6">
                    {feature.caption}
                  </p>
                  <h2 className="max-w-400 mb-7 h4 lg:h2 text-p4 max-md:mb-6 max-md:h5">
                    {feature.title}
                  </h2>
                  <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                    {feature.text}
                  </p>
                  <Button icon={feature.button.icon} containerClassName="max-w-[280px]">
                    {feature.button.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <ul className="relative max-md:hidden flex justify-around grow px-[5%] border-2 border-s3 rounded-bl-7xl rounded-br-7xl">
              <div className="absolute bg-s3/20 top-[42%] -translate-y-[42%] left-0 right-0 w-full h-px" />
              {details.map(({ id, title, icon }) => (
                <li
                  key={id}
                  className="relative pt-16 px-4 pb-14"
                >
                  <div className="absolute top-0 bottom-0 left-1/2 w-px h-full bg-s3/20" />
                  <div className="flex justify-center items-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17-20 object-contain z-20"
                   /> 
                  </div>
                  <div className="relative mx-auto max-w-36 z-2">
                    <h3 className="base-small text-center uppercase">
                      {title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}