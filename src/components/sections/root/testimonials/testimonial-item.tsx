"use client"
import clsx from "clsx";

interface TestimonialItemProps {
  containerClassName: string
  item: {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    comment: string;
  }
}
export const TestimonialItem = ({ containerClassName, item }: TestimonialItemProps) => {
  return (
    <div className={clsx(
      "relative px-14 pt-11 pb-14 md:min-h-[340px] lg:min-h-auto after:absolute after:bottom-0 after:right-0 after:w-screen after:h-0.5 after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
      containerClassName
    )}>
      <blockquote className="h6 mb-8 text-p4 max-lg:min-h-[120px]">
        {item.comment}
      </blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 p-1.5 size-20 shrink-0 rounded-half border-2 border-s2 animate-pulse">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
         /> 
        </div>
        <div>
          <h4 className="mb-0.5 body-2 text-p1">
            {item.name}
          </h4>
          <p className="small-compact uppercase">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  )
}
