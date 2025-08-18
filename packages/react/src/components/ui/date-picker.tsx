import {
  DatePickerClearTrigger as DatePickerClearTriggerPrimitive,
  DatePickerContent as DatePickerContentPrimitive,
  DatePickerContext as DatePickerContextPrimitive,
  DatePickerControl as DatePickerControlPrimitive,
  DatePickerInput as DatePickerInputPrimitive,
  DatePickerLabel as DatePickerLabelPrimitive,
  DatePickerMonthSelect as DatePickerMonthSelectPrimitive,
  DatePickerNextTrigger as DatePickerNextTriggerPrimitive,
  DatePickerPositioner as DatePickerPositionerPrimitive,
  DatePickerPrevTrigger as DatePickerPrevTriggerPrimitive,
  DatePickerRangeText as DatePickerRangeTextPrimitive,
  DatePickerRoot as DatePickerRootPrimitive,
  DatePickerTableBody as DatePickerTableBodyPrimitive,
  DatePickerTableCell as DatePickerTableCellPrimitive,
  DatePickerTableCellTrigger as DatePickerTableCellTriggerPrimitive,
  DatePickerTableHeader as DatePickerTableHeaderPrimitive,
  DatePickerTableHead as DatePickerTableHeadPrimitive,
  DatePickerTable as DatePickerTablePrimitive,
  DatePickerTableRow as DatePickerTableRowPrimitive,
  DatePickerTrigger as DatePickerTriggerPrimitive,
  DatePickerViewControl as DatePickerViewControlPrimitive,
  DatePickerView as DatePickerViewPrimitive,
  DatePickerViewTrigger as DatePickerViewTriggerPrimitive,
  DatePickerYearSelect as DatePickerYearSelectPrimitive,
} from "@ark-ui/react/date-picker";
import { cn } from "@packages/utils";
import { CalendarIcon } from "@phosphor-icons/react/Calendar";
import { CaretLeftIcon } from "@phosphor-icons/react/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/CaretRight";
import { XIcon } from "@phosphor-icons/react/X";
import type React from "react";

function DatePicker({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerRootPrimitive>) {
  return (
    <DatePickerRootPrimitive
      className={cn("w-full", className)}
      data-slot="date-picker"
      {...props}
    >
      {children}
    </DatePickerRootPrimitive>
  );
}

function DatePickerLabel({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerLabelPrimitive>) {
  return (
    <DatePickerLabelPrimitive
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      data-slot="date-picker-label"
      {...props}
    />
  );
}

function DatePickerControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerControlPrimitive>) {
  return (
    <DatePickerControlPrimitive
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="date-picker-control"
      {...props}
    >
      {children}
    </DatePickerControlPrimitive>
  );
}

function DatePickerInput({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerInputPrimitive>) {
  return (
    <DatePickerInputPrimitive
      className={cn(
        "placeholder:text-muted-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed",
        className
      )}
      data-slot="date-picker-input"
      {...props}
    />
  );
}

function DatePickerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTriggerPrimitive>) {
  return (
    <DatePickerTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="date-picker-trigger"
      {...props}
    >
      {children || <CalendarIcon className="h-4 w-4" />}
    </DatePickerTriggerPrimitive>
  );
}

function DatePickerClearTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerClearTriggerPrimitive>) {
  return (
    <DatePickerClearTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="date-picker-clear-trigger"
      {...props}
    >
      {children || <XIcon className="h-4 w-4" />}
    </DatePickerClearTriggerPrimitive>
  );
}

function DatePickerPositioner({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerPositionerPrimitive>) {
  return (
    <DatePickerPositionerPrimitive
      className={cn("z-50", className)}
      data-slot="date-picker-positioner"
      {...props}
    />
  );
}

function DatePickerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerContentPrimitive>) {
  return (
    <DatePickerContentPrimitive
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-auto rounded-lg border p-4 shadow-lg backdrop-blur-sm",
        className
      )}
      data-slot="date-picker-content"
      {...props}
    >
      {children}
    </DatePickerContentPrimitive>
  );
}

