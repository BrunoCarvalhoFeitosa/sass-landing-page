"use client"
import { TestimonialItem } from "./testimonial-item"
import { testimonials } from "@/constants"

export const TestimonialsSection = () => {
  const halfLength = Math.floor(testimonials.length / 2)

  return (
    <section className="relative py-24 md:py-28 lg:py-40 z-2">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative mr-20 lg:w-[360px] z-2">
          <p className="caption mb-5 max-md:mb-2.5">
            Wall of love
          </p>
          <h3 className="h3 max-md:h5 text-p4">
            Words from our fans
          </h3>
        </div>
        <div className="relative -my-12 -mr-3 flex lg:w-[1290px] items-start max-lg:static max-md:block testimonials_inner-after testimonials_inner-before">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"  
              />
            ))}
          </div>
          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"  
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}