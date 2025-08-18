import {
  TagsInputClearTrigger as TagsInputClearTriggerPrimitive,
  TagsInputContext as TagsInputContextPrimitive,
  TagsInputControl as TagsInputControlPrimitive,
  TagsInputHiddenInput as TagsInputHiddenInputPrimitive,
  TagsInputInput as TagsInputInputPrimitive,
  TagsInputItemContext as TagsInputItemContextPrimitive,
  TagsInputItemDeleteTrigger as TagsInputItemDeleteTriggerPrimitive,
  TagsInputItemInput as TagsInputItemInputPrimitive,
  TagsInputItemPreview as TagsInputItemPreviewPrimitive,
  TagsInputItem as TagsInputItemPrimitive,
  TagsInputItemText as TagsInputItemTextPrimitive,
  TagsInputLabel as TagsInputLabelPrimitive,
  TagsInputRoot as TagsInputRootPrimitive,
  TagsInputRootProvider as TagsInputRootProviderPrimitive,
  useTagsInput,
} from "@ark-ui/react/tags-input";
import { cn } from "@packages/utils";
import { X } from "@phosphor-icons/react";
import type React from "react";

function TagsInput({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputRootPrimitive>) {
  return (
    <TagsInputRootPrimitive
      className={cn("w-full", className)}
      data-slot="tags-input"
      {...props}
    >
      {children}
    </TagsInputRootPrimitive>
  );
}

function TagsInputLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputLabelPrimitive>) {
  return (
    <TagsInputLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="tags-input-label"
      {...props}
    >
      {children}
    </TagsInputLabelPrimitive>
  );
}

function TagsInputControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputControlPrimitive>) {
  return (
    <TagsInputControlPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex min-h-9 w-full flex-wrap items-center gap-1 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="tags-input-control"
      {...props}
    >
      {children}
    </TagsInputControlPrimitive>
  );
}

function TagsInputInput({
  className,
  ...props
}: React.ComponentProps<typeof TagsInputInputPrimitive>) {
  return (
    <TagsInputInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="tags-input-input"
      {...props}
    />
  );
}

function TagsInputItem({
  className,
  index,
  value,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputItemPrimitive>) {
  return (
    <TagsInputItemPrimitive
      className={cn("flex items-center gap-1", className)}
      data-slot="tags-input-item"
      index={index}
      value={value}
      {...props}
    >
      {children}
    </TagsInputItemPrimitive>
  );
}

function TagsInputItemPreview({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputItemPreviewPrimitive>) {
  return (
    <TagsInputItemPreviewPrimitive
      className={cn(
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors",
        className
      )}
      data-slot="tags-input-item-preview"
      {...props}
    >
      {children}
    </TagsInputItemPreviewPrimitive>
  );
}

function TagsInputItemText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputItemTextPrimitive>) {
  return (
    <TagsInputItemTextPrimitive
      className={cn("text-sm", className)}
      data-slot="tags-input-item-text"
      {...props}
    >
      {children}
    </TagsInputItemTextPrimitive>
  );
}

function TagsInputItemInput({
  className,
  ...props
}: React.ComponentProps<typeof TagsInputItemInputPrimitive>) {
  return (
    <TagsInputItemInputPrimitive
      className={cn("bg-transparent text-sm outline-none", className)}
      data-slot="tags-input-item-input"
      {...props}
    />
  );
}

function TagsInputItemDeleteTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputItemDeleteTriggerPrimitive>) {
  return (
    <TagsInputItemDeleteTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-destructive hover:text-destructive-foreground h-4 w-4 p-0",
        className
      )}
      data-slot="tags-input-item-delete-trigger"
      {...props}
    >
      {children || <X className="h-3 w-3" />}
    </TagsInputItemDeleteTriggerPrimitive>
  );
}

function TagsInputClearTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TagsInputClearTriggerPrimitive>) {
  return (
    <TagsInputClearTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 px-3",
        className
      )}
      data-slot="tags-input-clear-trigger"
      {...props}
    >
      {children || "Clear all"}
    </TagsInputClearTriggerPrimitive>
  );
}

function TagsInputHiddenInput({
  ...props
}: React.ComponentProps<typeof TagsInputHiddenInputPrimitive>) {
  return (
    <TagsInputHiddenInputPrimitive
      data-slot="tags-input-hidden-input"
      {...props}
    />
  );
}

function TagsInputContext({
  children,
  ...props
}: React.ComponentProps<typeof TagsInputContextPrimitive>) {
  return (
    <TagsInputContextPrimitive data-slot="tags-input-context" {...props}>
      {children}
    </TagsInputContextPrimitive>
  );
}

function TagsInputItemContext({
  children,
  ...props
}: React.ComponentProps<typeof TagsInputItemContextPrimitive>) {
  return (
    <TagsInputItemContextPrimitive
      data-slot="tags-input-item-context"
      {...props}
    >
      {children}
    </TagsInputItemContextPrimitive>
  );
}

function TagsInputRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof TagsInputRootProviderPrimitive>) {
  return (
    <TagsInputRootProviderPrimitive
      data-slot="tags-input-root-provider"
      value={value}
      {...props}
    >
      {children}
    </TagsInputRootProviderPrimitive>
  );
}

export {
  TagsInput,
  TagsInputLabel,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputItemInput,
  TagsInputItemDeleteTrigger,
  TagsInputClearTrigger,
  TagsInputHiddenInput,
  TagsInputContext,
  TagsInputItemContext,
  TagsInputRootProvider,
  useTagsInput,
};