function DatePickerYearSelect({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerYearSelectPrimitive>) {
  return (
    <DatePickerYearSelectPrimitive
      className={cn(
        "border-input bg-background ring-offset-background focus:ring-ring flex h-8 w-20 rounded-md border px-2 py-1 text-xs focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="date-picker-year-select"
      {...props}
    />
  );
}

function DatePickerMonthSelect({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerMonthSelectPrimitive>) {
  return (
    <DatePickerMonthSelectPrimitive
      className={cn(
        "border-input bg-background ring-offset-background focus:ring-ring flex h-8 w-24 rounded-md border px-2 py-1 text-xs focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-slot="date-picker-month-select"
      {...props}
    />
  );
}

function DatePickerView({
  className,
  view,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerViewPrimitive>) {
  return (
    <DatePickerViewPrimitive
      className={cn("space-y-3", className)}
      data-slot="date-picker-view"
      view={view}
      {...props}
    >
      {children}
    </DatePickerViewPrimitive>
  );
}

function DatePickerContext({
  children,
  ...props
}: React.ComponentProps<typeof DatePickerContextPrimitive>) {
  return (
    <DatePickerContextPrimitive data-slot="date-picker-context" {...props}>
      {children}
    </DatePickerContextPrimitive>
  );
}

function DatePickerViewControl({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerViewControlPrimitive>) {
  return (
    <DatePickerViewControlPrimitive
      className={cn("flex items-center justify-between", className)}
      data-slot="date-picker-view-control"
      {...props}
    >
      {children}
    </DatePickerViewControlPrimitive>
  );
}

function DatePickerPrevTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerPrevTriggerPrimitive>) {
  return (
    <DatePickerPrevTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="date-picker-prev-trigger"
      {...props}
    >
      {children || <CaretLeftIcon className="h-4 w-4" />}
    </DatePickerPrevTriggerPrimitive>
  );
}

function DatePickerViewTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerViewTriggerPrimitive>) {
  return (
    <DatePickerViewTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 px-3",
        className
      )}
      data-slot="date-picker-view-trigger"
      {...props}
    >
      {children}
    </DatePickerViewTriggerPrimitive>
  );
}

function DatePickerRangeText({
  className,
  ...props
}: React.ComponentProps<typeof DatePickerRangeTextPrimitive>) {
  return (
    <DatePickerRangeTextPrimitive
      className={cn("text-sm font-medium", className)}
      data-slot="date-picker-range-text"
      {...props}
    />
  );
}

function DatePickerNextTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerNextTriggerPrimitive>) {
  return (
    <DatePickerNextTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
        className
      )}
      data-slot="date-picker-next-trigger"
      {...props}
    >
      {children || <CaretRightIcon className="h-4 w-4" />}
    </DatePickerNextTriggerPrimitive>
  );
}

function DatePickerTable({
  className,
  columns,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTablePrimitive>) {
  return (
    <DatePickerTablePrimitive
      className={cn("w-full", className)}
      data-slot="date-picker-table"
      columns={columns}
      {...props}
    >
      {children}
    </DatePickerTablePrimitive>
  );
}

function DatePickerTableHead({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableHeadPrimitive>) {
  return (
    <DatePickerTableHeadPrimitive
      className={cn("", className)}
      data-slot="date-picker-table-head"
      {...props}
    >
      {children}
    </DatePickerTableHeadPrimitive>
  );
}

function DatePickerTableRow({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableRowPrimitive>) {
  return (
    <DatePickerTableRowPrimitive
      className={cn("", className)}
      data-slot="date-picker-table-row"
      {...props}
    >
      {children}
    </DatePickerTableRowPrimitive>
  );
}

function DatePickerTableHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableHeaderPrimitive>) {
  return (
    <DatePickerTableHeaderPrimitive
      className={cn(
        "text-muted-foreground h-8 w-8 text-center text-xs font-medium",
        className
      )}
      data-slot="date-picker-table-header"
      {...props}
    >
      {children}
    </DatePickerTableHeaderPrimitive>
  );
}

function DatePickerTableBody({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableBodyPrimitive>) {
  return (
    <DatePickerTableBodyPrimitive
      className={cn("", className)}
      data-slot="date-picker-table-body"
      {...props}
    >
      {children}
    </DatePickerTableBodyPrimitive>
  );
}

function DatePickerTableCell({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableCellPrimitive>) {
  return (
    <DatePickerTableCellPrimitive
      className={cn("p-0", className)}
      data-slot="date-picker-table-cell"
      value={value}
      {...props}
    >
      {children}
    </DatePickerTableCellPrimitive>
  );
}

function DatePickerTableCellTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DatePickerTableCellTriggerPrimitive>) {
  return (
    <DatePickerTableCellTriggerPrimitive
      className={cn(
        "ring-offset-background focus:ring-ring inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[today]:bg-accent data-[today]:text-accent-foreground data-[outside-month]:text-muted-foreground/50",
        className
      )}
      data-slot="date-picker-table-cell-trigger"
      {...props}
    >
      {children}
    </DatePickerTableCellTriggerPrimitive>
  );
}

export {
  DatePicker,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerContext,
  DatePickerViewControl,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerRangeText,
  DatePickerNextTrigger,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
};
