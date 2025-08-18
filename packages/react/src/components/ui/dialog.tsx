import {
  DialogBackdrop as DialogBackdropPrimitive,
  DialogCloseTrigger as DialogCloseTriggerPrimitive,
  DialogContent as DialogContentPrimitive,
  DialogDescription as DialogDescriptionPrimitive,
  DialogPositioner as DialogPositionerPrimitive,
  DialogRoot as DialogRootPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogTrigger as DialogTriggerPrimitive,
} from "@ark-ui/react/dialog";
import { cn } from "@packages/utils";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function Dialog({
  children,
  ...props
}: React.ComponentProps<typeof DialogRootPrimitive>) {
  return (
    <DialogRootPrimitive data-slot="dialog" {...props}>
      {children}
    </DialogRootPrimitive>
  );
}

function DialogTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogTriggerPrimitive>) {
  return (
    <DialogTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        className
      )}
      data-slot="dialog-trigger"
      {...props}
    >
      {children}
    </DialogTriggerPrimitive>
  );
}

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof DialogBackdropPrimitive>) {
  return (
    <DialogBackdropPrimitive
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=open]:animate-in fixed inset-0 z-50 bg-black/50",
        className
      )}
      data-slot="dialog-backdrop"
      {...props}
    />
  );
}

function DialogPositioner({
  className,
  ...props
}: React.ComponentProps<typeof DialogPositionerPrimitive>) {
  return (
    <DialogPositionerPrimitive
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        className
      )}
      data-slot="dialog-positioner"
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogContentPrimitive>) {
  return (
    <DialogContentPrimitive
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 bg-background data-[state=closed]:animate-out data-[state=open]:animate-in z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )}
      data-slot="dialog-content"
      {...props}
    >
      {children}
    </DialogContentPrimitive>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogTitlePrimitive>) {
  return (
    <DialogTitlePrimitive
      className={cn("text-lg font-semibold leading-none", className)}
      data-slot="dialog-title"
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogDescriptionPrimitive>) {
  return (
    <DialogDescriptionPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="dialog-description"
      {...props}
    />
  );
}

function DialogCloseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogCloseTriggerPrimitive>) {
  return (
    <DialogCloseTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring absolute right-4 top-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 opacity-70 hover:opacity-100",
        className
      )}
      data-slot="dialog-close-trigger"
      {...props}
    >
      {children || <XIcon className="h-4 w-4" />}
    </DialogCloseTriggerPrimitive>
  );
}

// Convenience components for common dialog patterns
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      data-slot="dialog-header"
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      data-slot="dialog-footer"
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  DialogHeader,
  DialogFooter,
  // Legacy exports for backward compatibility
  DialogBackdrop as DialogOverlay,
  DialogCloseTrigger as DialogClose,
};
