import {
  RatingGroupContext as RatingGroupContextPrimitive,
  RatingGroupControl as RatingGroupControlPrimitive,
  RatingGroupHiddenInput as RatingGroupHiddenInputPrimitive,
  RatingGroupItemContext as RatingGroupItemContextPrimitive,
  RatingGroupItem as RatingGroupItemPrimitive,
  RatingGroupLabel as RatingGroupLabelPrimitive,
  RatingGroupRoot as RatingGroupRootPrimitive,
  RatingGroupRootProvider as RatingGroupRootProviderPrimitive,
  useRatingGroup,
} from "@ark-ui/react/rating-group";
import { cn } from "@packages/utils";
import type React from "react";

function RatingGroup({
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupRootPrimitive>) {
  return (
    <RatingGroupRootPrimitive data-slot="rating-group" {...props}>
      {children}
    </RatingGroupRootPrimitive>
  );
}

function RatingGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupLabelPrimitive>) {
  return (
    <RatingGroupLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="rating-group-label"
      {...props}
    >
      {children}
    </RatingGroupLabelPrimitive>
  );
}

function RatingGroupControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupControlPrimitive>) {
  return (
    <RatingGroupControlPrimitive
      className={cn("flex items-center gap-1", className)}
      data-slot="rating-group-control"
      {...props}
    >
      {children}
    </RatingGroupControlPrimitive>
  );
}

function RatingGroupItem({
  className,
  index,
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupItemPrimitive>) {
  return (
    <RatingGroupItemPrimitive
      className={cn(
        "text-muted-foreground hover:text-foreground focus-visible:ring-ring cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[highlighted=true]:text-foreground data-[checked=true]:text-foreground",
        className
      )}
      data-slot="rating-group-item"
      index={index}
      {...props}
    >
      {children}
    </RatingGroupItemPrimitive>
  );
}

function RatingGroupHiddenInput({
  ...props
}: React.ComponentProps<typeof RatingGroupHiddenInputPrimitive>) {
  return (
    <RatingGroupHiddenInputPrimitive
      data-slot="rating-group-hidden-input"
      {...props}
    />
  );
}

function RatingGroupContext({
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupContextPrimitive>) {
  return (
    <RatingGroupContextPrimitive data-slot="rating-group-context" {...props}>
      {children}
    </RatingGroupContextPrimitive>
  );
}

function RatingGroupItemContext({
  children,
  ...props
}: React.ComponentProps<typeof RatingGroupItemContextPrimitive>) {
  return (
    <RatingGroupItemContextPrimitive
      data-slot="rating-group-item-context"
      {...props}
    >
      {children}
    </RatingGroupItemContextPrimitive>
  );
}

function RatingGroupRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof RatingGroupRootProviderPrimitive>) {
  return (
    <RatingGroupRootProviderPrimitive
      data-slot="rating-group-root-provider"
      value={value}
      {...props}
    >
      {children}
    </RatingGroupRootProviderPrimitive>
  );
}

export {
  RatingGroup,
  RatingGroupLabel,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupHiddenInput,
  RatingGroupContext,
  RatingGroupItemContext,
  RatingGroupRootProvider,
  useRatingGroup,
};
