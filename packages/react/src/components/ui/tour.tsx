import {
  TourActions as TourActionsPrimitive,
  TourActionTrigger as TourActionTriggerPrimitive,
  TourArrow as TourArrowPrimitive,
  TourArrowTip as TourArrowTipPrimitive,
  TourBackdrop as TourBackdropPrimitive,
  TourCloseTrigger as TourCloseTriggerPrimitive,
  TourContent as TourContentPrimitive,
  TourContext as TourContextPrimitive,
  TourControl as TourControlPrimitive,
  TourDescription as TourDescriptionPrimitive,
  TourPositioner as TourPositionerPrimitive,
  TourProgressText as TourProgressTextPrimitive,
  TourRoot as TourRootPrimitive,
  TourSpotlight as TourSpotlightPrimitive,
  TourTitle as TourTitlePrimitive,
  useTour,
  useTourContext,
} from "@ark-ui/react/tour";
import { cn } from "@packages/utils";
import type React from "react";

function TourRoot({
  ...props
}: React.ComponentProps<typeof TourRootPrimitive>) {
  return <TourRootPrimitive data-slot="tour-root" {...props} />;
}

function TourActionTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TourActionTriggerPrimitive>) {
  return (
    <TourActionTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="tour-action-trigger"
      {...props}
    />
  );
}

function TourArrow({
  className,
  ...props
}: React.ComponentProps<typeof TourArrowPrimitive>) {
  return (
    <TourArrowPrimitive
      className={cn("fill-popover", className)}
      data-slot="tour-arrow"
      {...props}
    />
  );
}

function TourArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof TourArrowTipPrimitive>) {
  return (
    <TourArrowTipPrimitive
      className={cn("fill-popover", className)}
      data-slot="tour-arrow-tip"
      {...props}
    />
  );
}

function TourBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof TourBackdropPrimitive>) {
  return (
    <TourBackdropPrimitive
      className={cn(
        "bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm",
        className
      )}
      data-slot="tour-backdrop"
      {...props}
    />
  );
}

function TourCloseTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TourCloseTriggerPrimitive>) {
  return (
    <TourCloseTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
        className
      )}
      data-slot="tour-close-trigger"
      {...props}
    />
  );
}

function TourContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TourContentPrimitive>) {
  return (
    <TourContentPrimitive
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      data-slot="tour-content"
      {...props}
    >
      {children}
    </TourContentPrimitive>
  );
}

function TourControl({
  className,
  ...props
}: React.ComponentProps<typeof TourControlPrimitive>) {
  return (
    <TourControlPrimitive
      className={cn("flex items-center justify-between", className)}
      data-slot="tour-control"
      {...props}
    />
  );
}

function TourDescription({
  className,
  ...props
}: React.ComponentProps<typeof TourDescriptionPrimitive>) {
  return (
    <TourDescriptionPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="tour-description"
      {...props}
    />
  );
}

function TourPositioner({
  className,
  ...props
}: React.ComponentProps<typeof TourPositionerPrimitive>) {
  return (
    <TourPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="tour-positioner"
      {...props}
    />
  );
}

function TourProgressText({
  className,
  ...props
}: React.ComponentProps<typeof TourProgressTextPrimitive>) {
  return (
    <TourProgressTextPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="tour-progress-text"
      {...props}
    />
  );
}

function TourSpotlight({
  className,
  ...props
}: React.ComponentProps<typeof TourSpotlightPrimitive>) {
  return (
    <TourSpotlightPrimitive
      className={cn(
        "border-primary bg-primary/10 absolute rounded-md border-2",
        className
      )}
      data-slot="tour-spotlight"
      {...props}
    />
  );
}

function TourTitle({
  className,
  ...props
}: React.ComponentProps<typeof TourTitlePrimitive>) {
  return (
    <TourTitlePrimitive
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      data-slot="tour-title"
      {...props}
    />
  );
}

function TourContext({
  children,
  ...props
}: React.ComponentProps<typeof TourContextPrimitive>) {
  return (
    <TourContextPrimitive data-slot="tour-context" {...props}>
      {children}
    </TourContextPrimitive>
  );
}

function TourActions({
  children,
  ...props
}: React.ComponentProps<typeof TourActionsPrimitive>) {
  return (
    <TourActionsPrimitive data-slot="tour-actions" {...props}>
      {children}
    </TourActionsPrimitive>
  );
}

export {
  TourRoot,
  TourActionTrigger,
  TourArrow,
  TourArrowTip,
  TourBackdrop,
  TourCloseTrigger,
  TourContent,
  TourControl,
  TourDescription,
  TourPositioner,
  TourProgressText,
  TourSpotlight,
  TourTitle,
  TourContext,
  TourActions,
  useTour,
  useTourContext,
};
