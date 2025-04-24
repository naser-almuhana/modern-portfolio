import { ComponentProps } from "react"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl uppercase transition-all disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer h-11 px-6 border border-red-orange-500 duration-500 relative",
  {
    variants: {
      variant: {
        default: "bg-red-orange-500 text-white hover:bg-red-orange-500/90",
        outline: "hover:bg-red-orange-500 hover:text-white",
        text: "h-auto px-0 justify-start border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants, type ButtonProps }
