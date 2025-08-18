import { Portal } from "@ark-ui/react/portal";
import {
  SelectClearTrigger as SelectClearTriggerPrimitive,
  SelectContent as SelectContentPrimitive,
  SelectControl as SelectControlPrimitive,
  SelectHiddenSelect as SelectHiddenSelectPrimitive,
  SelectItemGroupLabel as SelectItemGroupLabelPrimitive,
  SelectItemGroup as SelectItemGroupPrimitive,
  SelectItemIndicator as SelectItemIndicatorPrimitive,
  SelectItem as SelectItemPrimitive,
  SelectItemText as SelectItemTextPrimitive,
  SelectLabel as SelectLabelPrimitive,
  SelectPositioner as SelectPositionerPrimitive,
  SelectRoot as SelectRootPrimitive,
  SelectTrigger as SelectTriggerPrimitive,
  SelectValueText as SelectValueTextPrimitive,
} from "@ark-ui/react/select";
import { cn } from "@packages/utils";
import type React from "react";

function Select({
  ...props
}: React.ComponentProps<typeof SelectRootPrimitive>) {
  return <SelectRootPrimitive data-slot="select" {...props} />;
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectLabelPrimitive>) {
  return (
    <SelectLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="select-label"
      {...props}
    />
  );
}

function SelectControl({
  className,
  ...props
}: React.ComponentProps<typeof SelectControlPrimitive>) {
  return (
    <SelectControlPrimitive
      className={cn("relative", className)}
      data-slot="select-control"
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectTriggerPrimitive>) {
  return (
    <SelectTriggerPrimitive
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectItemIndicatorPrimitive className="flex items-center">
        <span className="h-4 w-4 opacity-50">▼</span>
      </SelectItemIndicatorPrimitive>
    </SelectTriggerPrimitive>
  );
}

function SelectValueText({
  className,
  placeholder,
  ...props
}: React.ComponentProps<typeof SelectValueTextPrimitive>) {
  return (
    <SelectValueTextPrimitive
      className={cn("block truncate", className)}
      data-slot="select-value-text"
      placeholder={placeholder}
      {...props}
    />
  );
}

function SelectClearTrigger({
  className,
  ...props
}: React.ComponentProps<typeof SelectClearTriggerPrimitive>) {
  return (
    <SelectClearTriggerPrimitive
      className={cn(
        "ring-offset-background hover:bg-accent hover:text-accent-foreground focus:ring-ring absolute right-8 top-0 flex h-full items-center justify-center rounded-md px-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="select-clear-trigger"
      {...props}
    />
  );
}

function SelectPortal({ ...props }: React.ComponentProps<typeof Portal>) {
  return <Portal data-slot="select-portal" {...props} />;
}

function SelectPositioner({
  className,
  ...props
}: React.ComponentProps<typeof SelectPositionerPrimitive>) {
  return (
    <SelectPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="select-positioner"
      {...props}
    />
  );
}

function SelectContent({
  className,
  ...props
}: React.ComponentProps<typeof SelectContentPrimitive>) {
  return (
    <SelectContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        className
      )}
      data-slot="select-content"
      {...props}
    />
  );
}

function SelectItemGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectItemGroupPrimitive>) {
  return (
    <SelectItemGroupPrimitive
      className={cn("p-1", className)}
      data-slot="select-item-group"
      {...props}
    />
  );
}

function SelectItemGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectItemGroupLabelPrimitive>) {
  return (
    <SelectItemGroupLabelPrimitive
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      data-slot="select-item-group-label"
      {...props}
    />
  );
}

function SelectItem({
  className,
  item,
  children,
  ...props
}: React.ComponentProps<typeof SelectItemPrimitive>) {
  return (
    <SelectItemPrimitive
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      data-slot="select-item"
      item={item}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectItemIndicatorPrimitive>
          <span className="h-4 w-4">✓</span>
        </SelectItemIndicatorPrimitive>
      </span>
      <SelectItemTextPrimitive>{children}</SelectItemTextPrimitive>
    </SelectItemPrimitive>
  );
}

function SelectItemText({
  className,
  ...props
}: React.ComponentProps<typeof SelectItemTextPrimitive>) {
  return (
    <SelectItemTextPrimitive
      className={cn("block truncate", className)}
      data-slot="select-item-text"
      {...props}
    />
  );
}

function SelectItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof SelectItemIndicatorPrimitive>) {
  return (
    <SelectItemIndicatorPrimitive
      className={cn("flex items-center justify-center", className)}
      data-slot="select-item-indicator"
      {...props}
    />
  );
}

function SelectHiddenSelect({
  ...props
}: React.ComponentProps<typeof SelectHiddenSelectPrimitive>) {
  return (
    <SelectHiddenSelectPrimitive data-slot="select-hidden-select" {...props} />
  );
}

export {
  Select,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectClearTrigger,
  SelectPortal,
  SelectPositioner,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectHiddenSelect,
};
