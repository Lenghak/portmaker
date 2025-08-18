import {
  AccordionItemContent as AccordionItemContentPrimitive,
  AccordionItemIndicator as AccordionItemIndicatorPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionItemTrigger as AccordionItemTriggerPrimitive,
  AccordionRoot as AccordionRootPrimitive,
} from "@ark-ui/react/accordion";
import { cn } from "@packages/utils";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import type React from "react";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionRootPrimitive>) {
  return <AccordionRootPrimitive data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionItemPrimitive>) {
  return (
    <AccordionItemPrimitive
      className={cn("border-b last:border-b-0", className)}
      data-slot="accordion-item"
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionItemTriggerPrimitive>) {
  return (
    <AccordionItemTriggerPrimitive
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium outline-none transition-all hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <AccordionItemIndicatorPrimitive className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200">
        <CaretDownIcon className="size-4" />
      </AccordionItemIndicatorPrimitive>
    </AccordionItemTriggerPrimitive>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionItemContentPrimitive>) {
  return (
    <AccordionItemContentPrimitive
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionItemContentPrimitive>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
