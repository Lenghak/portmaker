import {
  ToggleGroupItem as ToggleGroupItemPrimitive,
  ToggleGroupRoot as ToggleGroupRootPrimitive,
  ToggleGroupRootProvider as ToggleGroupRootProviderPrimitive,
  useToggleGroup,
} from "@ark-ui/react/toggle-group";
import { cn } from "@packages/utils";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupRootPrimitive> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupRootPrimitive
      className={cn(
        "group/toggle-group data-[variant=outline]:shadow-xs flex w-fit items-center rounded-md",
        className
      )}
      data-size={size}
      data-slot="toggle-group"
      data-variant={variant}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupRootPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupItemPrimitive> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupItemPrimitive
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      data-size={context.size || size}
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      {...props}
    >
      {children}
    </ToggleGroupItemPrimitive>
  );
}

function ToggleGroupRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupRootProviderPrimitive>) {
  return (
    <ToggleGroupRootProviderPrimitive
      data-slot="toggle-group-root-provider"
      {...props}
    >
      {children}
    </ToggleGroupRootProviderPrimitive>
  );
}

export {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupRootProvider,
  useToggleGroup,
};
