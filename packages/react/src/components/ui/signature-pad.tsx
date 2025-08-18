import {
  SignaturePadClearTrigger as SignaturePadClearTriggerPrimitive,
  SignaturePadContext as SignaturePadContextPrimitive,
  SignaturePadControl as SignaturePadControlPrimitive,
  SignaturePadGuide as SignaturePadGuidePrimitive,
  SignaturePadHiddenInput as SignaturePadHiddenInputPrimitive,
  SignaturePadLabel as SignaturePadLabelPrimitive,
  SignaturePadRoot as SignaturePadRootPrimitive,
  SignaturePadRootProvider as SignaturePadRootProviderPrimitive,
  SignaturePadSegment as SignaturePadSegmentPrimitive,
  useSignaturePad,
} from "@ark-ui/react/signature-pad";
import { cn } from "@packages/utils";
import type React from "react";

function SignaturePad({
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadRootPrimitive>) {
  return (
    <SignaturePadRootPrimitive data-slot="signature-pad" {...props}>
      {children}
    </SignaturePadRootPrimitive>
  );
}

function SignaturePadLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadLabelPrimitive>) {
  return (
    <SignaturePadLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="signature-pad-label"
      {...props}
    >
      {children}
    </SignaturePadLabelPrimitive>
  );
}

function SignaturePadControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadControlPrimitive>) {
  return (
    <SignaturePadControlPrimitive
      className={cn(
        "border-input bg-background relative flex h-40 w-full flex-col items-center justify-center rounded-md border",
        className
      )}
      data-slot="signature-pad-control"
      {...props}
    >
      {children}
    </SignaturePadControlPrimitive>
  );
}

function SignaturePadSegment({
  className,
  ...props
}: React.ComponentProps<typeof SignaturePadSegmentPrimitive>) {
  return (
    <SignaturePadSegmentPrimitive
      className={cn("absolute inset-0", className)}
      data-slot="signature-pad-segment"
      {...props}
    />
  );
}

function SignaturePadClearTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadClearTriggerPrimitive>) {
  return (
    <SignaturePadClearTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring absolute bottom-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 h-8 px-3",
        className
      )}
      data-slot="signature-pad-clear-trigger"
      {...props}
    >
      {children || "Clear"}
    </SignaturePadClearTriggerPrimitive>
  );
}

function SignaturePadGuide({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadGuidePrimitive>) {
  return (
    <SignaturePadGuidePrimitive
      className={cn(
        "text-muted-foreground pointer-events-none text-sm",
        className
      )}
      data-slot="signature-pad-guide"
      {...props}
    >
      {children || "Sign here"}
    </SignaturePadGuidePrimitive>
  );
}

function SignaturePadHiddenInput({
  ...props
}: React.ComponentProps<typeof SignaturePadHiddenInputPrimitive>) {
  return (
    <SignaturePadHiddenInputPrimitive
      data-slot="signature-pad-hidden-input"
      {...props}
    />
  );
}

function SignaturePadContext({
  children,
  ...props
}: React.ComponentProps<typeof SignaturePadContextPrimitive>) {
  return (
    <SignaturePadContextPrimitive data-slot="signature-pad-context" {...props}>
      {children}
    </SignaturePadContextPrimitive>
  );
}

function SignaturePadRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof SignaturePadRootProviderPrimitive>) {
  return (
    <SignaturePadRootProviderPrimitive
      data-slot="signature-pad-root-provider"
      value={value}
      {...props}
    >
      {children}
    </SignaturePadRootProviderPrimitive>
  );
}

export {
  SignaturePad,
  SignaturePadLabel,
  SignaturePadControl,
  SignaturePadSegment,
  SignaturePadClearTrigger,
  SignaturePadGuide,
  SignaturePadHiddenInput,
  SignaturePadContext,
  SignaturePadRootProvider,
  useSignaturePad,
};
