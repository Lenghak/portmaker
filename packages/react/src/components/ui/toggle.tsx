import {
  ToggleIndicator as ToggleIndicatorPrimitive,
  ToggleRoot as ToggleRootPrimitive,
} from "@ark-ui/react/toggle";
import { cn } from "@packages/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleRootPrimitive> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleRootPrimitive
      className={cn(toggleVariants({ variant, size, className }))}
      data-slot="toggle"
      {...props}
    />
  );
}

function ToggleIndicator({
  className,
  children,
  fallback,
  ...props
}: React.ComponentProps<typeof ToggleIndicatorPrimitive>) {
  return (
    <ToggleIndicatorPrimitive
      className={cn("flex items-center justify-center", className)}
      data-slot="toggle-indicator"
      fallback={fallback}
      {...props}
    >
      {children}
    </ToggleIndicatorPrimitive>
  );
}

export { Toggle, ToggleIndicator, toggleVariants };
