import {
  PinInputControl as PinInputControlPrimitive,
  PinInputHiddenInput as PinInputHiddenInputPrimitive,
  PinInputInput as PinInputInputPrimitive,
  PinInputLabel as PinInputLabelPrimitive,
  PinInputRoot as PinInputRootPrimitive,
  PinInputRootProvider as PinInputRootProviderPrimitive,
  usePinInput,
} from "@ark-ui/react/pin-input";
import { cn } from "@packages/utils";
import type React from "react";

function PinInput({
  children,
  ...props
}: React.ComponentProps<typeof PinInputRootPrimitive>) {
  return (
    <PinInputRootPrimitive data-slot="pin-input" {...props}>
      {children}
    </PinInputRootPrimitive>
  );
}

function PinInputLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PinInputLabelPrimitive>) {
  return (
    <PinInputLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="pin-input-label"
      {...props}
    >
      {children}
    </PinInputLabelPrimitive>
  );
}

function PinInputControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PinInputControlPrimitive>) {
  return (
    <PinInputControlPrimitive
      className={cn("flex items-center gap-2", className)}
      data-slot="pin-input-control"
      {...props}
    >
      {children}
    </PinInputControlPrimitive>
  );
}

function PinInputInput({
  className,
  index,
  ...props
}: React.ComponentProps<typeof PinInputInputPrimitive>) {
  return (
    <PinInputInputPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-9 items-center justify-center rounded-md border bg-transparent text-center text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="pin-input-input"
      index={index}
      {...props}
    />
  );
}

function PinInputHiddenInput({
  ...props
}: React.ComponentProps<typeof PinInputHiddenInputPrimitive>) {
  return (
    <PinInputHiddenInputPrimitive
      data-slot="pin-input-hidden-input"
      {...props}
    />
  );
}

function PinInputRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof PinInputRootProviderPrimitive>) {
  return (
    <PinInputRootProviderPrimitive
      data-slot="pin-input-root-provider"
      {...props}
    >
      {children}
    </PinInputRootProviderPrimitive>
  );
}

export {
  PinInput,
  PinInputLabel,
  PinInputControl,
  PinInputInput,
  PinInputHiddenInput,
  PinInputRootProvider,
  usePinInput,
};
