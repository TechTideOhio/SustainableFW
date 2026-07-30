// @ts-nocheck
"use client";

import * as React from "react";
import { format, subDays, startOfMonth, endOfMonth, startOfDay, endOfDay } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface DatePickerProps {
  date?: Date;
  onDateChange?: (date?: Date) => void;
  className?: string;
  placeholder?: string;
}

export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ date, onDateChange, className, placeholder = "Pick a date" }, ref) => {
    return (
      <Popover>
        <div className="relative">
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="secondary"
              className={cn(
                "w-[240px] justify-start text-left font-normal bg-bg-elevated border-white/10 rounded-xl",
                !date && "text-zinc-500",
                className
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-zinc-400" />
              {date ? format(date, "PPP") : <span>{placeholder}</span>}
            </Button>
          </PopoverTrigger>
          {date && onDateChange && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-zinc-500 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onDateChange(undefined);
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <PopoverContent className="w-auto p-0 bg-bg-card border-white/10" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            initialFocus
            className="text-white bg-bg-card"
          />
        </PopoverContent>
      </Popover>
    );
  }
);
DatePicker.displayName = "DatePicker";

interface DateRangePickerProps {
  date?: DateRange;
  onDateChange?: (date?: DateRange) => void;
  className?: string;
  placeholder?: string;
  showPresets?: boolean;
}

export const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    { date, onDateChange, className, placeholder = "Pick a date range", showPresets = true },
    ref
  ) => {
    return (
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <div className="relative">
            <PopoverTrigger asChild>
              <Button
                ref={ref}
                id="date"
                variant="secondary"
                className={cn(
                  "w-[300px] justify-start text-left font-normal bg-bg-elevated border-white/10 rounded-xl",
                  !date && "text-zinc-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-zinc-400" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>{placeholder}</span>
                )}
              </Button>
            </PopoverTrigger>
            {date?.from && onDateChange && (
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-zinc-500 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  onDateChange(undefined);
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          <PopoverContent className="w-auto p-0 bg-bg-card border-white/10" align="start">
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {showPresets && (
                <div className="p-3 w-full sm:w-[150px] flex flex-col gap-2">
                  <Select
                    onValueChange={(value) => {
                      const today = new Date();
                      switch (value) {
                        case "today":
                          onDateChange?.({ from: startOfDay(today), to: endOfDay(today) });
                          break;
                        case "yesterday":
                          const yesterday = subDays(today, 1);
                          onDateChange?.({ from: startOfDay(yesterday), to: endOfDay(yesterday) });
                          break;
                        case "7days":
                          onDateChange?.({ from: startOfDay(subDays(today, 7)), to: endOfDay(today) });
                          break;
                        case "30days":
                          onDateChange?.({ from: startOfDay(subDays(today, 30)), to: endOfDay(today) });
                          break;
                        case "thisMonth":
                          onDateChange?.({ from: startOfMonth(today), to: endOfMonth(today) });
                          break;
                        case "lastMonth":
                          const lastMonth = startOfMonth(subDays(startOfMonth(today), 1));
                          onDateChange?.({ from: lastMonth, to: endOfMonth(lastMonth) });
                          break;
                      }
                    }}
                  >
                    <SelectTrigger className="w-full bg-bg-elevated border-white/10 text-white">
                      <SelectValue placeholder="Select preset" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-bg-elevated border-white/10 text-white">
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="yesterday">Yesterday</SelectItem>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="thisMonth">This month</SelectItem>
                      <SelectItem value="lastMonth">Last month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="p-3">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={onDateChange}
                  numberOfMonths={2}
                  className="text-white bg-bg-card"
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);
DateRangePicker.displayName = "DateRangePicker";
