import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";

const buttonVariants = cva("inline-flex justify-center", {
  variants: {
    variant: {
      default: "w-full md:w-fit rounded-2xl bg-primary text-white disabled:bg-primary/60 hover:bg-primary/90",
      navbar: "font-semibold text-gray-700 transition-colors hover:text-blue-700",
    },
    weight: {
      default: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semibold",
      bold: "font-bold",
    },
    size: {
      default: "px-4 py-3",
      none: "",
      navbar: "px-4 py-2",
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
