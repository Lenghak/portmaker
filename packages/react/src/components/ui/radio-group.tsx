import {
  RadioGroupIndicator as RadioGroupIndicatorPrimitive,
  RadioGroupItemControl as RadioGroupItemControlPrimitive,
  RadioGroupItemHiddenInput as RadioGroupItemHiddenInputPrimitive,
  RadioGroupItem as RadioGroupItemPrimitive,
  RadioGroupItemText as RadioGroupItemTextPrimitive,
  RadioGroupLabel as RadioGroupLabelPrimitive,
  RadioGroupRoot as RadioGroupRootPrimitive,
  RadioGroupRootProvider as RadioGroupRootProviderPrimitive,
  useRadioGroup,
} from "@ark-ui/react/radio-group";
import { cn } from "@packages/utils";
import { CircleIcon } from "@phosphor-icons/react/Circle";
import type React from "react";

function RadioGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupRootPrimitive>) {
  return (
    <RadioGroupRootPrimitive
      className={cn("grid gap-2", className)}
      data-slot="radio-group"
      {...props}
    >
      {children}
    </RadioGroupRootPrimitive>
  );
}

function RadioGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupLabelPrimitive>) {
  return (
    <RadioGroupLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="radio-group-label"
      {...props}
    >
      {children}
    </RadioGroupLabelPrimitive>
  );
}

function RadioGroupIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupIndicatorPrimitive>) {
  return (
    <RadioGroupIndicatorPrimitive
      className={cn("", className)}
      data-slot="radio-group-indicator"
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupItemPrimitive>) {
  return (
    <RadioGroupItemPrimitive
      className={cn(
        "border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer relative flex items-center space-x-2 rounded-md border px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupItemPrimitive>
  );
}

function RadioGroupItemText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupItemTextPrimitive>) {
  return (
    <RadioGroupItemTextPrimitive
      className={cn("text-sm font-medium leading-none", className)}
      data-slot="radio-group-item-text"
      {...props}
    >
      {children}
    </RadioGroupItemTextPrimitive>
  );
}

function RadioGroupItemControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupItemControlPrimitive>) {
  return (
    <RadioGroupItemControlPrimitive
      className={cn(
        "border-primary text-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground aspect-square size-4 rounded-full border shadow focus:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="radio-group-item-control"
      {...props}
    >
      {children || (
        <RadioGroupIndicator className="flex items-center justify-center">
          <CircleIcon className="size-2.5 fill-current text-current" />
        </RadioGroupIndicator>
      )}
    </RadioGroupItemControlPrimitive>
  );
}

function RadioGroupItemHiddenInput({
  ...props
}: React.ComponentProps<typeof RadioGroupItemHiddenInputPrimitive>) {
  return (
    <RadioGroupItemHiddenInputPrimitive
      data-slot="radio-group-item-hidden-input"
      {...props}
    />
  );
}

function RadioGroupRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupRootProviderPrimitive>) {
  return (
    <RadioGroupRootProviderPrimitive
      data-slot="radio-group-root-provider"
      value={value}
      {...props}
    >
      {children}
    </RadioGroupRootProviderPrimitive>
  );
}

export {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupRootProvider,
  useRadioGroup,
};
