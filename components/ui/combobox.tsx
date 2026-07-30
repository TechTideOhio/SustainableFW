"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { Badge } from "./badge";

export interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps<T extends ComboboxOption> {
  options: T[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  emptyText?: string;
  className?: string;
  onCreateNew?: () => void;
}

export function Combobox<T extends ComboboxOption>({
  options,
  value,
  onChange,
  placeholder = "Select option...",
  emptyText = "No option found.",
  className,
  onCreateNew,
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] justify-between bg-bg-elevated border-white/10 text-white rounded-xl",
            !value && "text-zinc-500",
            className
          )}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-bg-card border-white/10" align="start">
        <Command className="bg-bg-card text-white">
          <CommandInput placeholder={placeholder} className="text-white placeholder:text-zinc-500" />
          <CommandList>
            <CommandEmpty className="py-6 text-center text-sm text-zinc-500">{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label} // CommandItem matches against value by default in cmdk, usually label is typed
                  onSelect={() => {
                    onChange?.(option.value === value ? "" : option.value);
                    setOpen(false);
                  }}
                  className="text-white aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-lime",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
            {onCreateNew && (
              <>
                <CommandSeparator className="bg-white/10" />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      onCreateNew();
                      setOpen(false);
                    }}
                    className="text-lime aria-selected:bg-white/10 aria-selected:text-lime"
                  >
                    Create new...
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

interface MultiComboboxProps<T extends ComboboxOption> {
  options: T[];
  values?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  emptyText?: string;
  className?: string;
  onCreateNew?: () => void;
}

export function MultiCombobox<T extends ComboboxOption>({
  options,
  values = [],
  onChange,
  placeholder = "Select options...",
  emptyText = "No option found.",
  className,
  onCreateNew,
}: MultiComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);

  const selectedOptions = options.filter((opt) => values.includes(opt.value));

  const handleUnselect = (valueToRemove: string) => {
    onChange?.(values.filter((v) => v !== valueToRemove));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[300px] justify-between h-auto min-h-10 bg-bg-elevated border-white/10 text-white rounded-xl py-1.5 px-3",
            values.length === 0 && "text-zinc-500",
            className
          )}
        >
          <div className="flex flex-wrap gap-1 items-center max-w-[calc(100%-20px)]">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <Badge
                  key={option.value}
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white border-none rounded-md px-1.5 py-0.5 text-xs font-medium flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnselect(option.value);
                  }}
                >
                  {option.label}
                  <X className="h-3 w-3 text-zinc-400 hover:text-white" />
                </Badge>
              ))
            ) : (
              <span className="text-sm">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-bg-card border-white/10" align="start">
        <Command className="bg-bg-card text-white">
          <CommandInput placeholder={placeholder} className="text-white placeholder:text-zinc-500" />
          <CommandList>
            <CommandEmpty className="py-6 text-center text-sm text-zinc-500">{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = values.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => {
                      if (isSelected) {
                        handleUnselect(option.value);
                      } else {
                        onChange?.([...values, option.value]);
                      }
                    }}
                    className="text-white aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 text-lime",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {onCreateNew && (
              <>
                <CommandSeparator className="bg-white/10" />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      onCreateNew();
                      setOpen(false);
                    }}
                    className="text-lime aria-selected:bg-white/10 aria-selected:text-lime"
                  >
                    Create new...
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
