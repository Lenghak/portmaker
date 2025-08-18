import {
  EditableArea as EditableAreaPrimitive,
  EditableCancelTrigger as EditableCancelTriggerPrimitive,
  EditableContext as EditableContextPrimitive,
  EditableControl as EditableControlPrimitive,
  EditableEditTrigger as EditableEditTriggerPrimitive,
  EditableInput as EditableInputPrimitive,
  EditableLabel as EditableLabelPrimitive,
  EditablePreview as EditablePreviewPrimitive,
  EditableRoot as EditableRootPrimitive,
  EditableSubmitTrigger as EditableSubmitTriggerPrimitive,
} from "@ark-ui/react/editable";
import { cn } from "@packages/utils";
import type React from "react";

function Editable({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableRootPrimitive>) {
  return (
    <EditableRootPrimitive
      className={cn("w-full", className)}
      data-slot="editable"
      {...props}
    >
      {children}
    </EditableRootPrimitive>
  );
}

function EditableLabel({
  className,
  ...props
}: React.ComponentProps<typeof EditableLabelPrimitive>) {
  return (
    <EditableLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="editable-label"
      {...props}
    />
  );
}

function EditableArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableAreaPrimitive>) {
  return (
    <EditableAreaPrimitive
      className={cn("relative", className)}
      data-slot="editable-area"
      {...props}
    >
      {children}
    </EditableAreaPrimitive>
  );
}

function EditableInput({
  className,
  ...props
}: React.ComponentProps<typeof EditableInputPrimitive>) {
  return (
    <EditableInputPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex min-h-[1.5rem] w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="editable-input"
      {...props}
    />
  );
}

function EditablePreview({
  className,
  ...props
}: React.ComponentProps<typeof EditablePreviewPrimitive>) {
  return (
    <EditablePreviewPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex min-h-[1.5rem] w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        "hover:bg-accent/50 border-dashed hover:border-solid",
        className
      )}
      data-slot="editable-preview"
      {...props}
    />
  );
}

function EditableContext({
  children,
  ...props
}: React.ComponentProps<typeof EditableContextPrimitive>) {
  return (
    <EditableContextPrimitive data-slot="editable-context" {...props}>
      {children}
    </EditableContextPrimitive>
  );
}

function EditableControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableControlPrimitive>) {
  return (
    <EditableControlPrimitive
      className={cn("mt-2 flex items-center gap-2", className)}
      data-slot="editable-control"
      {...props}
    >
      {children}
    </EditableControlPrimitive>
  );
}

function EditableEditTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableEditTriggerPrimitive>) {
  return (
    <EditableEditTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3",
        className
      )}
      data-slot="editable-edit-trigger"
      {...props}
    >
      {children || "Edit"}
    </EditableEditTriggerPrimitive>
  );
}

function EditableSubmitTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableSubmitTriggerPrimitive>) {
  return (
    <EditableSubmitTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3",
        className
      )}
      data-slot="editable-submit-trigger"
      {...props}
    >
      {children || "Save"}
    </EditableSubmitTriggerPrimitive>
  );
}

function EditableCancelTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof EditableCancelTriggerPrimitive>) {
  return (
    <EditableCancelTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-background hover:bg-accent hover:text-accent-foreground h-8 border px-3",
        className
      )}
      data-slot="editable-cancel-trigger"
      {...props}
    >
      {children || "Cancel"}
    </EditableCancelTriggerPrimitive>
  );
}

export {
  Editable,
  EditableLabel,
  EditableArea,
  EditableInput,
  EditablePreview,
  EditableContext,
  EditableControl,
  EditableEditTrigger,
  EditableSubmitTrigger,
  EditableCancelTrigger,
};
