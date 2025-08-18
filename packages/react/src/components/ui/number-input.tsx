import {
  NumberInputControl as NumberInputControlPrimitive,
  NumberInputDecrementTrigger as NumberInputDecrementTriggerPrimitive,
  NumberInputIncrementTrigger as NumberInputIncrementTriggerPrimitive,
  NumberInputInput as NumberInputInputPrimitive,
  NumberInputLabel as NumberInputLabelPrimitive,
  NumberInputRoot as NumberInputRootPrimitive,
  NumberInputScrubber as NumberInputScrubberPrimitive,
  NumberInputValueText as NumberInputValueTextPrimitive,
} from "@ark-ui/react/number-input";
import { cn } from "@packages/utils";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import type React from "react";

function NumberInput({
  children,
  ...props
}: React.ComponentProps<typeof NumberInputRootPrimitive>) {
  return (
    <NumberInputRootPrimitive data-slot="number-input" {...props}>
      {children}
    </NumberInputRootPrimitive>
  );
}

function NumberInputLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberInputLabelPrimitive>) {
  return (
    <NumberInputLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="number-input-label"
      {...props}
    >
      {children}
    </NumberInputLabelPrimitive>
  );
}

function NumberInputControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberInputControlPrimitive>) {
  return (
    <NumberInputControlPrimitive
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="number-input-control"
      {...props}
    >
      {children}
    </NumberInputControlPrimitive>
  );
}

function NumberInputInput({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputInputPrimitive>) {
  return (
    <NumberInputInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="number-input-input"
      {...props}
    />
  );
}

function NumberInputDecrementTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberInputDecrementTriggerPrimitive>) {
  return (
    <NumberInputDecrementTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="number-input-decrement-trigger"
      {...props}
    >
      {children || <CaretDown className="h-4 w-4" />}
    </NumberInputDecrementTriggerPrimitive>
  );
}

function NumberInputIncrementTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberInputIncrementTriggerPrimitive>) {
  return (
    <NumberInputIncrementTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="number-input-increment-trigger"
      {...props}
    >
      {children || <CaretUp className="h-4 w-4" />}
    </NumberInputIncrementTriggerPrimitive>
  );
}

function NumberInputScrubber({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputScrubberPrimitive>) {
  return (
    <NumberInputScrubberPrimitive
      className={cn("absolute inset-0 cursor-ew-resize", className)}
      data-slot="number-input-scrubber"
      {...props}
    />
  );
}

function NumberInputValueText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberInputValueTextPrimitive>) {
  return (
    <NumberInputValueTextPrimitive
      className={cn("block truncate", className)}
      data-slot="number-input-value-text"
      {...props}
    >
      {children}
    </NumberInputValueTextPrimitive>
  );
}

export {
  NumberInput,
  NumberInputLabel,
  NumberInputControl,
  NumberInputInput,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputScrubber,
  NumberInputValueText,
};
