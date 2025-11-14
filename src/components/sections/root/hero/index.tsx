"use client"
import { Element, Link as LinkScroll } from "react-scroll"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
    <section className="relative pt-40 mb-60 max-lg:pt-40 max-lg:pb-36 max-md:pt-40 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="px-4 lg:px-0 relative max-w-512 max-md:max-w-388 z-10">
            <div className="ml-4 caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 text-5xl lg:text-7xl font-bold text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:leading-12">
              Amazingly incredible
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be and easy to use, quick to learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/svgs/zap.svg" containerClassName="min-w-[280px]">
                Try it now
              </Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-44 left-[calc(50%-340px)] w-1230 pointer-events-auto hero-img_res">
            <img
              src="/images/hero-image.png"
              alt="hero image"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  )
}