import {
  ComboboxClearTrigger as ComboboxClearTriggerPrimitive,
  ComboboxContent as ComboboxContentPrimitive,
  ComboboxControl as ComboboxControlPrimitive,
  ComboboxInput as ComboboxInputPrimitive,
  ComboboxItemGroupLabel as ComboboxItemGroupLabelPrimitive,
  ComboboxItemGroup as ComboboxItemGroupPrimitive,
  ComboboxItemIndicator as ComboboxItemIndicatorPrimitive,
  ComboboxItem as ComboboxItemPrimitive,
  ComboboxItemText as ComboboxItemTextPrimitive,
  ComboboxLabel as ComboboxLabelPrimitive,
  ComboboxList as ComboboxListPrimitive,
  ComboboxPositioner as ComboboxPositionerPrimitive,
  ComboboxRoot as ComboboxRootPrimitive,
  ComboboxTrigger as ComboboxTriggerPrimitive,
} from "@ark-ui/react/combobox";
import { cn } from "@packages/utils";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function Combobox({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxRootPrimitive>) {
  return (
    <ComboboxRootPrimitive
      className={cn("w-full", className)}
      data-slot="combobox"
      {...props}
    />
  );
}

function ComboboxLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxLabelPrimitive>) {
  return (
    <ComboboxLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="combobox-label"
      {...props}
    />
  );
}

function ComboboxControl({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxControlPrimitive>) {
  return (
    <ComboboxControlPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      data-slot="combobox-control"
      {...props}
    />
  );
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxInputPrimitive>) {
  return (
    <ComboboxInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="combobox-input"
      {...props}
    />
  );
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxTriggerPrimitive>) {
  return (
    <ComboboxTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring flex items-center justify-center rounded-sm opacity-50 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:opacity-100",
        className
      )}
      data-slot="combobox-trigger"
      {...props}
    >
      {children || <CaretDownIcon className="size-4" />}
    </ComboboxTriggerPrimitive>
  );
}

function ComboboxClearTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxClearTriggerPrimitive>) {
  return (
    <ComboboxClearTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring flex items-center justify-center rounded-sm opacity-50 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
        className
      )}
      data-slot="combobox-clear-trigger"
      {...props}
    >
      {children || <XIcon className="size-4" />}
    </ComboboxClearTriggerPrimitive>
  );
}

function ComboboxPositioner({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPositionerPrimitive>) {
  return (
    <ComboboxPositionerPrimitive
      className={cn("relative", className)}
      data-slot="combobox-positioner"
      {...props}
    />
  );
}

function ComboboxContent({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxContentPrimitive>) {
  return (
    <ComboboxContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        className
      )}
      data-slot="combobox-content"
      {...props}
    />
  );
}

function ComboboxItemGroup({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxItemGroupPrimitive>) {
  return (
    <ComboboxItemGroupPrimitive
      className={cn("p-1", className)}
      data-slot="combobox-item-group"
      {...props}
    />
  );
}

function ComboboxItemGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxItemGroupLabelPrimitive>) {
  return (
    <ComboboxItemGroupLabelPrimitive
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      data-slot="combobox-item-group-label"
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxItemPrimitive>) {
  return (
    <ComboboxItemPrimitive
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      data-slot="combobox-item"
      {...props}
    >
      {children}
    </ComboboxItemPrimitive>
  );
}

function ComboboxItemText({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxItemTextPrimitive>) {
  return (
    <ComboboxItemTextPrimitive
      className={cn("block truncate", className)}
      data-slot="combobox-item-text"
      {...props}
    />
  );
}

function ComboboxItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxItemIndicatorPrimitive>) {
  return (
    <ComboboxItemIndicatorPrimitive
      className={cn(
        "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        className
      )}
      data-slot="combobox-item-indicator"
      {...props}
    >
      {children || <CheckIcon className="size-4" />}
    </ComboboxItemIndicatorPrimitive>
  );
}

function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxListPrimitive>) {
  return (
    <ComboboxListPrimitive
      className={cn("max-h-[300px] overflow-auto p-1", className)}
      data-slot="combobox-list"
      {...props}
    />
  );
}

export {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPositioner,
  ComboboxTrigger,
};
