import {
  SegmentGroupContext as SegmentGroupContextPrimitive,
  SegmentGroupIndicator as SegmentGroupIndicatorPrimitive,
  SegmentGroupItemContext as SegmentGroupItemContextPrimitive,
  SegmentGroupItemControl as SegmentGroupItemControlPrimitive,
  SegmentGroupItemHiddenInput as SegmentGroupItemHiddenInputPrimitive,
  SegmentGroupItem as SegmentGroupItemPrimitive,
  SegmentGroupItemText as SegmentGroupItemTextPrimitive,
  SegmentGroupLabel as SegmentGroupLabelPrimitive,
  SegmentGroupRoot as SegmentGroupRootPrimitive,
  SegmentGroupRootProvider as SegmentGroupRootProviderPrimitive,
  useSegmentGroup,
} from "@ark-ui/react/segment-group";
import { cn } from "@packages/utils";
import type React from "react";

function SegmentGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupRootPrimitive>) {
  return (
    <SegmentGroupRootPrimitive
      className={cn("w-full", className)}
      data-slot="segment-group"
      {...props}
    >
      {children}
    </SegmentGroupRootPrimitive>
  );
}

function SegmentGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupLabelPrimitive>) {
  return (
    <SegmentGroupLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="segment-group-label"
      {...props}
    >
      {children}
    </SegmentGroupLabelPrimitive>
  );
}

function SegmentGroupIndicator({
  className,
  ...props
}: React.ComponentProps<typeof SegmentGroupIndicatorPrimitive>) {
  return (
    <SegmentGroupIndicatorPrimitive
      className={cn(
        "bg-background absolute inset-0 rounded-md border shadow-sm transition-all",
        className
      )}
      data-slot="segment-group-indicator"
      {...props}
    />
  );
}

function SegmentGroupItem({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupItemPrimitive>) {
  return (
    <SegmentGroupItemPrimitive
      className={cn("relative", className)}
      data-slot="segment-group-item"
      value={value}
      {...props}
    >
      {children}
    </SegmentGroupItemPrimitive>
  );
}

function SegmentGroupItemControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupItemControlPrimitive>) {
  return (
    <SegmentGroupItemControlPrimitive
      className={cn(
        "text-muted-foreground hover:text-foreground focus-visible:ring-ring relative z-10 flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:text-foreground",
        className
      )}
      data-slot="segment-group-item-control"
      {...props}
    >
      {children}
    </SegmentGroupItemControlPrimitive>
  );
}

function SegmentGroupItemText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupItemTextPrimitive>) {
  return (
    <SegmentGroupItemTextPrimitive
      className={cn("text-sm font-medium", className)}
      data-slot="segment-group-item-text"
      {...props}
    >
      {children}
    </SegmentGroupItemTextPrimitive>
  );
}

function SegmentGroupItemHiddenInput({
  ...props
}: React.ComponentProps<typeof SegmentGroupItemHiddenInputPrimitive>) {
  return (
    <SegmentGroupItemHiddenInputPrimitive
      data-slot="segment-group-item-hidden-input"
      {...props}
    />
  );
}

function SegmentGroupItemContext({
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupItemContextPrimitive>) {
  return (
    <SegmentGroupItemContextPrimitive
      data-slot="segment-group-item-context"
      {...props}
    >
      {children}
    </SegmentGroupItemContextPrimitive>
  );
}

function SegmentGroupContext({
  children,
  ...props
}: React.ComponentProps<typeof SegmentGroupContextPrimitive>) {
  return (
    <SegmentGroupContextPrimitive data-slot="segment-group-context" {...props}>
      {children}
    </SegmentGroupContextPrimitive>
  );
}

function SegmentGroupRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof SegmentGroupRootProviderPrimitive>) {
  return (
    <SegmentGroupRootProviderPrimitive
      data-slot="segment-group-root-provider"
      value={value}
      {...props}
    >
      {children}
    </SegmentGroupRootProviderPrimitive>
  );
}

export {
  SegmentGroup,
  SegmentGroupLabel,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
  SegmentGroupItemHiddenInput,
  SegmentGroupItemContext,
  SegmentGroupContext,
  SegmentGroupRootProvider,
  useSegmentGroup,
};
