import {
  FieldsetErrorText as FieldsetErrorTextPrimitive,
  FieldsetHelperText as FieldsetHelperTextPrimitive,
  FieldsetLegend as FieldsetLegendPrimitive,
  FieldsetRoot as FieldsetRootPrimitive,
} from "@ark-ui/react/fieldset";
import { cn } from "@packages/utils";
import type React from "react";

function Fieldset({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FieldsetRootPrimitive>) {
  return (
    <FieldsetRootPrimitive
      className={cn("w-full", className)}
      data-slot="fieldset"
      {...props}
    >
      {children}
    </FieldsetRootPrimitive>
  );
}

function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetLegendPrimitive>) {
  return (
    <FieldsetLegendPrimitive
      className={cn(
        "text-foreground text-base font-semibold leading-none",
        className
      )}
      data-slot="fieldset-legend"
      {...props}
    />
  );
}

function FieldsetHelperText({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetHelperTextPrimitive>) {
  return (
    <FieldsetHelperTextPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="fieldset-helper-text"
      {...props}
    />
  );
}

function FieldsetErrorText({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetErrorTextPrimitive>) {
  return (
    <FieldsetErrorTextPrimitive
      className={cn("text-destructive text-sm", className)}
      data-slot="fieldset-error-text"
      {...props}
    />
  );
}

export { Fieldset, FieldsetLegend, FieldsetHelperText, FieldsetErrorText };
