import {
  PopoverAnchor as PopoverAnchorPrimitive,
  PopoverArrow as PopoverArrowPrimitive,
  PopoverArrowTip as PopoverArrowTipPrimitive,
  PopoverCloseTrigger as PopoverCloseTriggerPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverDescription as PopoverDescriptionPrimitive,
  PopoverIndicator as PopoverIndicatorPrimitive,
  PopoverPositioner as PopoverPositionerPrimitive,
  PopoverRoot as PopoverRootPrimitive,
  PopoverRootProvider as PopoverRootProviderPrimitive,
  PopoverTitle as PopoverTitlePrimitive,
  PopoverTrigger as PopoverTriggerPrimitive,
  usePopover,
} from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@packages/utils";
import type React from "react";

function Popover({
  children,
  ...props
}: React.ComponentProps<typeof PopoverRootPrimitive>) {
  return (
    <PopoverRootPrimitive data-slot="popover" {...props}>
      {children}
    </PopoverRootPrimitive>
  );
}

function PopoverTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverTriggerPrimitive>) {
  return (
    <PopoverTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="popover-trigger"
      {...props}
    >
      {children}
    </PopoverTriggerPrimitive>
  );
}

function PopoverPositioner({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPositionerPrimitive>) {
  return (
    <PopoverPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="popover-positioner"
      {...props}
    />
  );
}

function PopoverContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverContentPrimitive>) {
  return (
    <PopoverContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-72 rounded-md border p-4 shadow-md",
        className
      )}
      data-slot="popover-content"
      {...props}
    >
      {children}
    </PopoverContentPrimitive>
  );
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverTitlePrimitive>) {
  return (
    <PopoverTitlePrimitive
      className={cn("text-foreground text-sm font-semibold", className)}
      data-slot="popover-title"
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof PopoverDescriptionPrimitive>) {
  return (
    <PopoverDescriptionPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="popover-description"
      {...props}
    />
  );
}

function PopoverIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverIndicatorPrimitive>) {
  return (
    <PopoverIndicatorPrimitive
      className={cn("ml-2", className)}
      data-slot="popover-indicator"
      {...props}
    >
      {children}
    </PopoverIndicatorPrimitive>
  );
}

function PopoverCloseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverCloseTriggerPrimitive>) {
  return (
    <PopoverCloseTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 px-2",
        className
      )}
      data-slot="popover-close-trigger"
      {...props}
    >
      {children || "Close"}
    </PopoverCloseTriggerPrimitive>
  );
}

function PopoverAnchor({
  className,
  ...props
}: React.ComponentProps<typeof PopoverAnchorPrimitive>) {
  return (
    <PopoverAnchorPrimitive
      className={cn("", className)}
      data-slot="popover-anchor"
      {...props}
    />
  );
}

function PopoverArrow({
  className,
  ...props
}: React.ComponentProps<typeof PopoverArrowPrimitive>) {
  return (
    <PopoverArrowPrimitive
      className={cn("fill-popover", className)}
      data-slot="popover-arrow"
      {...props}
    />
  );
}

function PopoverArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof PopoverArrowTipPrimitive>) {
  return (
    <PopoverArrowTipPrimitive
      className={cn("fill-popover", className)}
      data-slot="popover-arrow-tip"
      {...props}
    />
  );
}

function PopoverPortal({ ...props }: React.ComponentProps<typeof Portal>) {
  return <Portal data-slot="popover-portal" {...props} />;
}

function PopoverRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof PopoverRootProviderPrimitive>) {
  return (
    <PopoverRootProviderPrimitive data-slot="popover-root-provider" {...props}>
      {children}
    </PopoverRootProviderPrimitive>
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverIndicator,
  PopoverCloseTrigger,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverPortal,
  PopoverRootProvider,
  usePopover,
};
