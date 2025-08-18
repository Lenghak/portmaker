import {
  HoverCardArrow as HoverCardArrowPrimitive,
  HoverCardArrowTip as HoverCardArrowTipPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPositioner as HoverCardPositionerPrimitive,
  HoverCardRoot as HoverCardRootPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
} from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@packages/utils";
import type React from "react";

function HoverCard({
  children,
  ...props
}: React.ComponentProps<typeof HoverCardRootPrimitive>) {
  return (
    <HoverCardRootPrimitive data-slot="hover-card" {...props}>
      {children}
    </HoverCardRootPrimitive>
  );
}

function HoverCardTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof HoverCardTriggerPrimitive>) {
  return (
    <HoverCardTriggerPrimitive
      className={cn("inline-flex", className)}
      data-slot="hover-card-trigger"
      {...props}
    >
      {children}
    </HoverCardTriggerPrimitive>
  );
}

function HoverCardPositioner({
  className,
  ...props
}: React.ComponentProps<typeof HoverCardPositionerPrimitive>) {
  return (
    <HoverCardPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="hover-card-positioner"
      {...props}
    />
  );
}

function HoverCardContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof HoverCardContentPrimitive>) {
  return (
    <HoverCardContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-64 rounded-md border p-4 shadow-md",
        className
      )}
      data-slot="hover-card-content"
      {...props}
    >
      {children}
    </HoverCardContentPrimitive>
  );
}

function HoverCardArrow({
  className,
  ...props
}: React.ComponentProps<typeof HoverCardArrowPrimitive>) {
  return (
    <HoverCardArrowPrimitive
      className={cn("fill-popover", className)}
      data-slot="hover-card-arrow"
      {...props}
    />
  );
}

function HoverCardArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof HoverCardArrowTipPrimitive>) {
  return (
    <HoverCardArrowTipPrimitive
      className={cn("fill-popover", className)}
      data-slot="hover-card-arrow-tip"
      {...props}
    />
  );
}

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardPositioner,
  HoverCardContent,
  HoverCardArrow,
  HoverCardArrowTip,
  Portal,
};
