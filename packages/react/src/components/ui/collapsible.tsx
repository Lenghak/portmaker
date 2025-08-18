import {
  CollapsibleContent as CollapsibleContentPrimitive,
  CollapsibleIndicator as CollapsibleIndicatorPrimitive,
  CollapsibleRoot as CollapsibleRootPrimitive,
  CollapsibleTrigger as CollapsibleTriggerPrimitive,
} from "@ark-ui/react/collapsible";
import { cn } from "@packages/utils";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import type React from "react";

function Collapsible({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleRootPrimitive>) {
  return (
    <CollapsibleRootPrimitive
      className={cn("w-full", className)}
      data-slot="collapsible"
      {...props}
    >
      {children}
    </CollapsibleRootPrimitive>
  );
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleTriggerPrimitive>) {
  return (
    <CollapsibleTriggerPrimitive
      className={cn(
        "hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex w-full items-center justify-between rounded-md px-4 py-2 text-left font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="collapsible-trigger"
      {...props}
    >
      {children}
    </CollapsibleTriggerPrimitive>
  );
}

function CollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleContentPrimitive>) {
  return (
    <CollapsibleContentPrimitive
      className={cn(
        "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden text-sm transition-all",
        className
      )}
      data-slot="collapsible-content"
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </CollapsibleContentPrimitive>
  );
}

function CollapsibleIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleIndicatorPrimitive>) {
  return (
    <CollapsibleIndicatorPrimitive
      className={cn(
        "text-muted-foreground shrink-0 transition-transform duration-200",
        "data-[state=open]:rotate-180",
        className
      )}
      data-slot="collapsible-indicator"
      {...props}
    >
      {children || <CaretDownIcon className="h-4 w-4" />}
    </CollapsibleIndicatorPrimitive>
  );
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleIndicator,
};
