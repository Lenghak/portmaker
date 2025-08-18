import {
  SwitchContext as SwitchContextPrimitive,
  SwitchControl as SwitchControlPrimitive,
  SwitchHiddenInput as SwitchHiddenInputPrimitive,
  SwitchLabel as SwitchLabelPrimitive,
  SwitchRoot as SwitchRootPrimitive,
  SwitchRootProvider as SwitchRootProviderPrimitive,
  SwitchThumb as SwitchThumbPrimitive,
  useSwitch,
} from "@ark-ui/react/switch";
import { cn } from "@packages/utils";
import type React from "react";

function Switch({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SwitchRootPrimitive>) {
  return (
    <SwitchRootPrimitive
      className={cn("flex items-center gap-2", className)}
      data-slot="switch"
      {...props}
    >
      {children}
    </SwitchRootPrimitive>
  );
}

function SwitchLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SwitchLabelPrimitive>) {
  return (
    <SwitchLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="switch-label"
      {...props}
    >
      {children}
    </SwitchLabelPrimitive>
  );
}

function SwitchControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SwitchControlPrimitive>) {
  return (
    <SwitchControlPrimitive
      className={cn(
        "shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80 peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="switch-control"
      {...props}
    >
      {children}
    </SwitchControlPrimitive>
  );
}

function SwitchThumb({
  className,
  ...props
}: React.ComponentProps<typeof SwitchThumbPrimitive>) {
  return (
    <SwitchThumbPrimitive
      className={cn(
        "bg-background dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        className
      )}
      data-slot="switch-thumb"
      {...props}
    />
  );
}

function SwitchHiddenInput({
  ...props
}: React.ComponentProps<typeof SwitchHiddenInputPrimitive>) {
  return (
    <SwitchHiddenInputPrimitive data-slot="switch-hidden-input" {...props} />
  );
}

function SwitchContext({
  children,
  ...props
}: React.ComponentProps<typeof SwitchContextPrimitive>) {
  return (
    <SwitchContextPrimitive data-slot="switch-context" {...props}>
      {children}
    </SwitchContextPrimitive>
  );
}

function SwitchRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof SwitchRootProviderPrimitive>) {
  return (
    <SwitchRootProviderPrimitive
      data-slot="switch-root-provider"
      value={value}
      {...props}
    >
      {children}
    </SwitchRootProviderPrimitive>
  );
}

export {
  Switch,
  SwitchLabel,
  SwitchControl,
  SwitchThumb,
  SwitchHiddenInput,
  SwitchContext,
  SwitchRootProvider,
  useSwitch,
};
