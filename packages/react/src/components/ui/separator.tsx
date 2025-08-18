import { ark } from "@ark-ui/react/factory";
import { cn } from "@packages/utils";
import type React from "react";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof ark.hr> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}) {
  const Component = orientation === "vertical" ? ark.div : ark.hr;

  return (
    <Component
      data-slot="separator"
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
        className
      )}
      data-orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
