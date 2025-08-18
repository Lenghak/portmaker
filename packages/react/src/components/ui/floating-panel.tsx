import {
  FloatingPanelBody as FloatingPanelBodyPrimitive,
  FloatingPanelCloseTrigger as FloatingPanelCloseTriggerPrimitive,
  FloatingPanelContent as FloatingPanelContentPrimitive,
  FloatingPanelControl as FloatingPanelControlPrimitive,
  FloatingPanelDragTrigger as FloatingPanelDragTriggerPrimitive,
  FloatingPanelHeader as FloatingPanelHeaderPrimitive,
  FloatingPanelPositioner as FloatingPanelPositionerPrimitive,
  FloatingPanelResizeTrigger as FloatingPanelResizeTriggerPrimitive,
  FloatingPanelRoot as FloatingPanelRootPrimitive,
  FloatingPanelStageTrigger as FloatingPanelStageTriggerPrimitive,
  FloatingPanelTitle as FloatingPanelTitlePrimitive,
  FloatingPanelTrigger as FloatingPanelTriggerPrimitive,
} from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@packages/utils";
import { ArrowDownLeftIcon } from "@phosphor-icons/react/ArrowDownLeft";
import { ArrowsOutIcon } from "@phosphor-icons/react/ArrowsOut";
import { MinusIcon } from "@phosphor-icons/react/Minus";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function FloatingPanel({
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelRootPrimitive>) {
  return (
    <FloatingPanelRootPrimitive data-slot="floating-panel" {...props}>
      {children}
    </FloatingPanelRootPrimitive>
  );
}

function FloatingPanelTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelTriggerPrimitive>) {
  return (
    <FloatingPanelTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        className
      )}
      data-slot="floating-panel-trigger"
      {...props}
    >
      {children}
    </FloatingPanelTriggerPrimitive>
  );
}

function FloatingPanelPositioner({
  className,
  ...props
}: React.ComponentProps<typeof FloatingPanelPositionerPrimitive>) {
  return (
    <FloatingPanelPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="floating-panel-positioner"
      {...props}
    />
  );
}

function FloatingPanelContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelContentPrimitive>) {
  return (
    <FloatingPanelContentPrimitive
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 relative w-full max-w-md rounded-lg border p-0 shadow-lg outline-none",
        className
      )}
      data-slot="floating-panel-content"
      {...props}
    >
      {children}
    </FloatingPanelContentPrimitive>
  );
}

function FloatingPanelDragTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelDragTriggerPrimitive>) {
  return (
    <FloatingPanelDragTriggerPrimitive
      className={cn("cursor-move", className)}
      data-slot="floating-panel-drag-trigger"
      {...props}
    >
      {children}
    </FloatingPanelDragTriggerPrimitive>
  );
}

function FloatingPanelHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelHeaderPrimitive>) {
  return (
    <FloatingPanelHeaderPrimitive
      className={cn(
        "flex flex-col space-y-1.5 p-4 pb-2 text-center sm:text-left",
        className
      )}
      data-slot="floating-panel-header"
      {...props}
    >
      {children}
    </FloatingPanelHeaderPrimitive>
  );
}

function FloatingPanelTitle({
  className,
  ...props
}: React.ComponentProps<typeof FloatingPanelTitlePrimitive>) {
  return (
    <FloatingPanelTitlePrimitive
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      data-slot="floating-panel-title"
      {...props}
    />
  );
}

function FloatingPanelControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelControlPrimitive>) {
  return (
    <FloatingPanelControlPrimitive
      className={cn("flex items-center gap-1", className)}
      data-slot="floating-panel-control"
      {...props}
    >
      {children}
    </FloatingPanelControlPrimitive>
  );
}

function FloatingPanelStageTrigger({
  className,
  stage,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelStageTriggerPrimitive>) {
  return (
    <FloatingPanelStageTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="floating-panel-stage-trigger"
      stage={stage}
      {...props}
    >
      {children}
    </FloatingPanelStageTriggerPrimitive>
  );
}

function FloatingPanelCloseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelCloseTriggerPrimitive>) {
  return (
    <FloatingPanelCloseTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="floating-panel-close-trigger"
      {...props}
    >
      {children || <XIcon className="h-4 w-4" />}
    </FloatingPanelCloseTriggerPrimitive>
  );
}

function FloatingPanelBody({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FloatingPanelBodyPrimitive>) {
  return (
    <FloatingPanelBodyPrimitive
      className={cn("p-4 pt-0", className)}
      data-slot="floating-panel-body"
      {...props}
    >
      {children}
    </FloatingPanelBodyPrimitive>
  );
}

function FloatingPanelResizeTrigger({
  className,
  axis,
  ...props
}: React.ComponentProps<typeof FloatingPanelResizeTriggerPrimitive>) {
  return (
    <FloatingPanelResizeTriggerPrimitive
      className={cn(
        "absolute bg-transparent",
        // Position based on axis
        axis === "n" && "left-0 right-0 top-0 h-1 cursor-n-resize",
        axis === "e" && "bottom-0 right-0 top-0 w-1 cursor-e-resize",
        axis === "w" && "bottom-0 left-0 top-0 w-1 cursor-w-resize",
        axis === "s" && "bottom-0 left-0 right-0 h-1 cursor-s-resize",
        axis === "ne" && "right-0 top-0 h-2 w-2 cursor-ne-resize",
        axis === "se" && "bottom-0 right-0 h-2 w-2 cursor-se-resize",
        axis === "sw" && "bottom-0 left-0 h-2 w-2 cursor-sw-resize",
        axis === "nw" && "left-0 top-0 h-2 w-2 cursor-nw-resize",
        className
      )}
      data-slot="floating-panel-resize-trigger"
      axis={axis}
      {...props}
    />
  );
}

// Convenience components for common stage triggers
function FloatingPanelMinimizeTrigger({
  className,
  ...props
}: Omit<React.ComponentProps<typeof FloatingPanelStageTrigger>, "stage">) {
  return (
    <FloatingPanelStageTrigger
      className={className}
      stage="minimized"
      {...props}
    >
      <MinusIcon className="h-4 w-4" />
    </FloatingPanelStageTrigger>
  );
}

function FloatingPanelMaximizeTrigger({
  className,
  ...props
}: Omit<React.ComponentProps<typeof FloatingPanelStageTrigger>, "stage">) {
  return (
    <FloatingPanelStageTrigger
      className={className}
      stage="maximized"
      {...props}
    >
      <ArrowsOutIcon className="h-4 w-4" />
    </FloatingPanelStageTrigger>
  );
}

function FloatingPanelRestoreTrigger({
  className,
  ...props
}: Omit<React.ComponentProps<typeof FloatingPanelStageTrigger>, "stage">) {
  return (
    <FloatingPanelStageTrigger className={className} stage="default" {...props}>
      <ArrowDownLeftIcon className="h-4 w-4" />
    </FloatingPanelStageTrigger>
  );
}

export {
  FloatingPanel,
  FloatingPanelTrigger,
  FloatingPanelPositioner,
  FloatingPanelContent,
  FloatingPanelDragTrigger,
  FloatingPanelHeader,
  FloatingPanelTitle,
  FloatingPanelControl,
  FloatingPanelStageTrigger,
  FloatingPanelCloseTrigger,
  FloatingPanelBody,
  FloatingPanelResizeTrigger,
  FloatingPanelMinimizeTrigger,
  FloatingPanelMaximizeTrigger,
  FloatingPanelRestoreTrigger,
  Portal,
};
