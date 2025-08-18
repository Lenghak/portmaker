import {
  ColorPickerAreaBackground as ColorPickerAreaBackgroundPrimitive,
  ColorPickerArea as ColorPickerAreaPrimitive,
  ColorPickerAreaThumb as ColorPickerAreaThumbPrimitive,
  ColorPickerChannelInput as ColorPickerChannelInputPrimitive,
  ColorPickerChannelSlider as ColorPickerChannelSliderPrimitive,
  ColorPickerChannelSliderThumb as ColorPickerChannelSliderThumbPrimitive,
  ColorPickerChannelSliderTrack as ColorPickerChannelSliderTrackPrimitive,
  ColorPickerContent as ColorPickerContentPrimitive,
  ColorPickerControl as ColorPickerControlPrimitive,
  ColorPickerEyeDropperTrigger as ColorPickerEyeDropperTriggerPrimitive,
  ColorPickerFormatSelect as ColorPickerFormatSelectPrimitive,
  ColorPickerFormatTrigger as ColorPickerFormatTriggerPrimitive,
  ColorPickerHiddenInput as ColorPickerHiddenInputPrimitive,
  ColorPickerLabel as ColorPickerLabelPrimitive,
  ColorPickerPositioner as ColorPickerPositionerPrimitive,
  ColorPickerRoot as ColorPickerRootPrimitive,
  ColorPickerSwatchGroup as ColorPickerSwatchGroupPrimitive,
  ColorPickerSwatchIndicator as ColorPickerSwatchIndicatorPrimitive,
  ColorPickerSwatch as ColorPickerSwatchPrimitive,
  ColorPickerSwatchTrigger as ColorPickerSwatchTriggerPrimitive,
  ColorPickerTransparencyGrid as ColorPickerTransparencyGridPrimitive,
  ColorPickerTrigger as ColorPickerTriggerPrimitive,
  ColorPickerValueSwatch as ColorPickerValueSwatchPrimitive,
  ColorPickerValueText as ColorPickerValueTextPrimitive,
  ColorPickerView as ColorPickerViewPrimitive,
} from "@ark-ui/react/color-picker";
import { cn } from "@packages/utils";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { EyeIcon } from "@phosphor-icons/react/Eye";
import React from "react";

// Type declarations for EyeDropper API
interface EyeDropperConstructor {
  new (): {
    open(): Promise<{ sRGBHex: string }>;
  };
}

// Arc browser-like color presets
const ARC_COLOR_PRESETS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#85C1E9",
  "#D7BDE2",
  "#FAD7A0",
  "#ABEBC6",
  "#F5B7B1",
  "#AED6F1",
  "#D2B4DE",
];

// Enhanced color picker with Arc browser-like features
function ColorPicker({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerRootPrimitive>) {
  return (
    <ColorPickerRootPrimitive
      className={cn("w-full", className)}
      data-slot="color-picker"
      {...props}
    >
      {children}
    </ColorPickerRootPrimitive>
  );
}

function ColorPickerLabel({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerLabelPrimitive>) {
  return (
    <ColorPickerLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="color-picker-label"
      {...props}
    />
  );
}

function ColorPickerControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerControlPrimitive>) {
  return (
    <ColorPickerControlPrimitive
      className={cn("flex items-center gap-2", className)}
      data-slot="color-picker-control"
      {...props}
    >
      {children}
    </ColorPickerControlPrimitive>
  );
}

function ColorPickerChannelInput({
  className,
  channel,
  ...props
}: React.ComponentProps<typeof ColorPickerChannelInputPrimitive>) {
  return (
    <ColorPickerChannelInputPrimitive
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-8 w-16 rounded-md border px-2 py-1 font-mono text-xs focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="color-picker-channel-input"
      channel={channel}
      {...props}
    />
  );
}

function ColorPickerValueText({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerValueTextPrimitive>) {
  return (
    <ColorPickerValueTextPrimitive
      className={cn("select-all font-mono text-sm", className)}
      data-slot="color-picker-value-text"
      {...props}
    />
  );
}

function ColorPickerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerTriggerPrimitive>) {
  return (
    <ColorPickerTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 border",
        className
      )}
      data-slot="color-picker-trigger"
      {...props}
    >
      {children}
    </ColorPickerTriggerPrimitive>
  );
}

