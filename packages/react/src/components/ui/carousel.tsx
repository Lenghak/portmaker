import {
  CarouselControl as CarouselControlPrimitive,
  CarouselIndicatorGroup as CarouselIndicatorGroupPrimitive,
  CarouselIndicator as CarouselIndicatorPrimitive,
  CarouselItemGroup as CarouselItemGroupPrimitive,
  CarouselItem as CarouselItemPrimitive,
  CarouselNextTrigger as CarouselNextTriggerPrimitive,
  CarouselPrevTrigger as CarouselPrevTriggerPrimitive,
  CarouselRoot as CarouselRootPrimitive,
} from "@ark-ui/react/carousel";
import { cn } from "@packages/utils";
import { CaretLeftIcon } from "@phosphor-icons/react/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/CaretRight";
import type React from "react";

function Carousel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselRootPrimitive>) {
  return (
    <CarouselRootPrimitive
      className={cn("relative", className)}
      data-slot="carousel"
      {...props}
    >
      {children}
    </CarouselRootPrimitive>
  );
}

function CarouselControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselControlPrimitive>) {
  return (
    <CarouselControlPrimitive
      className={cn("flex items-center justify-between", className)}
      data-slot="carousel-control"
      {...props}
    >
      {children}
    </CarouselControlPrimitive>
  );
}

function CarouselPrevTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselPrevTriggerPrimitive>) {
  return (
    <CarouselPrevTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 border",
        className
      )}
      data-slot="carousel-prev-trigger"
      {...props}
    >
      {children || <CaretLeftIcon className="h-4 w-4" />}
      <span className="sr-only">Previous slide</span>
    </CarouselPrevTriggerPrimitive>
  );
}

function CarouselNextTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselNextTriggerPrimitive>) {
  return (
    <CarouselNextTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 border",
        className
      )}
      data-slot="carousel-next-trigger"
      {...props}
    >
      {children || <CaretRightIcon className="h-4 w-4" />}
      <span className="sr-only">Next slide</span>
    </CarouselNextTriggerPrimitive>
  );
}

function CarouselIndicatorGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselIndicatorGroupPrimitive>) {
  return (
    <CarouselIndicatorGroupPrimitive
      className={cn("flex items-center justify-center gap-2", className)}
      data-slot="carousel-indicator-group"
      {...props}
    >
      {children}
    </CarouselIndicatorGroupPrimitive>
  );
}

function CarouselIndicator({
  className,
  index,
  ...props
}: React.ComponentProps<typeof CarouselIndicatorPrimitive>) {
  return (
    <CarouselIndicatorPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground data-[current=true]:bg-primary data-[current=true]:text-primary-foreground h-2 w-2 border",
        className
      )}
      data-slot="carousel-indicator"
      index={index}
      {...props}
    />
  );
}

function CarouselItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselItemGroupPrimitive>) {
  return (
    <CarouselItemGroupPrimitive
      className={cn("flex", className)}
      data-slot="carousel-item-group"
      {...props}
    >
      {children}
    </CarouselItemGroupPrimitive>
  );
}

function CarouselItem({
  className,
  index,
  children,
  ...props
}: React.ComponentProps<typeof CarouselItemPrimitive>) {
  return (
    <CarouselItemPrimitive
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      data-slot="carousel-item"
      index={index}
      {...props}
    >
      {children}
    </CarouselItemPrimitive>
  );
}

export {
  Carousel,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
};
