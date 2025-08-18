import {
  ClipboardControl as ClipboardControlPrimitive,
  ClipboardIndicator as ClipboardIndicatorPrimitive,
  ClipboardInput as ClipboardInputPrimitive,
  ClipboardLabel as ClipboardLabelPrimitive,
  ClipboardRoot as ClipboardRootPrimitive,
  ClipboardTrigger as ClipboardTriggerPrimitive,
  ClipboardValueText as ClipboardValueTextPrimitive,
} from "@ark-ui/react/clipboard";
import { cn } from "@packages/utils";
import { CopyIcon } from "@phosphor-icons/react/Copy";
import type React from "react";

function Clipboard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ClipboardRootPrimitive>) {
  return (
    <ClipboardRootPrimitive
      className={cn("w-full", className)}
      data-slot="clipboard"
      {...props}
    >
      {children}
    </ClipboardRootPrimitive>
  );
}

function ClipboardLabel({
  className,
  ...props
}: React.ComponentProps<typeof ClipboardLabelPrimitive>) {
  return (
    <ClipboardLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="clipboard-label"
      {...props}
    />
  );
}

function ClipboardControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ClipboardControlPrimitive>) {
  return (
    <ClipboardControlPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      data-slot="clipboard-control"
      {...props}
    >
      {children}
    </ClipboardControlPrimitive>
  );
}

function ClipboardInput({
  className,
  ...props
}: React.ComponentProps<typeof ClipboardInputPrimitive>) {
  return (
    <ClipboardInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="clipboard-input"
      {...props}
    />
  );
}

function ClipboardTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ClipboardTriggerPrimitive>) {
  return (
    <ClipboardTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="clipboard-trigger"
      {...props}
    >
      {children}
    </ClipboardTriggerPrimitive>
  );
}

function ClipboardIndicator({
  className,
  copied,
  children,
  ...props
}: React.ComponentProps<typeof ClipboardIndicatorPrimitive>) {
  return (
    <ClipboardIndicatorPrimitive
      className={cn("flex items-center justify-center", className)}
      data-slot="clipboard-indicator"
      copied={copied}
      {...props}
    >
      {children || <CopyIcon className="h-4 w-4" />}
    </ClipboardIndicatorPrimitive>
  );
}

function ClipboardValueText({
  className,
  ...props
}: React.ComponentProps<typeof ClipboardValueTextPrimitive>) {
  return (
    <ClipboardValueTextPrimitive
      className={cn("block truncate", className)}
      data-slot="clipboard-value-text"
      {...props}
    />
  );
}

export {
  Clipboard,
  ClipboardLabel,
  ClipboardControl,
  ClipboardInput,
  ClipboardTrigger,
  ClipboardIndicator,
  ClipboardValueText,
};
