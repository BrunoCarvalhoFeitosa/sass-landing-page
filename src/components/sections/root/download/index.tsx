"use client"
import { Element } from "react-scroll"
import Link from "next/link"
import { Marker } from "@/components/ui/marker"
import { links, logos } from "@/constants"

export const DownloadSection = () => {
  return (
    <section>
      <Element name="download">
        <div className="container relative pt-24 pb-32 max-lg:pb-24 max-md:py-16 g7 rounded-4xl border-2 border-s3">
          <div className="flex max-xl:flex-col max-xl:gap-y-10 md:items-center">
            <div className="relative mr-6 xl:w-[1316px]">
              <div className="max-xl:flex max-xl:justify-center mb-10">
                <img
                  src="/svgs/xora.svg"
                  alt="Xora"
                  width={160}
                  height={55}
                />
              </div>
              <div className="max-xl:text-center">
                <p className="body-1 mb-10 max-w-md">
                  Try it now for free on iOS, Android, PC, Web - whatever your flavor, we&apos;ve got you covered.
                </p>
                <ul className="flex flex-wrap max-xl:justify-center items-center gap-3">
                  {links.map(({ id, url, icon }) => (
                    <li
                      key={id}
                      className="relative download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    >
                      <Link
                        href={url}
                        className="relative flex justify-center items-center size-16 md:size-22 rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500 download_tech-icon_before"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src="/svgs/lines.svg"
                          alt="Lines"
                          className="absolute size-13-20 object-contain"
                        />
                        <span className="download_tech-icon">
                          {icon}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <div className="relative p-6 download_preview-before download_preview-after rounded-40 border-2 border-s5">
                <div className="relative pt-14 px-6 pb-6 rounded-3xl bg-s1">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    src="/images/screen.jpg"
                    alt="Screen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="lg:mt-24 flex flex-col md:flex-row justify-center max-lg:gap-y-10">
              {logos.map(({ id, url, width, height, title }) => (
                <li key={id} className="mx-10">
                  <img
                    src={url}
                    width={width}
                    height={height}
                    alt={title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}