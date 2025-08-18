import {
  StepsCompletedContent as StepsCompletedContentPrimitive,
  StepsContent as StepsContentPrimitive,
  StepsIndicator as StepsIndicatorPrimitive,
  StepsItem as StepsItemPrimitive,
  StepsList as StepsListPrimitive,
  StepsNextTrigger as StepsNextTriggerPrimitive,
  StepsPrevTrigger as StepsPrevTriggerPrimitive,
  StepsProgress as StepsProgressPrimitive,
  StepsRoot as StepsRootPrimitive,
  StepsRootProvider as StepsRootProviderPrimitive,
  StepsSeparator as StepsSeparatorPrimitive,
  StepsTrigger as StepsTriggerPrimitive,
  useSteps,
} from "@ark-ui/react/steps";
import { cn } from "@packages/utils";
import type React from "react";

function Steps({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsRootPrimitive>) {
  return (
    <StepsRootPrimitive
      className={cn("flex w-full flex-col gap-4", className)}
      data-slot="steps"
      {...props}
    >
      {children}
    </StepsRootPrimitive>
  );
}

function StepsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsListPrimitive>) {
  return (
    <StepsListPrimitive
      className={cn("flex w-full items-center gap-2", className)}
      data-slot="steps-list"
      {...props}
    >
      {children}
    </StepsListPrimitive>
  );
}

function StepsItem({
  className,
  index,
  children,
  ...props
}: React.ComponentProps<typeof StepsItemPrimitive>) {
  return (
    <StepsItemPrimitive
      className={cn("flex items-center gap-2", className)}
      data-slot="steps-item"
      index={index}
      {...props}
    >
      {children}
    </StepsItemPrimitive>
  );
}

function StepsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsTriggerPrimitive>) {
  return (
    <StepsTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "data-[current]:bg-accent data-[current]:text-accent-foreground",
        className
      )}
      data-slot="steps-trigger"
      {...props}
    >
      {children}
    </StepsTriggerPrimitive>
  );
}

function StepsIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsIndicatorPrimitive>) {
  return (
    <StepsIndicatorPrimitive
      className={cn(
        "grid size-6 place-items-center rounded-full border",
        "data-[complete]:bg-primary data-[complete]:text-primary-foreground",
        className
      )}
      data-slot="steps-indicator"
      {...props}
    >
      {children}
    </StepsIndicatorPrimitive>
  );
}

function StepsSeparator({
  className,
  ...props
}: React.ComponentProps<typeof StepsSeparatorPrimitive>) {
  return (
    <StepsSeparatorPrimitive
      className={cn("bg-border h-0.5 w-6 flex-1 rounded", className)}
      data-slot="steps-separator"
      {...props}
    />
  );
}

function StepsContent({
  className,
  index,
  children,
  ...props
}: React.ComponentProps<typeof StepsContentPrimitive>) {
  return (
    <StepsContentPrimitive
      className={cn("rounded-md border p-4", className)}
      data-slot="steps-content"
      index={index}
      {...props}
    >
      {children}
    </StepsContentPrimitive>
  );
}

function StepsCompletedContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsCompletedContentPrimitive>) {
  return (
    <StepsCompletedContentPrimitive
      className={cn("rounded-md border p-4", className)}
      data-slot="steps-completed-content"
      {...props}
    >
      {children}
    </StepsCompletedContentPrimitive>
  );
}

function StepsPrevTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsPrevTriggerPrimitive>) {
  return (
    <StepsPrevTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-background hover:bg-accent hover:text-accent-foreground border",
        className
      )}
      data-slot="steps-prev-trigger"
      {...props}
    >
      {children || "Back"}
    </StepsPrevTriggerPrimitive>
  );
}

function StepsNextTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof StepsNextTriggerPrimitive>) {
  return (
    <StepsNextTriggerPrimitive
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      data-slot="steps-next-trigger"
      {...props}
    >
      {children || "Next"}
    </StepsNextTriggerPrimitive>
  );
}

function StepsProgress({
  className,
  ...props
}: React.ComponentProps<typeof StepsProgressPrimitive>) {
  return (
    <StepsProgressPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="steps-progress"
      {...props}
    />
  );
}

function StepsRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof StepsRootProviderPrimitive>) {
  return (
    <StepsRootProviderPrimitive
      data-slot="steps-root-provider"
      value={value}
      {...props}
    >
      {children}
    </StepsRootProviderPrimitive>
  );
}

export {
  Steps,
  StepsList,
  StepsItem,
  StepsTrigger,
  StepsIndicator,
  StepsSeparator,
  StepsContent,
  StepsCompletedContent,
  StepsPrevTrigger,
  StepsNextTrigger,
  StepsProgress,
  StepsRootProvider,
  useSteps,
};
