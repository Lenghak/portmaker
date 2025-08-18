import {
  FileUploadContext as FileUploadContextPrimitive,
  FileUploadHiddenInput as FileUploadHiddenInputPrimitive,
  FileUploadItemDeleteTrigger as FileUploadItemDeleteTriggerPrimitive,
  FileUploadItemGroup as FileUploadItemGroupPrimitive,
  FileUploadItemName as FileUploadItemNamePrimitive,
  FileUploadItemPreviewImage as FileUploadItemPreviewImagePrimitive,
  FileUploadItemPreview as FileUploadItemPreviewPrimitive,
  FileUploadItem as FileUploadItemPrimitive,
  FileUploadItemSizeText as FileUploadItemSizeTextPrimitive,
  FileUploadLabel as FileUploadLabelPrimitive,
  FileUploadRoot as FileUploadRootPrimitive,
  FileUploadTrigger as FileUploadTriggerPrimitive,
} from "@ark-ui/react/file-upload";
import { cn } from "@packages/utils";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function FileUpload({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FileUploadRootPrimitive>) {
  return (
    <FileUploadRootPrimitive
      className={cn("w-full", className)}
      data-slot="file-upload"
      {...props}
    >
      {children}
    </FileUploadRootPrimitive>
  );
}

function FileUploadLabel({
  className,
  ...props
}: React.ComponentProps<typeof FileUploadLabelPrimitive>) {
  return (
    <FileUploadLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="file-upload-label"
      {...props}
    />
  );
}

function FileUploadTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FileUploadTriggerPrimitive>) {
  return (
    <FileUploadTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
        className
      )}
      data-slot="file-upload-trigger"
      {...props}
    >
      {children || "Choose file(s)"}
    </FileUploadTriggerPrimitive>
  );
}

function FileUploadItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FileUploadItemGroupPrimitive>) {
  return (
    <FileUploadItemGroupPrimitive
      className={cn("mt-4 space-y-2", className)}
      data-slot="file-upload-item-group"
      {...props}
    >
      {children}
    </FileUploadItemGroupPrimitive>
  );
}

function FileUploadItem({
  className,
  file,
  children,
  ...props
}: React.ComponentProps<typeof FileUploadItemPrimitive>) {
  return (
    <FileUploadItemPrimitive
      className={cn(
        "border-input bg-background flex items-center gap-3 rounded-md border p-3",
        className
      )}
      data-slot="file-upload-item"
      file={file}
      {...props}
    >
      {children}
    </FileUploadItemPrimitive>
  );
}

function FileUploadItemPreview({
  className,
  type = ".*",
  children,
  ...props
}: React.ComponentProps<typeof FileUploadItemPreviewPrimitive>) {
  return (
    <FileUploadItemPreviewPrimitive
      className={cn("flex items-center justify-center", className)}
      data-slot="file-upload-item-preview"
      type={type}
      {...props}
    >
      {children}
    </FileUploadItemPreviewPrimitive>
  );
}

function FileUploadItemPreviewImage({
  className,
  ...props
}: React.ComponentProps<typeof FileUploadItemPreviewImagePrimitive>) {
  return (
    <FileUploadItemPreviewImagePrimitive
      className={cn("h-10 w-10 rounded object-cover", className)}
      data-slot="file-upload-item-preview-image"
      {...props}
    />
  );
}

function FileUploadItemName({
  className,
  ...props
}: React.ComponentProps<typeof FileUploadItemNamePrimitive>) {
  return (
    <FileUploadItemNamePrimitive
      className={cn("flex-1 text-sm font-medium", className)}
      data-slot="file-upload-item-name"
      {...props}
    />
  );
}

function FileUploadItemSizeText({
  className,
  ...props
}: React.ComponentProps<typeof FileUploadItemSizeTextPrimitive>) {
  return (
    <FileUploadItemSizeTextPrimitive
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="file-upload-item-size-text"
      {...props}
    />
  );
}

function FileUploadItemDeleteTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FileUploadItemDeleteTriggerPrimitive>) {
  return (
    <FileUploadItemDeleteTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-6 w-6 p-0",
        className
      )}
      data-slot="file-upload-item-delete-trigger"
      {...props}
    >
      {children || <XIcon className="h-4 w-4" />}
    </FileUploadItemDeleteTriggerPrimitive>
  );
}

function FileUploadHiddenInput({
  ...props
}: React.ComponentProps<typeof FileUploadHiddenInputPrimitive>) {
  return (
    <FileUploadHiddenInputPrimitive
      data-slot="file-upload-hidden-input"
      {...props}
    />
  );
}

function FileUploadContext({
  children,
  ...props
}: React.ComponentProps<typeof FileUploadContextPrimitive>) {
  return (
    <FileUploadContextPrimitive data-slot="file-upload-context" {...props}>
      {children}
    </FileUploadContextPrimitive>
  );
}

export {
  FileUpload,
  FileUploadLabel,
  FileUploadTrigger,
  FileUploadItemGroup,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadItemDeleteTrigger,
  FileUploadHiddenInput,
  FileUploadContext,
};
