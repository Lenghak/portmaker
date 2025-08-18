import {
  ProgressCircle as ProgressCirclePrimitive,
  ProgressCircleRange as ProgressCircleRangePrimitive,
  ProgressCircleTrack as ProgressCircleTrackPrimitive,
  ProgressLabel as ProgressLabelPrimitive,
  ProgressRange as ProgressRangePrimitive,
  ProgressRoot as ProgressRootPrimitive,
  ProgressRootProvider as ProgressRootProviderPrimitive,
  ProgressTrack as ProgressTrackPrimitive,
  ProgressValueText as ProgressValueTextPrimitive,
  useProgress,
} from "@ark-ui/react/progress";
import { cn } from "@packages/utils";
import type React from "react";

function Progress({
  children,
  ...props
}: React.ComponentProps<typeof ProgressRootPrimitive>) {
  return (
    <ProgressRootPrimitive data-slot="progress" {...props}>
      {children}
    </ProgressRootPrimitive>
  );
}

function ProgressLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ProgressLabelPrimitive>) {
  return (
    <ProgressLabelPrimitive
      className={cn("text-sm font-medium leading-none", className)}
      data-slot="progress-label"
      {...props}
    >
      {children}
    </ProgressLabelPrimitive>
  );
}

function ProgressValueText({
  className,
  ...props
}: React.ComponentProps<typeof ProgressValueTextPrimitive>) {
  return (
    <ProgressValueTextPrimitive
      className={cn("text-sm font-medium", className)}
      data-slot="progress-value-text"
      {...props}
    />
  );
}

function ProgressTrack({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ProgressTrackPrimitive>) {
  return (
    <ProgressTrackPrimitive
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      data-slot="progress-track"
      {...props}
    >
      {children}
    </ProgressTrackPrimitive>
  );
}

function ProgressRange({
  className,
  ...props
}: React.ComponentProps<typeof ProgressRangePrimitive>) {
  return (
    <ProgressRangePrimitive
      className={cn(
        "bg-primary h-full w-full flex-1 transition-all",
        className
      )}
      data-slot="progress-range"
      {...props}
    />
  );
}

function ProgressCircle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ProgressCirclePrimitive>) {
  return (
    <ProgressCirclePrimitive
      className={cn("relative", className)}
      data-slot="progress-circle"
      {...props}
    >
      {children}
    </ProgressCirclePrimitive>
  );
}

function ProgressCircleTrack({
  className,
  ...props
}: React.ComponentProps<typeof ProgressCircleTrackPrimitive>) {
  return (
    <ProgressCircleTrackPrimitive
      className={cn("stroke-muted", className)}
      data-slot="progress-circle-track"
      {...props}
    />
  );
}

function ProgressCircleRange({
  className,
  ...props
}: React.ComponentProps<typeof ProgressCircleRangePrimitive>) {
  return (
    <ProgressCircleRangePrimitive
      className={cn("stroke-primary transition-all", className)}
      data-slot="progress-circle-range"
      {...props}
    />
  );
}

function ProgressRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof ProgressRootProviderPrimitive>) {
  return (
    <ProgressRootProviderPrimitive
      data-slot="progress-root-provider"
      {...props}
    >
      {children}
    </ProgressRootProviderPrimitive>
  );
}

export {
  Progress,
  ProgressLabel,
  ProgressValueText,
  ProgressTrack,
  ProgressRange,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
  ProgressRootProvider,
  useProgress,
};
