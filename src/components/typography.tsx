import clsx from "clsx";

export const Typography = {
  h1: ({ className, ...props }: React.ComponentPropsWithoutRef<"h1">) => {
    return <h1 className={clsx("text-6xl", className)} {...props} />;
  },
};
