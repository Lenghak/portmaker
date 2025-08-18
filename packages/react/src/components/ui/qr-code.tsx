import {
  QrCodeDownloadTrigger as QrCodeDownloadTriggerPrimitive,
  QrCodeFrame as QrCodeFramePrimitive,
  QrCodeOverlay as QrCodeOverlayPrimitive,
  QrCodePattern as QrCodePatternPrimitive,
  QrCodeRoot as QrCodeRootPrimitive,
  QrCodeRootProvider as QrCodeRootProviderPrimitive,
  useQrCode,
} from "@ark-ui/react/qr-code";
import { cn } from "@packages/utils";
import type React from "react";

function QrCode({
  children,
  ...props
}: React.ComponentProps<typeof QrCodeRootPrimitive>) {
  return (
    <QrCodeRootPrimitive data-slot="qr-code" {...props}>
      {children}
    </QrCodeRootPrimitive>
  );
}

function QrCodeFrame({
  className,
  children,
  ...props
}: React.ComponentProps<typeof QrCodeFramePrimitive>) {
  return (
    <QrCodeFramePrimitive
      className={cn("relative", className)}
      data-slot="qr-code-frame"
      {...props}
    >
      {children}
    </QrCodeFramePrimitive>
  );
}

function QrCodePattern({
  className,
  ...props
}: React.ComponentProps<typeof QrCodePatternPrimitive>) {
  return (
    <QrCodePatternPrimitive
      className={cn("", className)}
      data-slot="qr-code-pattern"
      {...props}
    />
  );
}

function QrCodeOverlay({
  className,
  children,
  ...props
}: React.ComponentProps<typeof QrCodeOverlayPrimitive>) {
  return (
    <QrCodeOverlayPrimitive
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        className
      )}
      data-slot="qr-code-overlay"
      {...props}
    >
      {children}
    </QrCodeOverlayPrimitive>
  );
}

function QrCodeDownloadTrigger({
  className,
  children,
  fileName,
  mimeType,
  quality,
  ...props
}: React.ComponentProps<typeof QrCodeDownloadTriggerPrimitive>) {
  return (
    <QrCodeDownloadTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2",
        className
      )}
      data-slot="qr-code-download-trigger"
      fileName={fileName}
      mimeType={mimeType}
      quality={quality}
      {...props}
    >
      {children || "Download"}
    </QrCodeDownloadTriggerPrimitive>
  );
}

function QrCodeRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof QrCodeRootProviderPrimitive>) {
  return (
    <QrCodeRootProviderPrimitive
      data-slot="qr-code-root-provider"
      value={value}
      {...props}
    >
      {children}
    </QrCodeRootProviderPrimitive>
  );
}

export {
  QrCode,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
  QrCodeDownloadTrigger,
  QrCodeRootProvider,
  useQrCode,
};
