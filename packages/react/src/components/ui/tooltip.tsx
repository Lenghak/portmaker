import {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipArrowTip as TooltipArrowTipPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipContext as TooltipContextPrimitive,
  TooltipPositioner as TooltipPositionerPrimitive,
  TooltipRoot as TooltipRootPrimitive,
  TooltipRootProvider as TooltipRootProviderPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
  useTooltip,
} from "@ark-ui/react/tooltip";
import { cn } from "@packages/utils";
import type React from "react";

function TooltipProvider({
  openDelay = 0,
  ...props
}: React.ComponentProps<typeof TooltipRootPrimitive>) {
  return (
    <TooltipRootPrimitive
      data-slot="tooltip-provider"
      openDelay={openDelay}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipRootPrimitive>) {
  return (
    <TooltipProvider>
      <TooltipRootPrimitive data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipTriggerPrimitive>) {
  return <TooltipTriggerPrimitive data-slot="tooltip-trigger" {...props} />;
}

function TooltipPositioner({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPositionerPrimitive>) {
  return (
    <TooltipPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="tooltip-positioner"
      {...props}
    />
  );
}

function TooltipContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TooltipContentPrimitive>) {
  return (
    <TooltipContentPrimitive
      className={cn(
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin) animate-in bg-popover text-popover-foreground data-[state=closed]:animate-out z-50 w-fit text-balance rounded-md px-3 py-1.5 text-xs",
        className
      )}
      data-slot="tooltip-content"
      {...props}
    >
      {children}
    </TooltipContentPrimitive>
  );
}

function TooltipArrow({
  className,
  ...props
}: React.ComponentProps<typeof TooltipArrowPrimitive>) {
  return (
    <TooltipArrowPrimitive
      className={cn("bg-popover fill-popover z-50 size-2.5", className)}
      data-slot="tooltip-arrow"
      {...props}
    />
  );
}

function TooltipArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof TooltipArrowTipPrimitive>) {
  return (
    <TooltipArrowTipPrimitive
      className={cn(
        "bg-popover fill-popover size-2.5 rotate-45 rounded-[2px]",
        className
      )}
      data-slot="tooltip-arrow-tip"
      {...props}
    />
  );
}

function TooltipContext({
  children,
  ...props
}: React.ComponentProps<typeof TooltipContextPrimitive>) {
  return (
    <TooltipContextPrimitive data-slot="tooltip-context" {...props}>
      {children}
    </TooltipContextPrimitive>
  );
}

function TooltipRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof TooltipRootProviderPrimitive>) {
  return (
    <TooltipRootProviderPrimitive data-slot="tooltip-root-provider" {...props}>
      {children}
    </TooltipRootProviderPrimitive>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContext,
  TooltipProvider,
  TooltipRootProvider,
  useTooltip,
};
