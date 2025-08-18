import {
  TabContent as TabContentPrimitive,
  TabIndicator as TabIndicatorPrimitive,
  TabList as TabListPrimitive,
  TabsContext as TabsContextPrimitive,
  TabsRoot as TabsRootPrimitive,
  TabsRootProvider as TabsRootProviderPrimitive,
  TabTrigger as TabTriggerPrimitive,
  useTabs,
} from "@ark-ui/react/tabs";
import { cn } from "@packages/utils";
import type React from "react";

interface TabsProps extends React.ComponentProps<typeof TabsRootPrimitive> {
  variant?: "underline" | "default";
}

function Tabs({ className, variant = "default", ...props }: TabsProps) {
  return (
    <TabsRootPrimitive
      className={cn(
        "group flex flex-col gap-1.5 data-[orientation=vertical]:flex-row",
        className
      )}
      data-slot="tabs"
      data-variant={variant}
      {...props}
    />
  );
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabListPrimitive>) {
  return (
    <TabListPrimitive
      className={cn(
        "text-muted-foreground relative z-0 flex items-center data-[orientation=horizontal]:h-9 data-[orientation=vertical]:h-fit data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-start data-[orientation=horizontal]:justify-center",
        "group-data-[variant=default]:bg-muted group-data-[variant=default]:rounded-lg group-data-[variant=underline]:bg-transparent group-data-[variant=default]:p-[3px] group-data-[variant=underline]:data-[orientation=horizontal]:border-b group-data-[variant=underline]:data-[orientation=vertical]:border-r group-data-[variant=underline]:data-[orientation=horizontal]:py-5 group-data-[variant=underline]:data-[orientation=vertical]:px-1.5",
        className
      )}
      data-slot="tabs-list"
      {...props}
    >
      {children}
    </TabListPrimitive>
  );
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof TabTriggerPrimitive>) {
  return (
    <TabTriggerPrimitive
      className={cn(
        "text-muted-foreground ring-offset-background hover:text-foreground focus-visible:border-ring focus-visible:outline-ring focus-visible:ring-ring/50 data-[selected]:text-foreground flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent text-sm font-medium transition-colors focus-visible:outline-1 focus-visible:ring-[3px] data-[disabled]:pointer-events-none data-[orientation=horizontal]:px-2 data-[orientation=horizontal]:py-1 data-[orientation=vertical]:px-1.5 data-[orientation=vertical]:py-2 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "group-data-[variant=underline]:hover:border-border group-data-[variant=underline]:hover:bg-muted group-data-[variant=underline]:dark:hover:border-input group-data-[variant=underline]:hover:border",
        className
      )}
      data-slot="tabs-trigger"
      value={value}
      {...props}
    >
      {children}
    </TabTriggerPrimitive>
  );
}

function TabsContent({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof TabContentPrimitive>) {
  return (
    <TabContentPrimitive
      className={cn("outline-none", className)}
      data-slot="tabs-content"
      value={value}
      {...props}
    >
      {children}
    </TabContentPrimitive>
  );
}

function TabsIndicator({
  className,
  ...props
}: React.ComponentProps<typeof TabIndicatorPrimitive>) {
  return (
    <TabIndicatorPrimitive
      className={cn(
        "absolute z-[-1] h-[calc(var(--active-tab-height))] w-[var(--active-tab-width)] flex-1 rounded-md transition-all duration-300 ease-out focus-visible:outline-1 focus-visible:ring-[3px] data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:top-1/2 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:top-0 data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=horizontal]:translate-x-[var(--active-tab-left)] data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:translate-y-[var(--active-tab-top)]",
        "group-data-[variant=default]:bg-background group-data-[variant=underline]:after:bg-foreground group-data-[variant=default]:dark:border-input group-data-[variant=default]:border group-data-[variant=underline]:bg-transparent group-data-[variant=default]:shadow-sm group-data-[variant=underline]:after:absolute group-data-[variant=underline]:after:content-[''] group-data-[variant=underline]:data-[orientation=horizontal]:after:-bottom-1.5 group-data-[variant=underline]:data-[orientation=vertical]:after:-right-[7px] group-data-[variant=underline]:data-[orientation=horizontal]:after:h-[2px] group-data-[variant=underline]:data-[orientation=vertical]:after:h-full group-data-[variant=underline]:data-[orientation=horizontal]:after:w-full group-data-[variant=underline]:data-[orientation=vertical]:after:w-[2px]",
        className
      )}
      data-slot="tabs-indicator"
      {...props}
    />
  );
}

function TabsContext({
  children,
  ...props
}: React.ComponentProps<typeof TabsContextPrimitive>) {
  return (
    <TabsContextPrimitive data-slot="tabs-context" {...props}>
      {children}
    </TabsContextPrimitive>
  );
}

function TabsRootProvider({
  children,
  value,
  ...props
}: React.ComponentProps<typeof TabsRootProviderPrimitive>) {
  return (
    <TabsRootProviderPrimitive
      data-slot="tabs-root-provider"
      value={value}
      {...props}
    >
      {children}
    </TabsRootProviderPrimitive>
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
  TabsContext,
  TabsRootProvider,
  useTabs,
};
