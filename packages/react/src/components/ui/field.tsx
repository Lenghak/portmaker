import {
  FieldErrorText as FieldErrorTextPrimitive,
  FieldHelperText as FieldHelperTextPrimitive,
  FieldInput as FieldInputPrimitive,
  FieldLabel as FieldLabelPrimitive,
  FieldRequiredIndicator as FieldRequiredIndicatorPrimitive,
  FieldRoot as FieldRootPrimitive,
  FieldSelect as FieldSelectPrimitive,
  FieldTextarea as FieldTextareaPrimitive,
} from "@ark-ui/react/field";
import { cn } from "@packages/utils";
import type React from "react";

function Field({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FieldRootPrimitive>) {
  return (
    <FieldRootPrimitive
      className={cn("w-full", className)}
      data-slot="field"
      {...props}
    >
      {children}
    </FieldRootPrimitive>
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof FieldLabelPrimitive>) {
  return (
    <FieldLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="field-label"
      {...props}
    />
  );
}

function FieldInput({
  className,
  ...props
}: React.ComponentProps<typeof FieldInputPrimitive>) {
  return (
    <FieldInputPrimitive
      className={cn(
        "border-input shadow-xs selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      data-slot="field-input"
      {...props}
    />
  );
}

function FieldTextarea({
  className,
  autoresize = false,
  ...props
}: React.ComponentProps<typeof FieldTextareaPrimitive>) {
  return (
    <FieldTextareaPrimitive
      className={cn(
        "field-sizing-content border-input shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      data-slot="field-textarea"
      autoresize={autoresize}
      {...props}
    />
  );
}

function FieldSelect({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FieldSelectPrimitive>) {
  return (
    <FieldSelectPrimitive
      className={cn(
        "border-input shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      data-slot="field-select"
      {...props}
    >
      {children}
    </FieldSelectPrimitive>
  );
}

function FieldHelperText({
  className,
  ...props
}: React.ComponentProps<typeof FieldHelperTextPrimitive>) {
  return (
    <FieldHelperTextPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="field-helper-text"
      {...props}
    />
  );
}

function FieldErrorText({
  className,
  ...props
}: React.ComponentProps<typeof FieldErrorTextPrimitive>) {
  return (
    <FieldErrorTextPrimitive
      className={cn("text-destructive text-sm", className)}
      data-slot="field-error-text"
      {...props}
    />
  );
}

function FieldRequiredIndicator({
  className,
  fallback = "*",
  ...props
}: React.ComponentProps<typeof FieldRequiredIndicatorPrimitive>) {
  return (
    <FieldRequiredIndicatorPrimitive
      className={cn("text-destructive", className)}
      data-slot="field-required-indicator"
      fallback={fallback}
      {...props}
    />
  );
}

export {
  Field,
  FieldLabel,
  FieldInput,
  FieldTextarea,
  FieldSelect,
  FieldHelperText,
  FieldErrorText,
  FieldRequiredIndicator,
};