function ColorPickerTransparencyGrid({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerTransparencyGridPrimitive>) {
  return (
    <ColorPickerTransparencyGridPrimitive
      className={cn("rounded-md", className)}
      data-slot="color-picker-transparency-grid"
      {...props}
    />
  );
}

function ColorPickerValueSwatch({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerValueSwatchPrimitive>) {
  return (
    <ColorPickerValueSwatchPrimitive
      className={cn("rounded-md border shadow-sm", className)}
      data-slot="color-picker-value-swatch"
      {...props}
    />
  );
}

function ColorPickerPositioner({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerPositionerPrimitive>) {
  return (
    <ColorPickerPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="color-picker-positioner"
      {...props}
    />
  );
}

function ColorPickerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerContentPrimitive>) {
  return (
    <ColorPickerContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-72 rounded-lg border p-4 shadow-lg backdrop-blur-sm",
        className
      )}
      data-slot="color-picker-content"
      {...props}
    >
      {children}
    </ColorPickerContentPrimitive>
  );
}

function ColorPickerFormatTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerFormatTriggerPrimitive>) {
  return (
    <ColorPickerFormatTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 gap-1 px-3",
        className
      )}
      data-slot="color-picker-format-trigger"
      {...props}
    >
      {children}
      <CaretDownIcon className="h-3 w-3" />
    </ColorPickerFormatTriggerPrimitive>
  );
}

function ColorPickerFormatSelect({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerFormatSelectPrimitive>) {
  return (
    <ColorPickerFormatSelectPrimitive
      className={cn("w-full", className)}
      data-slot="color-picker-format-select"
      {...props}
    />
  );
}

function ColorPickerArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerAreaPrimitive>) {
  return (
    <ColorPickerAreaPrimitive
      className={cn(
        "relative h-40 w-full overflow-hidden rounded-lg",
        className
      )}
      data-slot="color-picker-area"
      {...props}
    >
      {children}
    </ColorPickerAreaPrimitive>
  );
}

function ColorPickerAreaBackground({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerAreaBackgroundPrimitive>) {
  return (
    <ColorPickerAreaBackgroundPrimitive
      className={cn("absolute inset-0", className)}
      data-slot="color-picker-area-background"
      {...props}
    />
  );
}

function ColorPickerAreaThumb({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerAreaThumbPrimitive>) {
  return (
    <ColorPickerAreaThumbPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "h-4 w-4",
        className
      )}
      data-slot="color-picker-area-thumb"
      {...props}
    />
  );
}

function ColorPickerChannelSlider({
  className,
  channel,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerChannelSliderPrimitive>) {
  return (
    <ColorPickerChannelSliderPrimitive
      className={cn("relative h-6 w-full", className)}
      data-slot="color-picker-channel-slider"
      channel={channel}
      {...props}
    >
      {children}
    </ColorPickerChannelSliderPrimitive>
  );
}

function ColorPickerChannelSliderTrack({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerChannelSliderTrackPrimitive>) {
  return (
    <ColorPickerChannelSliderTrackPrimitive
      className={cn("absolute inset-0 rounded-md", className)}
      data-slot="color-picker-channel-slider-track"
      {...props}
    />
  );
}

function ColorPickerChannelSliderThumb({
  className,
  ...props
}: React.ComponentProps<typeof ColorPickerChannelSliderThumbPrimitive>) {
  return (
    <ColorPickerChannelSliderThumbPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "h-5 w-5",
        className
      )}
      data-slot="color-picker-channel-slider-thumb"
      {...props}
    />
  );
}

function ColorPickerSwatchGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerSwatchGroupPrimitive>) {
  return (
    <ColorPickerSwatchGroupPrimitive
      className={cn("grid grid-cols-10 gap-1", className)}
      data-slot="color-picker-swatch-group"
      {...props}
    >
      {children}
    </ColorPickerSwatchGroupPrimitive>
  );
}

function ColorPickerSwatchTrigger({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerSwatchTriggerPrimitive>) {
  return (
    <ColorPickerSwatchTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "h-6 w-6",
        className
      )}
      data-slot="color-picker-swatch-trigger"
      value={value}
      {...props}
    >
      {children}
    </ColorPickerSwatchTriggerPrimitive>
  );
}

