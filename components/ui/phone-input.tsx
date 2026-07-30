"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const COUNTRIES = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
];

export interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
  className?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = "", onChange, defaultCountry = "US", className }, ref) => {
    const [open, setOpen] = React.useState(false);
    
    // Extract country and local number if possible
    const currentCountry = React.useMemo(() => {
      if (value.startsWith("+")) {
        const matching = COUNTRIES.find(c => value.startsWith(c.dialCode));
        if (matching) return matching;
      }
      return COUNTRIES.find(c => c.code === defaultCountry) || COUNTRIES[0];
    }, [value, defaultCountry]);

    const localNumber = value.startsWith(currentCountry.dialCode) 
      ? value.slice(currentCountry.dialCode.length).trim()
      : value;

    const handleCountrySelect = (countryCode: string) => {
      const selected = COUNTRIES.find(c => c.code === countryCode);
      if (selected) {
        onChange?.(`${selected.dialCode} ${localNumber}`);
      }
      setOpen(false);
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.replace(/[^\d\s-]/g, ""); // basic filtering
      if (val.startsWith(currentCountry.dialCode)) {
        val = val.slice(currentCountry.dialCode.length).trim();
      }
      onChange?.(`${currentCountry.dialCode} ${val}`);
    };

    return (
      <div className={cn("flex w-full rounded-md shadow-sm", className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              role="combobox"
              aria-expanded={open}
              className="w-[120px] justify-between rounded-r-none border-r-0 rounded-l-md px-3 bg-bg-elevated hover:bg-white/5 border-white/10"
            >
              <span className="flex items-center gap-2">
                {currentCountry.flag}
                <span className="text-muted-foreground">{currentCountry.dialCode}</span>
              </span>
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[280px] p-0 bg-bg-card border-white/10" align="start">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {COUNTRIES.map((country) => (
                    <CommandItem
                      key={country.code}
                      value={`${country.name} ${country.dialCode}`}
                      onSelect={() => handleCountrySelect(country.code)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          currentCountry.code === country.code
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      <span className="mr-2">{country.flag}</span>
                      <span className="flex-1">{country.name}</span>
                      <span className="text-muted-foreground">{country.dialCode}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          type="tel"
          ref={ref}
          value={localNumber}
          onChange={handleNumberChange}
          placeholder="Phone number"
          className="rounded-l-none border-l-0 bg-bg-app border-white/10 focus-visible:ring-lime focus-visible:border-transparent flex-1"
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
