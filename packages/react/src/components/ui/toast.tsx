import {
  createToaster,
  ToastActionTrigger as ToastActionTriggerPrimitive,
  ToastCloseTrigger as ToastCloseTriggerPrimitive,
  ToastContext as ToastContextPrimitive,
  ToastDescription as ToastDescriptionPrimitive,
  Toaster as ToasterPrimitive,
  ToastRoot as ToastRootPrimitive,
  ToastTitle as ToastTitlePrimitive,
  useToastContext,
} from "@ark-ui/react/toast";
import { cn } from "@packages/utils";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function Toast({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToastRootPrimitive>) {
  return (
    <ToastRootPrimitive
      className={cn(
        "bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full data-[swipe=end]:slide-out-to-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:data-[swipe=cancel]:data-[swipe=end]:data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:data-[swipe=cancel]:data-[swipe=end]:data-[state=closed]:slide-out-to-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:data-[swipe=cancel]:data-[swipe=end]:data-[state=closed]:slide-out-to-right-full group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=move]:transition-none",
        className
      )}
      data-slot="toast"
      {...props}
    >
      {children}
    </ToastRootPrimitive>
  );
}

function ToastTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToastTitlePrimitive>) {
  return (
    <ToastTitlePrimitive
      className={cn("text-sm font-semibold [&+div]:text-xs", className)}
      data-slot="toast-title"
      {...props}
    >
      {children}
    </ToastTitlePrimitive>
  );
}

function ToastDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToastDescriptionPrimitive>) {
  return (
    <ToastDescriptionPrimitive
      className={cn("text-muted-foreground text-sm opacity-90", className)}
      data-slot="toast-description"
      {...props}
    >
      {children}
    </ToastDescriptionPrimitive>
  );
}

function ToastActionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToastActionTriggerPrimitive>) {
  return (
    <ToastActionTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring hover:bg-secondary group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="toast-action-trigger"
      {...props}
    >
      {children}
    </ToastActionTriggerPrimitive>
  );
}

function ToastCloseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToastCloseTriggerPrimitive>) {
  return (
    <ToastCloseTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      data-slot="toast-close-trigger"
      {...props}
    >
      {children || <XIcon className="size-4" />}
    </ToastCloseTriggerPrimitive>
  );
}

function ToastContext({
  children,
  ...props
}: React.ComponentProps<typeof ToastContextPrimitive>) {
  return (
    <ToastContextPrimitive data-slot="toast-context" {...props}>
      {children}
    </ToastContextPrimitive>
  );
}

function ToastToaster({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToasterPrimitive>) {
  return (
    <ToasterPrimitive
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      data-slot="toaster"
      {...props}
    >
      {children}
    </ToasterPrimitive>
  );
}

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastActionTrigger,
  ToastCloseTrigger,
  ToastContext,
  ToastToaster,
  createToaster,
  useToastContext,
};
