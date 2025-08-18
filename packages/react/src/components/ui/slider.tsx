import {
  SliderControl as SliderControlPrimitive,
  SliderHiddenInput as SliderHiddenInputPrimitive,
  SliderLabel as SliderLabelPrimitive,
  SliderMarkerGroup as SliderMarkerGroupPrimitive,
  SliderMarker as SliderMarkerPrimitive,
  SliderRange as SliderRangePrimitive,
  SliderRoot as SliderRootPrimitive,
  SliderRootProvider as SliderRootProviderPrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
  SliderValueText as SliderValueTextPrimitive,
  useSlider,
} from "@ark-ui/react/slider";
import { cn } from "@packages/utils";
import type React from "react";

function Slider({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SliderRootPrimitive>) {
  return (
    <SliderRootPrimitive
      className={cn(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
        className
      )}
      data-slot="slider"
      {...props}
    >
      {children}
    </SliderRootPrimitive>
  );
}

function SliderLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SliderLabelPrimitive>) {
  return (
    <SliderLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="slider-label"
      {...props}
    >
      {children}
    </SliderLabelPrimitive>
  );
}

function SliderValueText({
  className,
  ...props
}: React.ComponentProps<typeof SliderValueTextPrimitive>) {
  return (
    <SliderValueTextPrimitive
      className={cn("text-sm font-medium", className)}
      data-slot="slider-value-text"
      {...props}
    />
  );
}

function SliderControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SliderControlPrimitive>) {
  return (
    <SliderControlPrimitive
      className={cn("relative flex w-full items-center", className)}
      data-slot="slider-control"
      {...props}
    >
      {children}
    </SliderControlPrimitive>
  );
}

function SliderTrack({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SliderTrackPrimitive>) {
  return (
    <SliderTrackPrimitive
      className={cn(
        "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5",
        className
      )}
      data-slot="slider-track"
      {...props}
    >
      {children}
    </SliderTrackPrimitive>
  );
}

function SliderRange({
  className,
  ...props
}: React.ComponentProps<typeof SliderRangePrimitive>) {
  return (
    <SliderRangePrimitive
      className={cn(
        "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
        className
      )}
      data-slot="slider-range"
      {...props}
    />
  );
}

function SliderThumb({
  className,
  index,
  children,
  ...props
}: React.ComponentProps<typeof SliderThumbPrimitive>) {
  return (
    <SliderThumbPrimitive
      className={cn(
        "border-primary bg-background ring-ring/50 focus-visible:outline-hidden block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="slider-thumb"
      index={index}
      {...props}
    >
      {children}
    </SliderThumbPrimitive>
  );
}

function SliderHiddenInput({
  ...props
}: React.ComponentProps<typeof SliderHiddenInputPrimitive>) {
  return (
    <SliderHiddenInputPrimitive data-slot="slider-hidden-input" {...props} />
  );
}

function SliderMarkerGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SliderMarkerGroupPrimitive>) {
  return (
    <SliderMarkerGroupPrimitive
      className={cn("relative mt-2 flex w-full justify-between", className)}
      data-slot="slider-marker-group"
      {...props}
    >
      {children}
    </SliderMarkerGroupPrimitive>
  );
}

function SliderMarker({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof SliderMarkerPrimitive>) {
  return (
    <SliderMarkerPrimitive
      className={cn(
        "text-muted-foreground text-xs data-[disabled=true]:opacity-50",
        className
      )}
      data-slot="slider-marker"
      value={value}
      {...props}
    >
      {children}
    </SliderMarkerPrimitive>
  );
}

function SliderRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof SliderRootProviderPrimitive>) {
  return (
    <SliderRootProviderPrimitive
      data-slot="slider-root-provider"
      value={value}
      {...props}
    >
      {children}
    </SliderRootProviderPrimitive>
  );
}

export {
  Slider,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
  SliderRootProvider,
  useSlider,
};