function ColorPickerSwatch({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerSwatchPrimitive>) {
  return (
    <ColorPickerSwatchPrimitive
      className={cn("h-full w-full rounded-md border shadow-sm", className)}
      data-slot="color-picker-swatch"
      value={value}
      {...props}
    >
      {children}
    </ColorPickerSwatchPrimitive>
  );
}

function ColorPickerSwatchIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerSwatchIndicatorPrimitive>) {
  return (
    <ColorPickerSwatchIndicatorPrimitive
      className={cn("flex items-center justify-center text-white", className)}
      data-slot="color-picker-swatch-indicator"
      {...props}
    >
      {children || <CheckIcon className="h-3 w-3" />}
    </ColorPickerSwatchIndicatorPrimitive>
  );
}

function ColorPickerView({
  className,
  format,
  children,
  ...props
}: React.ComponentProps<typeof ColorPickerViewPrimitive>) {
  return (
    <ColorPickerViewPrimitive
      className={cn("space-y-3", className)}
      data-slot="color-picker-view"
      format={format}
      {...props}
    >
      {children}
    </ColorPickerViewPrimitive>
  );
}

// Enhanced eye dropper with Arc browser-like functionality
function ColorPickerEyeDropperTrigger({
  className,
  children,
  onColorPicked,
  ...props
}: React.ComponentProps<typeof ColorPickerEyeDropperTriggerPrimitive> & {
  onColorPicked?: (color: string) => void;
}) {
  const handleEyeDropper = React.useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const EyeDropper = (globalThis as any).EyeDropper as EyeDropperConstructor;
    if (!EyeDropper) {
      console.warn("EyeDropper API not supported in this browser");
      return;
    }

    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      onColorPicked?.(result.sRGBHex);
    } catch (error) {
      // User cancelled or error occurred
      console.log("EyeDropper cancelled or failed:", error);
    }
  }, [onColorPicked]);

  return (
    <ColorPickerEyeDropperTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 gap-2 px-3",
        className
      )}
      data-slot="color-picker-eye-dropper-trigger"
      onClick={handleEyeDropper}
      {...props}
    >
      {children || (
        <>
          <EyeIcon className="h-4 w-4" />
          <span className="text-xs">Pick Color</span>
        </>
      )}
    </ColorPickerEyeDropperTriggerPrimitive>
  );
}

function ColorPickerHiddenInput({
  ...props
}: React.ComponentProps<typeof ColorPickerHiddenInputPrimitive>) {
  return (
    <ColorPickerHiddenInputPrimitive
      data-slot="color-picker-hidden-input"
      {...props}
    />
  );
}

// Arc browser-like color presets component
function ColorPickerPresets({
  className,
  presets = ARC_COLOR_PRESETS,
  onColorSelect,
  ...props
}: React.ComponentProps<"div"> & {
  presets?: string[];
  onColorSelect?: (color: string) => void;
}) {
  return (
    <div
      className={cn("space-y-2", className)}
      data-slot="color-picker-presets"
      {...props}
    >
      <div className="text-muted-foreground text-xs font-medium">Presets</div>
      <div className="grid grid-cols-10 gap-1">
        {presets.map((color, index) => (
          <button
            key={index}
            className="focus:ring-ring h-6 w-6 rounded-md border shadow-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect?.(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
}

export {
  ColorPicker,
  ColorPickerLabel,
  ColorPickerControl,
  ColorPickerChannelInput,
  ColorPickerValueText,
  ColorPickerTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerValueSwatch,
  ColorPickerPositioner,
  ColorPickerContent,
  ColorPickerFormatTrigger,
  ColorPickerFormatSelect,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelSlider,
  ColorPickerChannelSliderTrack,
  ColorPickerChannelSliderThumb,
  ColorPickerSwatchGroup,
  ColorPickerSwatchTrigger,
  ColorPickerSwatch,
  ColorPickerSwatchIndicator,
  ColorPickerView,
  ColorPickerEyeDropperTrigger,
  ColorPickerHiddenInput,
  ColorPickerPresets,
};
