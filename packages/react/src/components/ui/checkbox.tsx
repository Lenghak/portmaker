import {
  CheckboxControl as CheckboxControlPrimitive,
  CheckboxHiddenInput as CheckboxHiddenInputPrimitive,
  CheckboxIndicator as CheckboxIndicatorPrimitive,
  CheckboxLabel as CheckboxLabelPrimitive,
  CheckboxRoot as CheckboxRootPrimitive,
} from "@ark-ui/react/checkbox";
import { cn } from "@packages/utils";
import { CheckIcon } from "@phosphor-icons/react/Check";
import type React from "react";

function Checkbox({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxRootPrimitive>) {
  return (
    <CheckboxRootPrimitive
      className={cn("flex items-center space-x-2", className)}
      data-slot="checkbox"
      {...props}
    >
      {children}
    </CheckboxRootPrimitive>
  );
}

function CheckboxLabel({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxLabelPrimitive>) {
  return (
    <CheckboxLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="checkbox-label"
      {...props}
    />
  );
}

function CheckboxControl({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxControlPrimitive>) {
  return (
    <CheckboxControlPrimitive
      className={cn(
        "border-input shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40 group peer size-4 shrink-0 rounded-[4px] border outline-none transition-shadow focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        className
      )}
      data-slot="checkbox-control"
      {...props}
    />
  );
}

function CheckboxIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxIndicatorPrimitive>) {
  return (
    <CheckboxIndicatorPrimitive
      className={cn(
        "flex items-center justify-center text-current transition-none",
        className
      )}
      data-slot="checkbox-indicator"
      {...props}
    >
      {children || <CheckIcon className="size-3.5" />}
    </CheckboxIndicatorPrimitive>
  );
}

function CheckboxHiddenInput({
  ...props
}: React.ComponentProps<typeof CheckboxHiddenInputPrimitive>) {
  return (
    <CheckboxHiddenInputPrimitive
      data-slot="checkbox-hidden-input"
      {...props}
    />
  );
}

export {
  Checkbox,
  CheckboxLabel,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxHiddenInput,
};
