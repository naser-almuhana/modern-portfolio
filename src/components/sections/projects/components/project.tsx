import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { FC, MouseEventHandler } from "react"

interface ProjectProps {
  handleMouseMove: MouseEventHandler<HTMLAnchorElement> | undefined
  name: string
  image: StaticImageData
  handleMouseEnter: (image: StaticImageData) => void
  handleMouseLeave: MouseEventHandler<HTMLAnchorElement> | undefined
}

export const Project: FC<ProjectProps> = ({
  image,
  name,
  handleMouseMove,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Link
      href="/"
      className="border-border group/project relative isolate flex flex-col border-t border-dotted py-6 last:border-b md:py-8 lg:py-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        handleMouseEnter(image)
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="aspect-video md:hidden">
          <Image
            src={image}
            alt={`${image} image`}
            className="size-full object-cover"
          />
        </div>
        <div className="mt-8 flex items-center justify-between md:mt-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
          <div className="size-6 overflow-hidden">
            <div className="flex h-6 w-12 transition-transform duration-300 group-hover/project:-translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 -z-10 h-0 w-full bg-stone-300 transition-all duration-700 group-hover/project:h-full" />
    </Link>
  )
}
