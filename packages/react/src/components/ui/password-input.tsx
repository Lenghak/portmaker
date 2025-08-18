import {
  PasswordInputControl as PasswordInputControlPrimitive,
  PasswordInputIndicator as PasswordInputIndicatorPrimitive,
  PasswordInputInput as PasswordInputInputPrimitive,
  PasswordInputLabel as PasswordInputLabelPrimitive,
  PasswordInputRoot as PasswordInputRootPrimitive,
  PasswordInputRootProvider as PasswordInputRootProviderPrimitive,
  PasswordInputVisibilityTrigger as PasswordInputVisibilityTriggerPrimitive,
  usePasswordInput,
} from "@ark-ui/react/password-input";
import { cn } from "@packages/utils";
import { Eye } from "@phosphor-icons/react";
import type React from "react";

function PasswordInput({
  children,
  ...props
}: React.ComponentProps<typeof PasswordInputRootPrimitive>) {
  return (
    <PasswordInputRootPrimitive data-slot="password-input" {...props}>
      {children}
    </PasswordInputRootPrimitive>
  );
}

function PasswordInputLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PasswordInputLabelPrimitive>) {
  return (
    <PasswordInputLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="password-input-label"
      {...props}
    >
      {children}
    </PasswordInputLabelPrimitive>
  );
}

function PasswordInputControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PasswordInputControlPrimitive>) {
  return (
    <PasswordInputControlPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="password-input-control"
      {...props}
    >
      {children}
    </PasswordInputControlPrimitive>
  );
}

function PasswordInputInput({
  className,
  ...props
}: React.ComponentProps<typeof PasswordInputInputPrimitive>) {
  return (
    <PasswordInputInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="password-input-input"
      {...props}
    />
  );
}

function PasswordInputVisibilityTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PasswordInputVisibilityTriggerPrimitive>) {
  return (
    <PasswordInputVisibilityTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="password-input-visibility-trigger"
      {...props}
    >
      {children}
    </PasswordInputVisibilityTriggerPrimitive>
  );
}

function PasswordInputIndicator({
  className,
  children,
  fallback,
  ...props
}: React.ComponentProps<typeof PasswordInputIndicatorPrimitive>) {
  return (
    <PasswordInputIndicatorPrimitive
      className={cn("flex items-center justify-center", className)}
      data-slot="password-input-indicator"
      fallback={fallback}
      {...props}
    >
      {children || <Eye className="h-4 w-4" />}
    </PasswordInputIndicatorPrimitive>
  );
}

function PasswordInputRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof PasswordInputRootProviderPrimitive>) {
  return (
    <PasswordInputRootProviderPrimitive
      data-slot="password-input-root-provider"
      {...props}
    >
      {children}
    </PasswordInputRootProviderPrimitive>
  );
}

export {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
  PasswordInputIndicator,
  PasswordInputRootProvider,
  usePasswordInput,
};
