import {
  PaginationContext as PaginationContextPrimitive,
  PaginationEllipsis as PaginationEllipsisPrimitive,
  PaginationItem as PaginationItemPrimitive,
  PaginationNextTrigger as PaginationNextTriggerPrimitive,
  PaginationPrevTrigger as PaginationPrevTriggerPrimitive,
  PaginationRoot as PaginationRootPrimitive,
  PaginationRootProvider as PaginationRootProviderPrimitive,
} from "@ark-ui/react/pagination";
import { cn } from "@packages/utils";
import { CaretLeft, CaretRight, DotsThree } from "@phosphor-icons/react";
import type React from "react";

function Pagination({
  children,
  ...props
}: React.ComponentProps<typeof PaginationRootPrimitive>) {
  return (
    <PaginationRootPrimitive data-slot="pagination" {...props}>
      {children}
    </PaginationRootPrimitive>
  );
}

function PaginationPrevTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationPrevTriggerPrimitive>) {
  return (
    <PaginationPrevTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3",
        className
      )}
      data-slot="pagination-prev-trigger"
      {...props}
    >
      {children || (
        <>
          <CaretLeft className="h-4 w-4" />
          <span className="hidden sm:block">Previous</span>
        </>
      )}
    </PaginationPrevTriggerPrimitive>
  );
}

function PaginationNextTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationNextTriggerPrimitive>) {
  return (
    <PaginationNextTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3",
        className
      )}
      data-slot="pagination-next-trigger"
      {...props}
    >
      {children || (
        <>
          <span className="hidden sm:block">Next</span>
          <CaretRight className="h-4 w-4" />
        </>
      )}
    </PaginationNextTriggerPrimitive>
  );
}

function PaginationItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationItemPrimitive>) {
  return (
    <PaginationItemPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground h-9 w-9",
        className
      )}
      data-slot="pagination-item"
      {...props}
    >
      {children}
    </PaginationItemPrimitive>
  );
}

function PaginationEllipsis({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationEllipsisPrimitive>) {
  return (
    <PaginationEllipsisPrimitive
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      data-slot="pagination-ellipsis"
      {...props}
    >
      {children || <DotsThree className="h-4 w-4" />}
    </PaginationEllipsisPrimitive>
  );
}

function PaginationContext({
  children,
  ...props
}: React.ComponentProps<typeof PaginationContextPrimitive>) {
  return (
    <PaginationContextPrimitive data-slot="pagination-context" {...props}>
      {children}
    </PaginationContextPrimitive>
  );
}

function PaginationRootProvider({
  children,
  ...props
}: React.ComponentProps<typeof PaginationRootProviderPrimitive>) {
  return (
    <PaginationRootProviderPrimitive
      data-slot="pagination-root-provider"
      {...props}
    >
      {children}
    </PaginationRootProviderPrimitive>
  );
}

export {
  Pagination,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationItem,
  PaginationEllipsis,
  PaginationContext,
  PaginationRootProvider,
};
