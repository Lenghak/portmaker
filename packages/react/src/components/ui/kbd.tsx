import { cn } from "@packages/utils";
import type { ComponentPropsWithRef } from "react";

export function Kbd({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-card shadow-xs rounded-sm border border-b-2 p-1.5 py-0.5 text-xs",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
