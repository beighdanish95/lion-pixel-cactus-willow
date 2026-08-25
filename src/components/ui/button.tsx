import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-[opacity,transform,box-shadow,background-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-ink hover:bg-accent-hover focus-visible:ring-accent hover:shadow-[0_0_28px_0_color-mix(in_oklab,var(--color-accent)_50%,transparent)]",
        secondary: "bg-plum text-on-primary hover:opacity-90 focus-visible:ring-plum",
        solid: "bg-primary text-on-primary hover:bg-primary-dark focus-visible:ring-primary",
        outline:
          "bg-transparent text-on-primary ring-1 ring-on-primary/40 hover:bg-on-primary/10 focus-visible:ring-on-primary",
        ghost: "bg-transparent text-ink hover:bg-paper focus-visible:ring-primary",
        ink: "bg-ink text-on-primary hover:opacity-90 focus-visible:ring-ink",
      },
      size: {
        sm: "h-11 rounded-pill px-4 text-sm",
        md: "h-12 rounded-pill px-5 text-sm",
        lg: "h-14 rounded-pill px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
