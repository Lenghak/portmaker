import {
  TimerActionTrigger as TimerActionTriggerPrimitive,
  TimerArea as TimerAreaPrimitive,
  TimerContext as TimerContextPrimitive,
  TimerControl as TimerControlPrimitive,
  TimerItem as TimerItemPrimitive,
  TimerRoot as TimerRootPrimitive,
  TimerRootProvider as TimerRootProviderPrimitive,
  TimerSeparator as TimerSeparatorPrimitive,
  useTimer,
} from "@ark-ui/react/timer";
import { cn } from "@packages/utils";
import { ArrowClockwise, Pause, Play } from "@phosphor-icons/react";
import type React from "react";

function Timer({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TimerRootPrimitive>) {
  return (
    <TimerRootPrimitive
      className={cn("w-full", className)}
      data-slot="timer"
      {...props}
    >
      {children}
    </TimerRootPrimitive>
  );
}

function TimerArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TimerAreaPrimitive>) {
  return (
    <TimerAreaPrimitive
      className={cn("flex items-center justify-center gap-2", className)}
      data-slot="timer-area"
      {...props}
    >
      {children}
    </TimerAreaPrimitive>
  );
}

function TimerItem({
  className,
  type,
  children,
  ...props
}: React.ComponentProps<typeof TimerItemPrimitive>) {
  return (
    <TimerItemPrimitive
      className={cn(
        "bg-background flex flex-col items-center justify-center rounded-md border px-3 py-2 text-center",
        className
      )}
      data-slot="timer-item"
      type={type}
      {...props}
    >
      {children}
    </TimerItemPrimitive>
  );
}

function TimerSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TimerSeparatorPrimitive>) {
  return (
    <TimerSeparatorPrimitive
      className={cn("text-muted-foreground text-lg font-medium", className)}
      data-slot="timer-separator"
      {...props}
    >
      {children || ":"}
    </TimerSeparatorPrimitive>
  );
}

function TimerControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TimerControlPrimitive>) {
  return (
    <TimerControlPrimitive
      className={cn("flex items-center justify-center gap-2", className)}
      data-slot="timer-control"
      {...props}
    >
      {children}
    </TimerControlPrimitive>
  );
}

function TimerActionTrigger({
  className,
  action,
  children,
  ...props
}: React.ComponentProps<typeof TimerActionTriggerPrimitive>) {
  const getIcon = () => {
    switch (action) {
      case "start":
      case "resume":
        return <Play className="h-4 w-4" />;
      case "pause":
        return <Pause className="h-4 w-4" />;
      case "reset":
        return <ArrowClockwise className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getText = () => {
    switch (action) {
      case "start":
        return "Start";
      case "resume":
        return "Resume";
      case "pause":
        return "Pause";
      case "reset":
        return "Reset";
      default:
        return action;
    }
  };

  return (
    <TimerActionTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-background hover:bg-accent hover:text-accent-foreground h-9 border px-3",
        className
      )}
      data-slot="timer-action-trigger"
      action={action}
      {...props}
    >
      {children || (
        <>
          {getIcon()}
          <span className="ml-2">{getText()}</span>
        </>
      )}
    </TimerActionTriggerPrimitive>
  );
}

function TimerContext({
  children,
  ...props
}: React.ComponentProps<typeof TimerContextPrimitive>) {
  return (
    <TimerContextPrimitive data-slot="timer-context" {...props}>
      {children}
    </TimerContextPrimitive>
  );
}

function TimerRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof TimerRootProviderPrimitive>) {
  return (
    <TimerRootProviderPrimitive
      data-slot="timer-root-provider"
      value={value}
      {...props}
    >
      {children}
    </TimerRootProviderPrimitive>
  );
}

export {
  Timer,
  TimerArea,
  TimerItem,
  TimerSeparator,
  TimerControl,
  TimerActionTrigger,
  TimerContext,
  TimerRootProvider,
  useTimer,
};
