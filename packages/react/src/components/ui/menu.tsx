import {
  MenuArrow as MenuArrowPrimitive,
  MenuArrowTip as MenuArrowTipPrimitive,
  MenuCheckboxItem as MenuCheckboxItemPrimitive,
  MenuContent as MenuContentPrimitive,
  MenuContextTrigger as MenuContextTriggerPrimitive,
  MenuIndicator as MenuIndicatorPrimitive,
  MenuItemGroupLabel as MenuItemGroupLabelPrimitive,
  MenuItemGroup as MenuItemGroupPrimitive,
  MenuItemIndicator as MenuItemIndicatorPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuItemText as MenuItemTextPrimitive,
  MenuPositioner as MenuPositionerPrimitive,
  MenuRadioItemGroup as MenuRadioItemGroupPrimitive,
  MenuRadioItem as MenuRadioItemPrimitive,
  MenuRoot as MenuRootPrimitive,
  MenuSeparator as MenuSeparatorPrimitive,
  MenuTriggerItem as MenuTriggerItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
} from "@ark-ui/react/menu";
import { cn } from "@packages/utils";
import { CaretRight, Check } from "@phosphor-icons/react";
import type React from "react";

function Menu({
  children,
  ...props
}: React.ComponentProps<typeof MenuRootPrimitive>) {
  return (
    <MenuRootPrimitive data-slot="menu" {...props}>
      {children}
    </MenuRootPrimitive>
  );
}

function MenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuTriggerPrimitive>) {
  return (
    <MenuTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="menu-trigger"
      {...props}
    >
      {children}
    </MenuTriggerPrimitive>
  );
}

function MenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof MenuPositionerPrimitive>) {
  return (
    <MenuPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="menu-positioner"
      {...props}
    />
  );
}

function MenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuContentPrimitive>) {
  return (
    <MenuContentPrimitive
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md",
        className
      )}
      data-slot="menu-content"
      {...props}
    >
      {children}
    </MenuContentPrimitive>
  );
}

function MenuItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItemPrimitive>) {
  return (
    <MenuItemPrimitive
      className={cn(
        "data-[variant=destructive]:*:[svg]:!text-destructive outline-hidden focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="menu-item"
      {...props}
    >
      {children}
    </MenuItemPrimitive>
  );
}

function MenuItemText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItemTextPrimitive>) {
  return (
    <MenuItemTextPrimitive
      className={cn("block truncate", className)}
      data-slot="menu-item-text"
      {...props}
    >
      {children}
    </MenuItemTextPrimitive>
  );
}

function MenuItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItemIndicatorPrimitive>) {
  return (
    <MenuItemIndicatorPrimitive
      className={cn(
        "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        className
      )}
      data-slot="menu-item-indicator"
      {...props}
    >
      {children || <Check className="size-4" />}
    </MenuItemIndicatorPrimitive>
  );
}

function MenuItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItemGroupPrimitive>) {
  return (
    <MenuItemGroupPrimitive
      className={cn("p-1", className)}
      data-slot="menu-item-group"
      {...props}
    >
      {children}
    </MenuItemGroupPrimitive>
  );
}

function MenuItemGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItemGroupLabelPrimitive>) {
  return (
    <MenuItemGroupLabelPrimitive
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      data-slot="menu-item-group-label"
      {...props}
    >
      {children}
    </MenuItemGroupLabelPrimitive>
  );
}

function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuSeparatorPrimitive>) {
  return (
    <MenuSeparatorPrimitive
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      data-slot="menu-separator"
      {...props}
    />
  );
}

function MenuArrow({
  className,
  ...props
}: React.ComponentProps<typeof MenuArrowPrimitive>) {
  return (
    <MenuArrowPrimitive
      className={cn("fill-popover", className)}
      data-slot="menu-arrow"
      {...props}
    />
  );
}

function MenuArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof MenuArrowTipPrimitive>) {
  return (
    <MenuArrowTipPrimitive
      className={cn("fill-popover", className)}
      data-slot="menu-arrow-tip"
      {...props}
    />
  );
}

function MenuIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuIndicatorPrimitive>) {
  return (
    <MenuIndicatorPrimitive
      className={cn("ml-auto", className)}
      data-slot="menu-indicator"
      {...props}
    >
      {children || <CaretRight className="size-4" />}
    </MenuIndicatorPrimitive>
  );
}

function MenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuCheckboxItemPrimitive>) {
  return (
    <MenuCheckboxItemPrimitive
      className={cn(
        "outline-hidden focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="menu-checkbox-item"
      {...props}
    >
      {children}
    </MenuCheckboxItemPrimitive>
  );
}

function MenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuRadioItemPrimitive>) {
  return (
    <MenuRadioItemPrimitive
      className={cn(
        "outline-hidden focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="menu-radio-item"
      {...props}
    >
      {children}
    </MenuRadioItemPrimitive>
  );
}

function MenuRadioItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuRadioItemGroupPrimitive>) {
  return (
    <MenuRadioItemGroupPrimitive
      className={cn("p-1", className)}
      data-slot="menu-radio-item-group"
      {...props}
    >
      {children}
    </MenuRadioItemGroupPrimitive>
  );
}

function MenuContextTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuContextTriggerPrimitive>) {
  return (
    <MenuContextTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        className
      )}
      data-slot="menu-context-trigger"
      {...props}
    >
      {children}
    </MenuContextTriggerPrimitive>
  );
}

function MenuTriggerItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuTriggerItemPrimitive>) {
  return (
    <MenuTriggerItemPrimitive
      className={cn(
        "data-[variant=destructive]:*:[svg]:!text-destructive outline-hidden focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="menu-trigger-item"
      {...props}
    >
      {children}
    </MenuTriggerItemPrimitive>
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      data-slot="menu-shortcut"
      {...props}
    />
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuItemText,
  MenuItemIndicator,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuArrow,
  MenuArrowTip,
  MenuIndicator,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuContextTrigger,
  MenuTriggerItem,
  MenuShortcut,
};
