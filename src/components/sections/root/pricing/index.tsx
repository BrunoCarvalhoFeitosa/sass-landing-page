"use client"
import { useState } from "react"
import clsx from "clsx"
import CountUp from "react-countup"
import { Element } from "react-scroll"
import { plans } from "@/constants"
import { Button } from "@/components/ui/button"

export const PricingSection = () => {
  const [monthly, setMonthly] = useState<boolean>(false)

  return (
    <section>
      <Element name="prices">
        <div className="container">
          <div className="pt-28 max-md:pt-16 pb-40 max-md:pb-32 mx-auto max-w-960 max-xl:max-w-4xl max-lg:border-none pricing-head_before relative border-l border-r border-s2 bg-s1/50">
            <div>
              <h3 className="h3 max-lg:h4 max-md:h5 relative mx-auto mb-14 max-md:mb-11 max-w-lg max-sm:max-w-sm text-center text-p4">
                Flexible pricing for teams of all sizes
              </h3>
            </div>
            <div className="relative mx-auto p-2 flex w-[375px] max-md:w-[310px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 backdrop-blur-[6px] z-4">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div className={clsx(
                "absolute top-2 left-2 w-[calc(50%-8px)] h-[calc(100%-16px)] g4 rounded-14 before:h-100 before:pricing-head_btn_before shadow-400 overflow-hidden transition-transform duration-500",
                !monthly && "translate-x-full"
              )} />
            </div>
            <div className="pricing-bg">
              <img
                src="/svgs/bg-outlines.svg"
                width={960}
                height={380}
                alt="Outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="Outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          <div className="scroll-hide relative max-xl:pt-6 -mt-12 flex flex-col lg:flex-row justify-center items-start max-lg:gap-16 max-xl:overflow-auto z-2">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="relative mx-auto p-7 border-2 pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even max-xl:min-w-80 max-lg:rounded-3xl w-[60%] xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute top-0 left-0 right-0 h-330 rounded-tl-3xl rounded-tr-3xl z-1" />
                )}
                <div className={clsx(
                  "absolute left-0 right-0 flex justify-center items-center z-2",
                  index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                )}>
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>
                <div className={clsx(
                  "relative flex flex-col items-center",
                  index === 1 ? "pt-24" : "pt-12"
                )}>
                  <div className={clsx(
                    "relative mx-auto mb-6 px-4 py-1.5 small-2 rounded-20 uppercase border-2 z-2",
                    index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                  )}>
                    {plan.title}
                  </div>
                  <div className="relative flex justify-center items-center z-2">
                    <div className={clsx(
                      "h-num flex items-start",
                      index === 1 ? "text-p3" : "text-p4"
                    )}>
                      $ <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="relative small-1 top-3 ml-1 uppercase">
                      /mo
                    </div>
                  </div>
                </div>
                <div className={clsx(
                  "body-1 relative mb-10 pb-9 w-full border-b-s2 text-center text-p4 z-2",
                  index === 1 && "pt-6 border-b"
                )}>
                  {plan.caption}
                </div>
                <div>
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative flex items-center gap-5"
                      >
                        <img
                          src="/images/check.png"
                          alt="Check"
                          className="size-10 object-contain"
                        />
                        <p className="flex-1">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 w-full flex justify-center">
                  <Button icon={plan.icon}>
                    Get Started
                  </Button>
                </div>
                {index === 1 && (
                  <p className="mt-9 small-compact text-center text-p3 before:mx-2.5 after:mx-2.5 before:content-['-'] after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}
