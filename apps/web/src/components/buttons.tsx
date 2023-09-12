import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";

const buttonVariants = cva("inline-flex justify-center", {
  variants: {
    variant: {
      default: "w-full md:w-fit rounded-2xl bg-primary text-white disabled:bg-primary/60 hover:bg-primary/90",
      underline: "underline text-primary",
      ghost: "text-primary",
    },
    weight: {
      default: "font-semibold",
      medium: "font-medium",
      bold: "font-bold",
    },
    size: {
      none: "",
      default: "px-4 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  unstyled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, unstyled, weight, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={clsx(unstyled ? className : buttonVariants({ weight, variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
