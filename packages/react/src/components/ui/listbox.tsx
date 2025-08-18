import {
  createListCollection,
  ListboxContent as ListboxContentPrimitive,
  ListboxInput as ListboxInputPrimitive,
  ListboxItemGroupLabel as ListboxItemGroupLabelPrimitive,
  ListboxItemGroup as ListboxItemGroupPrimitive,
  ListboxItemIndicator as ListboxItemIndicatorPrimitive,
  ListboxItem as ListboxItemPrimitive,
  ListboxItemText as ListboxItemTextPrimitive,
  ListboxLabel as ListboxLabelPrimitive,
  ListboxRoot as ListboxRootPrimitive,
  ListboxValueText as ListboxValueTextPrimitive,
} from "@ark-ui/react/listbox";
import { cn } from "@packages/utils";
import { Check } from "@phosphor-icons/react";
import type React from "react";

function Listbox({
  children,
  ...props
}: React.ComponentProps<typeof ListboxRootPrimitive>) {
  return (
    <ListboxRootPrimitive data-slot="listbox" {...props}>
      {children}
    </ListboxRootPrimitive>
  );
}

function ListboxContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxContentPrimitive>) {
  return (
    <ListboxContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        className
      )}
      data-slot="listbox-content"
      {...props}
    >
      {children}
    </ListboxContentPrimitive>
  );
}

function ListboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxItemPrimitive>) {
  return (
    <ListboxItemPrimitive
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      data-slot="listbox-item"
      {...props}
    >
      {children}
    </ListboxItemPrimitive>
  );
}

function ListboxItemText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxItemTextPrimitive>) {
  return (
    <ListboxItemTextPrimitive
      className={cn("block truncate", className)}
      data-slot="listbox-item-text"
      {...props}
    >
      {children}
    </ListboxItemTextPrimitive>
  );
}

function ListboxItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxItemIndicatorPrimitive>) {
  return (
    <ListboxItemIndicatorPrimitive
      className={cn(
        "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        className
      )}
      data-slot="listbox-item-indicator"
      {...props}
    >
      {children || <Check className="h-4 w-4" />}
    </ListboxItemIndicatorPrimitive>
  );
}

function ListboxLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxLabelPrimitive>) {
  return (
    <ListboxLabelPrimitive
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      data-slot="listbox-label"
      {...props}
    >
      {children}
    </ListboxLabelPrimitive>
  );
}

function ListboxValueText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxValueTextPrimitive>) {
  return (
    <ListboxValueTextPrimitive
      className={cn("block truncate", className)}
      data-slot="listbox-value-text"
      {...props}
    >
      {children}
    </ListboxValueTextPrimitive>
  );
}

function ListboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ListboxInputPrimitive>) {
  return (
    <ListboxInputPrimitive
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="listbox-input"
      {...props}
    />
  );
}

function ListboxItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxItemGroupPrimitive>) {
  return (
    <ListboxItemGroupPrimitive
      className={cn("p-1", className)}
      data-slot="listbox-item-group"
      {...props}
    >
      {children}
    </ListboxItemGroupPrimitive>
  );
}

function ListboxItemGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ListboxItemGroupLabelPrimitive>) {
  return (
    <ListboxItemGroupLabelPrimitive
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      data-slot="listbox-item-group-label"
      {...props}
    >
      {children}
    </ListboxItemGroupLabelPrimitive>
  );
}

export {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
  ListboxItemIndicator,
  ListboxLabel,
  ListboxValueText,
  ListboxInput,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  createListCollection,
};
